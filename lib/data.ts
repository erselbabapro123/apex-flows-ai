import {
  Bot,
  CalendarCheck,
  Code2,
  Compass,
  Eye,
  Gauge,
  Globe,
  HeartHandshake,
  Layers,
  LineChart,
  MessageCircle,
  Palette,
  PenTool,
  Rocket,
  Search,
  ShieldCheck,
  Smartphone,
  Sparkles,
  Target,
  Workflow,
  Zap,
  type LucideIcon,
} from "lucide-react";

/* ───────────────────────── Hizmetler ───────────────────────── */

export type Service = {
  slug: string;
  index: string;
  title: string;
  short: string;
  description: string;
  icon: LucideIcon;
  benefits: string[];
  forWho: string[];
  deliverables: string[];
  from: string;
  cta: string;
};

export const services: Service[] = [
  {
    slug: "web",
    index: "01",
    title: "Web Site Tasarımı",
    short: "Güven veren, hızlı ve müşteriye dönüşen web siteleri.",
    description:
      "Markanızı ilk saniyede doğru anlatan, mobilde kusursuz çalışan ve ziyaretçiyi WhatsApp, form ya da telefona yönlendiren özel tasarım web siteleri.",
    icon: Globe,
    benefits: [
      "Google’da bulunur, ilk bakışta güven verirsiniz",
      "Ziyaretçiyi tek dokunuşla WhatsApp veya forma taşır",
      "Mobilde hızlı açılacak şekilde baştan optimize edilir",
      "Instagram’a bağımlılığınızı azaltır, size ait bir kanal kurar",
    ],
    forWho: ["Kafe & restoran", "Klinik & sağlık", "Kuaför & berber", "Butik & e-ticaret öncesi markalar"],
    deliverables: ["Özel UI tasarımı", "Mobil öncelikli geliştirme", "SEO altyapısı", "Analitik kurulumu"],
    from: "9.900 TL",
    cta: "Web sitesi teklifi al",
  },
  {
    slug: "automation",
    index: "02",
    title: "AI Otomasyon",
    short: "Mesaj, randevu ve takip işlerini sizin yerinize yürüten sistemler.",
    description:
      "Tekrarlayan işleri yapay zekâ destekli akışlara devrediyoruz. DM’ler yanıtlanır, randevular oluşturulur, müşteriler hatırlatılır, siz işinize odaklanırsınız.",
    icon: Workflow,
    benefits: [
      "Gelen mesajlara 7/24 anında ve tutarlı yanıt",
      "Randevu, rezervasyon ve hatırlatmalar otomatik",
      "Kaçan müşteri ve unutulan takip sıfıra yaklaşır",
      "Ekibiniz her hafta saatlerce zaman kazanır",
    ],
    forWho: ["Randevulu çalışan işletmeler", "Yoğun DM alan markalar", "Klinik & stüdyolar", "Hizmet satan ekipler"],
    deliverables: ["Süreç analizi", "AI asistan kurulumu", "Entegrasyonlar", "Raporlama paneli"],
    from: "7.500 TL",
    cta: "Otomasyon analizi iste",
  },
  {
    slug: "branding",
    index: "03",
    title: "Logo & Branding",
    short: "Akılda kalan, fiyatınızı taşıyan bir marka kimliği.",
    description:
      "Logo, renk, tipografi ve kullanım kurallarıyla işletmenizi rakiplerinden ayıran, her mecrada tutarlı görünen bir kimlik sistemi tasarlıyoruz.",
    icon: PenTool,
    benefits: [
      "Daha yüksek algılanan değer, daha rahat fiyatlama",
      "Instagram’dan tabelaya kadar tutarlı görünüm",
      "Kolay hatırlanan, sade ve zamansız bir işaret",
      "Hazır şablonlarla hızlı içerik üretimi",
    ],
    forWho: ["Yeni açılan işletmeler", "Yenilenmek isteyen markalar", "Şube açmaya hazırlananlar", "Premium konumlanmak isteyenler"],
    deliverables: ["Logo & varyasyonları", "Renk & tipografi", "Sosyal medya şablonları", "Marka kılavuzu"],
    from: "3.500 TL",
    cta: "Marka çalışması başlat",
  },
];

/* ───────────────────────── Neden biz ───────────────────────── */

