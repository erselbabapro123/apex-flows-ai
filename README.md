# Apex Flows AI — Ajans Web Sitesi

Next.js 15 (App Router) · TypeScript · Tailwind CSS · Framer Motion · Lucide

## Kurulum

```bash
npm install
npm run dev        # http://localhost:3000
npm run build && npm start
```

Yayına alma: projeyi GitHub'a yükleyip Vercel'e bağlayın (ek ayar gerekmez). `NEXT_PUBLIC_SITE_URL` değişkenini gerçek alan adınızla tanımlayın.

## Yayından önce doldurulacaklar

| Dosya | Ne |
|---|---|
| `lib/site.ts` | WhatsApp numarası (`905XXXXXXXXX`), e-posta, Instagram kullanıcı adı |
| `lib/data.ts` | Teslim süreleri, paket içerikleri, SSS cevapları, portfolyo |
| `app/api/contact/route.ts` | Form taleplerinin gideceği yer (Resend, Google Sheets, n8n webhook vb.) |
| `components/sections/ProjectVisual.tsx` | Gerçek proje görselleri gelince `next/image` ile değiştirin |

Tüm metinler ve fiyatlar `lib/data.ts` içindedir; bileşenlere dokunmadan güncellenir.

## Klasör yapısı

```
app/
  layout.tsx            fontlar, SEO metadata, JSON-LD, navbar/footer
  page.tsx              ana sayfa
  services/ pricing/ portfolio/ about/ contact/ faq/
  api/contact/route.ts  form uç noktası
  sitemap.ts robots.ts icon.svg not-found.tsx
components/
  layout/    Navbar (mobil tam ekran menü), Footer, WhatsAppFloat
  sections/  Hero, HeroConsole, Statement, ServicesShowcase, WhyUs, Process,
             PricingCards, Addons, PortfolioPreview, ProjectVisual, FAQSection,
             CTABanner, PageHero, SectorMarquee
  ui/        Button, Magnetic, Reveal, SectionHeading, SpotlightCard, Accordion, Marquee, Logo
  effects/   GridBackdrop, ScrollProgress, CursorGlow
lib/         site.ts (iletişim), data.ts (içerik), utils.ts (cn, easing)
```

## Hareket sistemi

- Tek easing eğrisi: `cubic-bezier(.16, 1, .3, 1)`. Tüm geçişler aynı ritimde.
- **Hero:** kelime kelime maskeli giriş, dönen konik ışık, scroll parallax. Ürün paneli 3B eğimle gelip kaydırdıkça düzleşiyor; panelde canlı otomasyon akışı ve aktivite akışı var.
- **Statement:** kaydırdıkça kelime kelime aydınlanan manifesto metni.
- **Kartlar:** imleci takip eden spotlight ışığı, hafif yükselme, dönen ok.
- **Fiyatlar:** "En Popüler" kartta dönen konik ışık çerçevesi.
- **Süreç:** scroll ile dolan dikey ilerleme çizgisi, yapışkan başlık.
- **Butonlar:** ışık süpürmesi, ok değişimi, manyetik CTA.
- `prefers-reduced-motion` açıkken animasyonlar kapanıyor. İmleç efektleri yalnızca fareyle çalışıyor.

---

## 1. Site haritası

```
/              Ana sayfa
├─ /services   Hizmetler  (#web · #automation · #branding)
├─ /portfolio  Çalışmalar (filtrelenebilir, öncesi/sonrası)
├─ /pricing    Paketler & karşılaştırma & ek hizmetler
├─ /about      Hikâye · misyon · vizyon · değerler
├─ /faq        Sıkça sorulan sorular
└─ /contact    İletişim · hızlı teklif · form (#teklif)
```

## 2. Renk paleti

