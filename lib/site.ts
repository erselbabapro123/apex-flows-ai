// Tüm iletişim bilgileri tek yerden yönetilir. Yayına almadan önce [ ] alanlarını doldurun.
export const site = {
  name: "Apex Flows AI",
  shortName: "Apex Flows",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://apexflows.ai",
  tagline: "İşletmeniz, daha akıllı.",
  description:
    "Apex Flows AI; işletmeler için premium web siteleri, AI destekli otomasyon sistemleri ve marka kimliği tasarlayan modern dijital çözüm stüdyosudur.",
  // Uluslararası formatta, başında + olmadan: 905XXXXXXXXX
  whatsapp: "905425343883",
  email: "erselflowai@gmail.com",
  instagram: "apexflows.ai",
  location: "Türkiye · Uzaktan, her şehirde",
  responseTime: "Mesai saatlerinde 2 saat içinde dönüş",
};

export const nav = [
  { href: "/services", label: "Hizmetler" },
  { href: "/portfolio", label: "Çalışmalar" },
  { href: "/pricing", label: "Paketler" },
  { href: "/about", label: "Hakkımızda" },
  { href: "/faq", label: "SSS" },
];

export function whatsappLink(message = "Merhaba Apex Flows AI, işletmem için teklif almak istiyorum.") {
  return `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(message)}`;
}

export const instagramLink = `https://instagram.com/${site.instagram}`;
export const mailLink = `mailto:${site.email}`;