export const reasons = [
  { icon: Target, title: "Dönüşüm odaklı", text: "Her bölüm tek bir amaca hizmet eder: ziyaretçiyi müşteriye çevirmek." },
  { icon: Gauge, title: "Işık hızında", text: "Next.js altyapısı, optimize görseller ve yüksek Lighthouse skorları." },
  { icon: Smartphone, title: "Önce mobil", text: "Müşterileriniz telefonda. Tasarıma da oradan başlıyoruz." },
  { icon: Bot, title: "AI hazır", text: "Siteniz otomasyonlara bağlanmaya ilk günden hazır kurulur." },
  { icon: ShieldCheck, title: "Şeffaf süreç", text: "Net fiyat, net teslim tarihi, her adımda bilgilendirme." },
  { icon: HeartHandshake, title: "Teslimden sonra da", text: "Bakım, güncelleme ve büyüme adımlarında yanınızdayız." },
];

/* ───────────────────────── Süreç ───────────────────────── */

export const processSteps = [
  { step: "01", icon: Compass, title: "Keşif", text: "İşletmenizi, müşterinizi ve hedefinizi 30 dakikalık bir görüşmede netleştiriyoruz.", time: "1. gün" },
  { step: "02", icon: Palette, title: "Tasarım", text: "Markanıza özel arayüzü tasarlıyor, onayınıza sunuyoruz. Revizeler bu aşamada.", time: "2–6. gün" },
  { step: "03", icon: Code2, title: "Geliştirme", text: "Tasarımı hızlı, güvenli ve SEO uyumlu bir siteye dönüştürüyor, otomasyonları bağlıyoruz.", time: "7–12. gün" },
  { step: "04", icon: Rocket, title: "Yayın & Büyüme", text: "Siteyi yayına alıyor, ölçümlemeyi kuruyor ve ilk sonuçları birlikte değerlendiriyoruz.", time: "Teslim" },
];

/* ───────────────────────── Paketler ───────────────────────── */

export type Plan = {
  id: string;
  name: string;
  price: string;
  tagline: string;
  delivery: string;
  features: string[];
  featured?: boolean;
  cta: string;
};

export const plans: Plan[] = [
  {
    id: "starter",
    name: "Starter",
    price: "9.900",
    tagline: "Hızlı ve profesyonel bir başlangıç.",
    delivery: "5–7 iş günü",
    features: [
      "Tek sayfa profesyonel web sitesi",
      "Mobil uyumlu tasarım",
      "Temel SEO ayarları",
      "WhatsApp iletişim butonu",
      "Hızlı teslimat",
      "1 revize hakkı",
    ],
    cta: "Starter ile başla",
  },
  {
    id: "business",
    name: "Business",
    price: "17.900",
    tagline: "Büyüyen işletmeler için tam donanım.",
    delivery: "10–14 iş günü",
    featured: true,
    features: [
      "Çok sayfalı profesyonel web sitesi",
      "Mobil uyumlu özel tasarım",
      "Gelişmiş SEO altyapısı",
      "İletişim formu",
      "Hizmet / paket sayfaları",
      "Temel animasyonlar",
      "Dönüşüm odaklı yapı",
      "2 revize hakkı",
    ],
    cta: "Business’ı seç",
  },
  {
    id: "premium",
    name: "Premium",
    price: "34.900",
    tagline: "Markanıza özel, sistemli bir dijital merkez.",
    delivery: "3–4 hafta",
    features: [
      "Tam özel premium tasarım",
      "İleri seviye animasyonlar",
      "Marka kimliğine özel arayüz",
      "AI otomasyon entegrasyonları",
      "Gelişmiş formlar / lead sistemi",
      "Özel CTA stratejisi",
      "Öncelikli destek",
      "3 revize hakkı",
    ],
    cta: "Premium görüşme planla",
  },
];

export const addons = [
  { icon: PenTool, title: "Logo Tasarımı", price: "3.500 TL", note: "’den başlayan" },
  { icon: Layers, title: "Kurumsal Kimlik", price: "6.500 TL", note: "’den başlayan" },
  { icon: Workflow, title: "Otomasyon Kurulumu", price: "7.500 TL", note: "’den başlayan" },
  { icon: Zap, title: "Bakım / Güncelleme", price: "2.500 TL", note: " / ay’dan başlayan" },
];

