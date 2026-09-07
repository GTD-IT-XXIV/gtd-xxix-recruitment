export interface ResponsibilityItem {
  text: string;
  subpoints?: string[];
}

export interface Portfolio {
  id: string;
  code: string;
  name: string;
  icon: string;
  tagline: string;
  overview: string;
  responsibilities: (string | ResponsibilityItem)[];
  requirements: string[];
}

export const portfolios: Portfolio[] = [
  {
    id: "bfm",
    code: "BFM",
    name: "Business and Finance Manager",
    icon: "$",
    tagline: "",
    overview:
      "Mendukung penuh GTD XXIX melalui pengelolaan keuangan, acara penggalangan dana, acara penutupan GTD XXIX, dan proses pencarian sponsor.",
    responsibilities: [
      "Merencanakan skala prioritas keuangan untuk keseluruhan kegiatan GTD XXIX.",
      "Bertanggung jawab atas proyeksi pengalokasian dana untuk setiap kegiatan dan acara portfolio GTD XXIX.",
      "Bertanggung jawab dalam mencari <i>sponsorship</i> yang mencakup menyusun proposal <i>sponsorship</i> dan menjadi narahubung sponsor untuk mendukung pendanaan GTD XXIX.",
      "Merancang program penggalangan dana <i>(BFM Project dan EWP)</i> yang melibatkan warga PINTU maupun di luar warga PINTU.",
      "Berkomunikasi dan berkolaborasi dengan pihak eksternal untuk melaksanakan program penggalangan dana <i>(Canvassing)</i> untuk mendukung seluruh acara GTD XXIX.",
      "Membantu perencanaan dan pelaksanaan acara penutupan GTD XXIX <i>(Awards Night)</i>.",
      "Bertanggung jawab atas pengerahan dan pengelolaan sumber daya manusia dalam setiap program penggalangan dan pengelolaan dana GTD XXIX.",
      "Bersama dengan anggota komite lainnya membuat GTD XXIX menjadi menyenangkan dan mempunyai dampak positif pada komunitas PINTU, sehingga dapat meningkatkan kebersamaan di kalangan mahasiswa baru pada khususnya, dan seluruh peserta GTD XXIX pada umumnya."
    ],
    requirements: [
      "Kemampuan perencanaan dan pengaturan keuangan.",
      "Belajar berkoordinasi dan bernegosiasi dengan pihak eksternal dalam pencarian sponsor.",
      "Belajar mengorganisir acara penggalangan dana.",
      "Belajar mengawasi, membimbing, mengatur, dan mengarahkan sumber daya manusia.",
    ],
  },
  {
    id: "polog",
    code: "POLOG",
    name: "Project Operations & Logistics",
    icon: "▣",
    tagline: "",
    overview:
      "Merencanakan dan mengeksekusi POLOG Project dan GTD D-Day sesuai dengan visi misi GTD XXIX.",
    responsibilities: [
      {
        text: "Bertanggung jawab atas program kegiatan Project Operations & Logistics dengan:",
        subpoints: [
          "menyusun rincian acara POLOG Project dan GTD D-Day,",
          "mengarahkan divisi dalam perencanaan dan pelaksanaan acara POLOG Project dan GTD D-Day,",
          "mengatur pendanaan segala kebutuhan Project Operations & Logistics, ",
          "menyiapkan peralatan logistik yang dibutuhkan bersama dengan Sub-Committee, serta",
          "menyelenggarakan <i>trials</i> dan <i>Senior Camp</i> sesuai dengan yang dibutuhkan.",
        ],
      },
      "Bertanggung jawab atas inventarisasi, penyimpanan, dan pemakaian seluruh inventaris Project Operations & Logistics.",
      "Membimbing semua anggota divisi dalam merancang, mematangkan, dan melaksanakan permainan-permainan serta peralatan logistik untuk keperluan acara Project Operations & Logistics.",
      "Mengayomi semua anggota divisi Project Operations & Logistics serta mewujudkan lingkungan kerja yang suportif dan inklusif.",
      "Bersama dengan anggota komite lainnya membuat GTD XXIX menjadi menyenangkan dan mempunyai dampak positif pada komunitas PINTU, sehingga dapat meningkatkan kebersamaan di kalangan mahasiswa baru pada khususnya, dan seluruh peserta GTD XXIX pada umumnya.",
    ],
    requirements: [
      "Kemampuan berpikir kritis dan penyelesaian masalah yang muncul.",
      "Kemampuan merencanakan dan mengorganisir acara.",
      "Kemampuan menyelesaikan masalah penyediaan logistik, termasuk pendataan, pengaturan, dan penyimpanan.",
      "Belajar mengawasi, membimbing, mengatur, dan mengarahkan sumber daya manusia.",
    ],
  },
  {
    id: "welfare",
    code: "WELF",
    name: "Welfare",
    icon: "❤",
    tagline: "",
    overview:
      "Mendukung penuh GTD XXIX melalui peningkatan kesejahteraan peserta dan komite dengan pengadaan konsumsi, <i>First Aid</i>, serta menciptakan lingkungan kelompok orientasi yang nyaman untuk semua anggota kelompok orientasi GTD XXIX melalui aksi kepedulian.",
    responsibilities: [
      "Bertanggung jawab untuk memastikan dan meningkatkan kesejahteraan peserta dan komite melalui pengadaan konsumsi, memperhatikan kesehatan mental, dan gejala kelelahan peserta di setiap kegiatan GTD XXIX.",
      "Bertanggung jawab atas penyediaan <i>First Aid</i> untuk seluruh peserta GTD XXIX.",
      "Mengikuti dan membantu proses pelatihan Sub-Committee Welfare GTD XXIX di <i>First Aid Workshop</i> dan <i>Welfare Workshop</i>.",
      "Menyusun perencanaan pendanaan kegiatan Welfare GTD XXIX.",
      "Mengelola sumber daya manusia (Sub-Committee) Welfare GTD XXIX dalam meningkatkan kesejahteraan peserta dan komite di setiap kegiatan GTD XXIX.",
      "Membantu perencanaan dan pelaksanaan acara <i>Sub-Committee Bonding Day</i> (SCBD).",
      "Merencanakan dan mengeksekusi pelaksanaan acara peningkatan kesejahteraan seluruh komite dan peserta GTD XXIX.",
      "Bertanggung jawab atas inventarisasi, penyimpanan, dan pemakaian seluruh inventaris Welfare.",
      "Bersama dengan anggota komite lainnya membuat GTD XXIX menjadi menyenangkan dan mempunyai dampak positif pada komunitas PINTU, sehingga dapat meningkatkan kebersamaan di kalangan mahasiswa baru pada khususnya, dan seluruh peserta GTD XXIX pada umumnya."
    ],
    requirements: [
      "Belajar mengatur dan berkoordinasi dengan pihak internal dan eksternal dalam penyediaan konsumsi dalam acara.",
      "Menambah pengetahuan <i>First Aid</i>.",
      "Mengembangkan kemampuan pendataan, pengaturan dana, dan inventarisasi.",
      "Meningkatkan rasa kepedulian terhadap sesama manusia melalui pelayanan.",
      "Belajar mengawasi, membimbing, mengatur, dan mengarahkan sumber daya manusia.",
    ],
  },
  {
    id: "ppit",
    code: "PPIT",
    name: "Publicity, Publication, and IT",
    icon: "✦",
    tagline: "",
    overview:
      "Mendukung penuh persiapan dan pelaksanaan GTD XXIX melalui publisitas, publikasi, dan teknologi informasi kepada pihak eksternal dan internal.",
    responsibilities: [
      "Bertanggung jawab dalam merencanakan materi publikasi media sosial GTD XXIX (Instagram, Telegram, Tiktok, dan YouTube).",
      "Berkolaborasi antar portfolio dan menyusun materi publikasi untuk mendukung seluruh kegiatan GTD XXIX.",
      "Bertanggung jawab atas dokumentasi seluruh kegiatan GTD XXIX, baik dalam bentuk foto maupun video.",
      "Bertanggung jawab untuk mengurus dan memperbarui Website GTD sebagai sarana informasi mengenai kegiatan GTD XXIX.",
      "Mempersiapkan perangkat, peralatan, dan software guna kelancaran seluruh kegiatan publisitas, publikasi, dan teknologi informasi GTD XXIX.",
      "Menyusun pendanaan yang berkaitan dengan portfolio PPIT GTD XXIX.",
      "Melatih dan mendelegasikan tanggung jawab GTD XXIX kepada seluruh anggota portfolio PPIT GTD XXIX.",
      "Bersama dengan anggota komite lainnya membuat GTD XXIX menjadi menyenangkan dan mempunyai dampak positif pada komunitas PINTU, sehingga dapat meningkatkan kebersamaan di kalangan mahasiswa baru pada khususnya, dan seluruh peserta GTD XXIX pada umumnya.",
      {
        text: "Catatan:",
        subpoints: [
          "Pengetahuan dasar dan/atau pengalaman dalam desain, fotografi, videografi, atau web development menjadi nilai tambah.",
          "Membawa portfolio yang pernah dikerjakan sebelumnya dalam bentuk cetak (print) maupun digital menjadi nilai tambah: desain, website, foto dan videografi, dll.",
        ],
      },
    ],
    requirements: [
      "Menambah kemampuan teknis dalam bidang desain, fotografi, videografi atau web development.",
      "Kemampuan berpikir kritis dan berkomunikasi.",
      "Belajar mengawasi, membimbing, mengatur, dan mengarahkan sumber daya manusia.",

    ],
  },
  {
    id: "cgl",
    code: "CGL",
    name: "Chief Group Leader",
    icon: "★",
    tagline: "",
    overview:
      "Menjadi pemimpin kelompok orientasi yang peduli dan bertanggung jawab dengan seluruh anggota kelompok orientasi– terutama mahasiswa baru, serta menciptakan lingkungan kelompok orientasi yang nyaman untuk semua anggota kelompok orientasi sesuai dengan visi misi GTD XXIX.",
    responsibilities: [
      "Menentukan pasangan <i>Group Leader</i> (GL).",
      "Memastikan kinerja dan keharmonisan antar pasangan GL.",
      "Bertanggung jawab dalam pembagian kelompok orientasi (mahasiswa baru dan komite).",
      "Merencanakan dan mengatur pelaksanaan acara yang bertujuan untuk melatih dan mempererat ikatan antar sesama GL.",
      "Menyusun pendanaan yang berkaitan dengan properti kelompok orientasi.",
      "Menyusun pendanaan yang berkaitan dengan portfolio GL GTD XXIX.",
      "Menjadi <i>Master of Ceremony</i> (MC) dalam rangka acara <i>Day 1 (Night Games)</i> dan <i>Day 4 (Awards Night)</i>.",
      "Bersama dengan anggota komite lainnya membuat GTD XXIX menjadi menyenangkan dan mempunyai dampak positif pada komunitas PINTU, sehingga dapat meningkatkan kebersamaan di kalangan mahasiswa baru pada khususnya, dan seluruh peserta GTD XXIX pada umumnya."
    ],
    requirements: [
      "Kemampuan menyelesaikan masalah dan konflik.",
      "Kemampuan menilai karakter dan sifat seseorang.",
      "Kemampuan berkomunikasi antar portofolio.",
      "Belajar mengawasi, membimbing, mengatur, dan mengarahkan sumber daya manusia.",
    ],
  },
];
