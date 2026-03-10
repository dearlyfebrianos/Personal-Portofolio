import { ArrowUpRight, ExternalLink } from "lucide-react";
import { AnimatedBorderButton } from "@/components/AnimatedBorderButton";

const projects = [
  {
    title: "BISINDO - Bahasa Isyarat Detector",
    description:
      "Sebuah platform yang saya bangun untuk mendeteksi bahasa isyarat yang akan dikompresi menjadi sebuah huruf yang dapat menjadi sebuah kalimat, sehingga orang lain dapat memahami apa yang dibicarakan oleh Tuna-Wicara.",
    tags: ["React", "JavaScript", "Python"],
    link: "https://sibi-language-detector.vercel.app/",
    useIframe: true,
  },
  {
    title: "Auto Generator App",
    description:
      "Sebuah platform yang saya bangun untuk membantu masyarakat membuat Membuat Surat, mengkalkulasi usaha, membuat CV, dan bisa membantu masyarakat meringkas sebuah materi yang mereka inginkan.",
    tags: ["React", "JavaScript"],
    link: "https://auto-generator-app.vercel.app/",
    useIframe: true,
  },
  {
    title: "Kasir Minimarket",
    description:
      "Sebuah aplikasi desktop yang saya bangun untuk membantu para karyawan kasir menghitung, serta mendata hasil penjualan, transaksi, dan pembuatan struk dengan kode yang kompleks supaya tidak ada kesalahan dalam melakukan pendataan.",
    image: "/projects/kasir-minimarket.png",
    tags: ["ElectronJS", "TypeScript", "Java", "JavaScript"],
  },
  {
    title: "PortoInstant - Portofolio Professional dalam Menit",
    description:
      "PortoInstant - Platform pembuat portofolio profesional instan yang memungkinkan pengguna membuat CV dan portofolio digital yang menarik dalam hitungan menit tanpa perlu coding.",
    tags: ["ReactJS", "JavaScript", "TailwindCSS"],
    link: "https://porto-instant-portofolio-profession.vercel.app/",
    useIframe: true,
  },
  {
    title: "CodeLabX - Pembelajaran Coding & Online Coding",
    description:
      "CodeLabX - Platform website yang dapat membantu pengguna untuk mempelajari coding serta dapat membantu pengguna langsung tes bagaimana codingnya bekerja sebelum sang pengguna membuat websitenya langsung.",
    tags: ["NextJS", "Firebase", "Typescript", "TailwindCSS"],
    link: "https://code-lab-x.vercel.app/",
    useIframe: true,
  },
];

export const Projects = () => {
  return (
    <section id="projects" className="py-20 px-4 relative">
      {/* Bg glows */}
      <div className="absolute top-20 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-20 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl -z-10" />

      {/* Section Header */}
      <div className="max-w-4xl mx-auto text-center mb-16 space-y-4">
        <h2 className="text-3xl md:text-4xl font-bold">
          Karya Unggulan{" "}
          <span className="text-primary">Proyek-proyek</span>
        </h2>
        <p className="text-muted-foreground">
          yang memiliki dampak positif terhadap masyarakat.
          <br />
          Berikut adalah beberapa karya terbaru saya, mulai dari aplikasi web
          yang kompleks hingga alat inovatif yang memecahkan masalah di dunia
          nyata.
        </p>
      </div>

      {/* Projects Grid */}
      <div className="grid md:grid-cols-2 gap-8">
        {projects.map((project, idx) => (
          <div
            key={idx}
            className="group glass rounded-2xl overflow-hidden animate-fade-in md:row-span-1 flex flex-col"
            style={{ animationDelay: `${(idx + 1) * 100}ms` }}
          >
            {/* Preview - Iframe or Image */}
            <div className="relative bg-card">
              {project.useIframe && project.link ? (
                <>
                  {/* Scrollable Iframe Container */}
                  <div className="relative h-[500px] overflow-y-auto overflow-x-hidden custom-scrollbar">
                    <iframe
                      src={project.link}
                      title={project.title}
                      className="w-full border-0"
                      style={{ height: "1200px" }}
                      sandbox="allow-same-origin allow-scripts allow-popups allow-forms"
                      loading="lazy"
                    />
                  </div>
                  
                  {/* Gradient overlay at bottom */}
                  <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-card to-transparent pointer-events-none" />
                </>
              ) : (
                <>
                  {/* Static Image for Desktop Apps */}
                  <div className="relative overflow-hidden aspect-video">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent opacity-60" />
                  </div>
                </>
              )}

              {/* Live Badge */}
              {project.useIframe && project.link && (
                <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-green-500/20 text-green-400 text-xs font-medium border border-green-500/30 flex items-center gap-1 z-10">
                  <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                  <span className="hidden sm:inline">Live</span>
                </div>
              )}

              {/* Open in New Tab Button */}
              {project.link && (
                <div className="absolute top-4 left-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all text-xs flex items-center gap-1"
                  >
                    <ExternalLink className="w-3 h-3" />
                    <span className="hidden sm:inline">Buka</span>
                  </a>
                </div>
              )}
            </div>

            {/* Content */}
            <div className="p-6 space-y-4 flex-grow">
              <div className="flex items-start justify-between">
                <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <ArrowUpRight
                  className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 group-hover:-translate-y-1 transition-all"
                />
              </div>
              <p className="text-muted-foreground text-sm">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag, tagIdx) => (
                  <span
                    key={tagIdx}
                    className="px-4 py-1.5 rounded-full bg-surface text-xs font-medium border border-border/50 text-muted-foreground hover:border-primary/50 hover:text-primary transition-all duration-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* View All CTA */}
      <div className="text-center mt-12 animate-fade-in animation-delay-500">
        <AnimatedBorderButton>
          View All Projects
          <ArrowUpRight className="w-5 h-5" />
        </AnimatedBorderButton>
      </div>
    </section>
  );
};