export const comparison: { label: string; values: [string | boolean, string | boolean, string | boolean] }[] = [
  { label: "Sayfa sayısı", values: ["1", "5’e kadar", "Sınırsız"] },
  { label: "Özel tasarım", values: ["Şablon tabanlı", true, true] },
  { label: "SEO", values: ["Temel", "Gelişmiş", "Gelişmiş + içerik planı"] },
  { label: "Animasyonlar", values: [false, "Temel", "İleri seviye"] },
  { label: "İletişim formu", values: [false, true, "Lead sistemi"] },
  { label: "AI otomasyon", values: [false, false, true] },
  { label: "Revize", values: ["1", "2", "3"] },
  { label: "Destek", values: ["E-posta", "WhatsApp", "Öncelikli"] },
];

/* ───────────────────────── Portfolyo ───────────────────────── */

export type Project = {
  slug: string;
  sector: string;
  title: string;
  summary: string;
  services: string[];
  before: string[];
  after: string[];
  palette: [string, string, string];
};

// Konsept çalışmalar: gerçek müşteri projeleri eklendiğinde bu listeyi güncelleyin.
export const projects: Project[] = [
  {
    slug: "noir-coffee",
    sector: "Kafe",
    title: "Noir Coffee Lab",
    summary: "Menü, konum ve rezervasyonu tek ekranda toplayan, sıcak tonlarda bir kafe deneyimi.",
    services: ["Web", "Branding"],
    before: ["Sadece Instagram", "Menü fotoğrafla paylaşılıyor", "Rezervasyon DM ile"],
    after: ["QR uyumlu dijital menü", "Tek dokunuşla yol tarifi", "Otomatik rezervasyon onayı"],
    palette: ["#2B1D14", "#C08552", "#F3E9DC"],
  },
  {
    slug: "lumen-clinic",
    sector: "Klinik",
    title: "Lumen Estetik",
    summary: "Güven odaklı, sakin bir arayüz ve 7/24 çalışan randevu asistanı.",
    services: ["Web", "Otomasyon"],
    before: ["Telefonla randevu", "Yoğun saatlerde kaçan çağrılar", "Dağınık hasta takibi"],
    after: ["Online randevu akışı", "AI ön bilgilendirme", "Otomatik hatırlatma mesajları"],
    palette: ["#0E1B24", "#7FB7BE", "#EAF4F4"],
  },
  {
    slug: "atelier-blade",
    sector: "Berber",
    title: "Atelier Blade",
    summary: "Karakterli bir marka kimliği ve hizmet bazlı online randevu sistemi.",
    services: ["Branding", "Web", "Otomasyon"],
    before: ["Logosuz, tutarsız görünüm", "Randevu karmaşası", "Fiyat bilgisi belirsiz"],
    after: ["Yeni logo & tabela", "Usta seçmeli randevu", "Net hizmet menüsü"],
    palette: ["#111111", "#B08D57", "#EFEAE2"],
  },
  {
    slug: "flora-studio",
    sector: "Çiçekçi",
    title: "Flora Studio",
    summary: "Ürün odaklı vitrin, WhatsApp’tan sipariş ve teslimat bölgesi kontrolü.",
    services: ["Web", "Otomasyon"],
    before: ["Siparişler DM’de kayboluyor", "Ürünler tek tek soruluyor"],
    after: ["Kategori bazlı ürün vitrini", "Hazır sipariş mesajı", "Teslimat saati seçimi"],
    palette: ["#1D2420", "#E58F9E", "#F7F1EC"],
  },
  {
    slug: "core-pilates",
    sector: "Pilates Stüdyosu",
    title: "Core & Co.",
    summary: "Ders programı, paket satışı ve deneme dersi talebi için sade bir dönüşüm sayfası.",
    services: ["Web", "Branding"],
    before: ["Ders programı hikâyelerde", "Deneme dersi talebi zor"],
    after: ["Canlı ders takvimi", "Tek adımlı deneme dersi formu", "Paket karşılaştırma"],
    palette: ["#161A1D", "#C9B79C", "#F4F1EA"],
  },
  {
    slug: "gloss-detailing",
    sector: "Detailing",
    title: "Gloss Garage",
    summary: "Öncesi/sonrası galerili, paket seçimli ve randevulu premium detailing sitesi.",
    services: ["Web", "Branding", "Otomasyon"],
    before: ["Fiyatlar telefonda soruluyor", "İşler tanıtılamıyor"],
    after: ["Paket bazlı fiyat sayfası", "Öncesi / sonrası galerisi", "Otomatik randevu teyidi"],
    palette: ["#0A0C10", "#3B7CFF", "#E6ECF5"],
  },
];