| Rol | HEX |
|---|---|
| Zemin (ink-900) | `#0B0D10` |
| Derin zemin (ink-950) | `#07080A` |
| Yüzey / kart (ink-850 / 800) | `#0F1216` / `#16191F` |
| Çizgi (ink-600) | `#2A2F38` |
| Başlık (mist-100) | `#F5F7FA` |
| Gövde metni (mist-200 / 400) | `#E3E7ED` / `#A9B0BC` |
| Vurgu — Electric Blue | `#3B7CFF` (soft `#6D9DFF`) |
| Alternatif vurgu — Signal Orange | `#FF6A1F` |

Turuncuya geçmek için `tailwind.config.ts` içindeki `accent` değerini `#FF6A1F` yapmanız yeterli.

## 3. Fontlar

- **Space Grotesk:** başlıklar, fiyatlar, logo
- **Inter:** gövde metni ve arayüz
- **JetBrains Mono:** etiketler ve numaralar (01 / 02)

Üçü de `next/font` ile kendi sunucunuzdan yükleniyor ve Türkçe karakterleri destekliyor.

## 4. Sayfaların amacı

| Sayfa | Amaç | Ana CTA |
|---|---|---|
| Ana sayfa | İlk 5 saniyede güven ve "premium" algısı yaratmak, ziyaretçiyi teklife yönlendirmek | Ücretsiz Teklif Al |
| Hizmetler | Her hizmetin ne kazandırdığını ve kime uygun olduğunu netleştirmek | Hizmete özel teklif / WhatsApp |
| Çalışmalar | Yetkinliği sektör örnekleriyle somutlaştırmak | Sıradaki çalışma sizin olsun |
| Paketler | Fiyat itirazını şeffaflıkla ortadan kaldırmak | Paket bazlı WhatsApp mesajı |
| Hakkımızda | Markanın arkasındaki niyeti ve standardı göstermek | Keşif görüşmesi |
| SSS | Satın alma öncesi son soruları cevaplamak | WhatsApp'tan sorun |
| İletişim | Talebi en az sürtünmeyle almak | Form, WhatsApp, Instagram |

## 5. CTA stratejisi

1. **Tek birincil eylem:** Her ekranda mavi tek bir buton var: "Teklif Al". İkincil eylemler cam/çerçeveli.
2. **Kanal seçme özgürlüğü:** Form (detaylı talep), WhatsApp (hızlı, ön doldurulmuş mesaj), Instagram (takip).
3. **Bağlama göre ön doldurulmuş mesaj:** Paket kartları ve hizmet bağlantıları WhatsApp'ı ilgili paket/hizmet adıyla açıyor.
4. **Her zaman erişilebilir:** Sabit WhatsApp butonu, sabit navbar'daki "Teklif Al", her sayfanın sonunda CTA banner.
5. **Risk azaltıcılar CTA'nın yanında:** "Ücretsiz", "aynı gün dönüş", "%50 ön ödeme, kalan onaydan sonra", "tüm erişimler size ait".

## 6. Kısa marka metinleri

- **Slogan:** İşletmeniz, daha akıllı.
- **Tek cümle:** Güven veren web siteleri, kendi kendine çalışan AI otomasyonları ve akılda kalan marka kimlikleri.
- **Konumlandırma:** Freelancer hızında, ajans kalitesinde.
- **Vaat:** Daha profesyonel görünün, daha sistemli çalışın.
- **Manifesto:** Müşterileriniz sizi önce internette görür. Orada nasıl göründüğünüz, kapınızdan girip girmeyeceklerine karar verir.

## 7. Hero için 5 alternatif başlık

1. İşletmenizi dijitalin zirvesine taşıyoruz. *(sitede kullanılan)*
2. Daha iyi görünün. Daha akıllı çalışın.
3. Müşteriniz sizi önce internette görür.
4. Web sitesi, marka ve otomasyon. Tek stüdyoda.
5. Instagram'ın ötesine geçme zamanı.

## 8. 5 farklı CTA metni

1. Ücretsiz Teklif Al
2. 30 Dakikalık Keşif Görüşmesi Planla
3. Paketleri Karşılaştır
4. WhatsApp'tan Hemen Yazın
5. Projemi Anlatmak İstiyorum
