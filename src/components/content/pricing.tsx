import React from 'react';
import Link from 'next/link';

export function Pricing() {
  const packages = [
    {
      name: "Hemat",
      desc: "Cocok untuk kebutuhan website standar dengan fungsionalitas utama yang lengkap dan ramah di kantong.",
      price: "Rp 1.500.000",
      features: [
        "Gratis Domain (.com) 1 Tahun",
        "Website Hosting",
        "Desain Responsif & Modern (HP & Laptop)",
        "Form Pemesanan / Booking Form Dasar",
        "Integrasi Media Sosial",
        "Bantuan Teknis via WhatsApp",
        "Keamanan Free SSL / HTTPS"
      ],
      link: "https://wa.me/6288705361262?text=Halo%20Alfi%2C%20saya%20tertarik%20dengan%20Paket%20Hemat",
      isPopular: false,
      color: "bg-primary-container",
      textColor: "text-on-primary-container"
    },
    {
      name: "Populer",
      desc: "Paling direkomendasikan — kapasitas, fitur, dan performa optimal untuk bisnis profesional.",
      price: "Rp 3.000.000",
      features: [
        "Kapasitas Hosting & Resource Lebih Besar",
        "Kecepatan Server Dioptimalkan (High Performance)",
        "Booking System yang Lebih Interaktif",
        "Halaman Kelola Paket Layanan yang Dinamis",
        "Integrasi Payment Gateway / Opsi Pembayaran",
        "Optimasi SEO Dasar (Mudah Ditemukan di Google)",
        "Dukungan Penulisan Konten Awal",
        "Keamanan Berlapis (Advanced Security)",
        "Prioritas Bantuan Teknis Pasca-Pembuatan"
      ],
      link: "https://wa.me/6288705361262?text=Halo%20Alfi%2C%20saya%20tertarik%20dengan%20Paket%20Populer",
      isPopular: true,
      color: "bg-secondary",
      textColor: "text-on-secondary"
    },
    {
      name: "Profesional",
      desc: "Untuk perusahaan skala besar yang butuh kustomisasi penuh dan performa tanpa kompromi.",
      price: "Rp 5.000.000",
      features: [
        "Semua Fitur Paket Populer, plus:",
        "Storage & Bandwidth Hosting Kapasitas Tinggi",
        "Desain Eksklusif Kustom Sesuai Branding",
        "Multi-Rute / Multi-Paket Kompleks + Filtering Canggih",
        "Sistem Manajemen Pengguna / Client Dashboard",
        "Optimasi SEO Lanjutan (Advanced SEO Setup)",
        "Invoice Otomatis & WhatsApp Notification Gateway",
        "Garansi Maintenance & Monitoring Jangka Panjang",
        "Priority Support 24/7"
      ],
      link: "https://wa.me/6288705361262?text=Halo%20Alfi%2C%20saya%20tertarik%20dengan%20Paket%20Profesional",
      isPopular: false,
      color: "bg-tertiary-container",
      textColor: "text-on-tertiary-container"
    }
  ];

  return (
    <section id="pricing" className="w-full bg-background border-b-4 border-on-surface py-20 px-8 relative z-30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-display-lg text-[40px] md:text-[56px] font-black uppercase tracking-tighter mb-4 text-on-surface">
            Pricing Plans
          </h2>
          <p className="font-body-lg text-[20px] md:text-[24px] opacity-90 max-w-2xl mx-auto text-on-surface">
            Pilih paket pembuatan website yang paling sesuai dengan kebutuhan bisnis Anda.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          {packages.map((pkg, idx) => (
            <div 
              key={idx} 
              className={`relative flex flex-col h-full border-4 border-on-surface bg-surface-container-low transition-transform duration-300 hover:-translate-y-2 hover:shadow-[8px_8px_0px_rgba(0,0,0,1)] ${pkg.isPopular ? 'lg:-mt-8 shadow-[8px_8px_0px_rgba(0,0,0,1)]' : ''}`}
            >
              {pkg.isPopular && (
                <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-playdate-yellow text-on-surface border-4 border-on-surface px-4 py-1 font-label-bold font-bold uppercase whitespace-nowrap z-10 flex items-center gap-2">
                  <span>⭐</span> Paling Populer
                </div>
              )}
              
              <div className={`p-8 border-b-4 border-on-surface ${pkg.color}`}>
                <h3 className={`font-headline-lg text-[32px] font-black uppercase mb-4 ${pkg.textColor}`}>
                  {pkg.name}
                </h3>
                <div className={`font-display-md text-[36px] font-black tracking-tighter mb-4 ${pkg.textColor}`}>
                  {pkg.price}
                </div>
                <p className={`font-body-md text-[16px] leading-relaxed opacity-90 ${pkg.textColor}`}>
                  {pkg.desc}
                </p>
              </div>

              <div className="p-8 flex-grow flex flex-col">
                <ul className="flex flex-col gap-4 mb-8 flex-grow">
                  {pkg.features.map((feature, fIdx) => (
                    <li key={fIdx} className="flex gap-3 items-start">
                      <span className="w-2 h-2 mt-2 bg-on-surface shrink-0"></span>
                      <span className="font-body-md text-[16px] text-on-surface opacity-90 leading-snug">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                <Link 
                  href={pkg.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-full py-4 px-6 border-4 border-on-surface font-label-bold text-[18px] uppercase font-black text-center transition-colors ${
                    pkg.isPopular 
                      ? 'bg-secondary text-on-secondary hover:bg-secondary-container hover:text-on-surface' 
                      : 'bg-surface-variant text-on-surface hover:bg-primary-container'
                  }`}
                >
                  Order Sekarang
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