export const sectors = [
  "Kafe & Restoran",
  "Kuaför",
  "Berber",
  "Klinik",
  "Butik",
  "Detailing",
  "Çiçekçi",
  "Pilates Stüdyosu",
  "Güzellik Merkezi",
  "Diş Kliniği",
  "Emlak",
  "Spor Salonu",
];

/* ───────────────────────── SSS ───────────────────────── */

export const faqs = [
  {
    q: "Web sitesi teslim süresi nedir?",
    a: "Starter paket 5–7 iş günü, Business 10–14 iş günü, Premium ise kapsamına göre 3–4 hafta içinde teslim edilir. Süre, içeriklerin (logo, metin, görsel) bize ulaştığı günden itibaren başlar.",
  },
  {
    q: "Ödeme nasıl yapılır?",
    a: "Proje onayında %50 ön ödeme, yayına alma öncesinde kalan %50 alınır. Havale/EFT ile ödeme yapabilir, faturanızı aynı gün alabilirsiniz.",
  },
  {
    q: "Revize hakkı var mı?",
    a: "Evet. Paketinize göre 1, 2 veya 3 revize turu dahildir. Her turda tasarımla ilgili tüm notlarınızı tek seferde toplayıp uyguluyoruz.",
  },
  {
    q: "Domain / hosting dahil mi?",
    a: "İlk yıl için domain ve hosting kurulumunu biz yapıyoruz; domain ücreti ayrıca faturalandırılır. Hosting için hızlı ve güvenli altyapılar öneriyor, tüm erişimleri size teslim ediyoruz.",
  },
  {
    q: "Otomasyon tam olarak ne sağlar?",
    a: "Tekrarlayan işleri sizin yerinize yapar: Instagram ve WhatsApp mesajlarına ilk yanıt, randevu oluşturma, hatırlatma mesajları, form taleplerinin tabloya düşmesi ve size bildirim gelmesi gibi. Hangi akışların size zaman kazandıracağını ücretsiz analizde birlikte belirliyoruz.",
  },
  {
    q: "Logo tasarımı ayrı satın alınabilir mi?",
    a: "Evet. Logo tasarımı 3.500 TL’den, logo dahil kurumsal kimlik çalışması 6.500 TL’den başlar ve web sitesinden bağımsız alınabilir.",
  },
  {
    q: "Sonradan ekleme yapılabilir mi?",
    a: "Elbette. Siteniz büyümeye uygun kurulur; yeni sayfa, dil, otomasyon veya özellik eklemeleri ayrı tekliflendirilir. Aylık bakım paketiyle güncellemeleri bize bırakabilirsiniz.",
  },
];

/* ───────────────────────── Hakkımızda ───────────────────────── */

export const values = [
  { icon: Eye, title: "Netlik", text: "Karmaşık teknolojiyi sade, anlaşılır çözümlere çeviririz." },
  { icon: Sparkles, title: "Zanaat", text: "Piksel, kelime ve milisaniye seviyesinde özen gösteririz." },
  { icon: LineChart, title: "Sonuç", text: "Güzel görünmek başlangıçtır; asıl hedef büyümenizdir." },
  { icon: MessageCircle, title: "Yakınlık", text: "Ulaşılabilir, hızlı ve dürüst bir ekip olarak çalışırız." },
];

export const differentiators = [
  { icon: Layers, title: "Tek çatı, üç uzmanlık", text: "Marka, web ve otomasyon aynı ekipte; parçalar birbirine uyumlu tasarlanır." },
  { icon: CalendarCheck, title: "Takvime sadakat", text: "Teslim tarihini baştan yazılı olarak veririz ve ona uyarız." },
  { icon: Search, title: "Bulunabilirlik", text: "Her proje SEO ve hız temeli üzerine kurulur, sonradan eklenmez." },
];

export const trust = ["Teslim tarihi garantisi", "Şeffaf, sabit fiyat", "Tüm erişimler size ait", "Teslim sonrası destek"];
