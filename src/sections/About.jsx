import { Code2, Lightbulb, Rocket, Users } from "lucide-react";

const highlights = [
  {
    icon: Code2,
    title: "Code Yang Rapih",
    description:
      "Menulis kode yang mudah dipelihara, dapat diskalakan, dan mampu bertahan dalam jangka waktu lama.",
  },
  {
    icon: Rocket,
    title: "Performa",
    description:
      "Mengoptimalkan kecepatan dan menghadirkan pengalaman pengguna yang sangat cepat.",
  },
  {
    icon: Users,
    title: "Kerja sama (Kolaborasi)",
    description: "Bekerja sama erat dengan tim untuk mewujudkan ide-ide.",
  },
  {
    icon: Lightbulb,
    title: "Inovasi",
    description:
      "Selalu terdepan dengan teknologi terbaru dan praktik terbaik.",
  },
];

export const About = () => {
  return (
    <section id="about" className="py-32 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column */}
          <div className="space-y-8">
            <div className="animate-fade-in">
              <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase">
                TENTANG SAYA
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold leading-tight animate-fade-in animation-delay-100 text-secondary-foreground">
              Membangun masa depan,
              <span className="font-serif italic font-normal text-white">
                {" "}
                satu komponen demi satu komponen.
              </span>
            </h2>

            <div className="space-y-4 text-muted-foreground animate-fade-in animation-delay-200">
              <p>
                Saya seorang insinyur perangkat lunak yang bersemangat dengan
                pengalaman lebih dari 5 tahun dalam menciptakan produk digital
                yang memberikan dampak positif. Perjalanan saya dimulai dari
                rasa ingin tahu tentang cara kerja web, dan telah berkembang
                menjadi keahlian mendalam dalam teknologi fullstack modern.
              </p>
              <p>
                Saya berspesialisasi dalam React, Next.js, Java, JavaScript,
                Spring dan TypeScript, membangun segala hal mulai dari landing
                page yang elegan hingga aplikasi perusahaan yang kompleks.
                Pendekatan saya menggabungkan keunggulan teknis dengan perhatian
                yang tajam terhadap desain, struktur data, dan pengalaman
                pengguna.
              </p>
              <p>
                Ketika saya tidak sedang coding, saya akan melakukan riset data
                dan mempelajari hal baru tentang koding, terkadang juga
                berkontribusi pada proyek open-source, atau berbagi pengetahuan
                dengan komunitas pengembang.
              </p>
            </div>

            <div className="glass rounded-2xl p-6 glow-border animate-fade-in animation-delay-300">
              <p className="text-lg font-medium italic text-foreground">
                "Misi saya adalah menciptakan pengalaman digital yang tidak
                hanya fungsional, tetapi benar-benar menyenangkan — produk yang
                disukai pengguna dan disukai pengembang untuk dipelihara."
              </p>
            </div>
          </div>

          {/* Right Column - Hilights */}
          <div className="grid sm:grid-cols-2 gap-6">
            {highlights.map((item, idx) => (
              <div
                key={idx}
                className="glass p-6 rounded-2xl animate-fade-in"
                style={{ animationDelay: `${(idx + 1) * 100}ms` }}
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 hover:bg-primary/20">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
