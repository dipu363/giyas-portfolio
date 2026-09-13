import Link from "next/link";
import Navbar from "@/components/Navbar";
import ContactCTA from "@/components/home/ContactCTA";
import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/data/projects";
export default function Home() {
  return (
    <>
      <Navbar />

      <main>
        {/* ================= HERO ================= */}
        <section className="relative overflow-hidden bg-white">
          <div className="mx-auto grid min-h-[calc(100vh-72px)] max-w-7xl items-center gap-16 px-6 py-20 lg:grid-cols-2 lg:px-8">
            {/* Left Content */}
            <div className="relative z-10">
              {/* Availability */}
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-emerald-100 bg-emerald-50 px-4 py-2">
                <span className="h-2 w-2 rounded-full bg-emerald-500" />
                <span className="text-xs font-semibold text-emerald-700">
                  Available for opportunities
                </span>
              </div>

              {/* Small Heading */}
              <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-emerald-600">
                Flutter & Java Developer
              </p>

              {/* Main Heading */}
              <h1 className="max-w-3xl text-5xl font-bold leading-[1.05] tracking-tight text-gray-900 sm:text-6xl lg:text-7xl">
                Building Mobile
                <span className="block text-emerald-600">
                  Experiences
                </span>
                That Matter.
              </h1>

              {/* Introduction */}
              <p className="mt-7 max-w-xl text-base leading-7 text-gray-600 sm:text-lg">
                I&apos;m Giyas Uddin, a Mobile Application Specialist with
                5+ years of experience building scalable applications using
                Flutter, Android, Java, APIs, Firebase, and modern backend
                technologies.
              </p>

              {/* CTA Buttons */}
              <div className="mt-8 flex flex-wrap gap-4">
                <Link
                  href="/projects"
                  className="rounded-lg bg-emerald-600 px-6 py-3.5 text-sm font-semibold text-white shadow-sm transition duration-300 hover:-translate-y-0.5 hover:bg-emerald-700 hover:shadow-lg"
                >
                  View My Projects →
                </Link>

                <Link
                  href="/contact"
                  className="rounded-lg border border-gray-300 bg-white px-6 py-3.5 text-sm font-semibold text-gray-700 transition duration-300 hover:-translate-y-0.5 hover:border-emerald-600 hover:text-emerald-600"
                >
                  Let&apos;s Talk
                </Link>
              </div>

              {/* Social Links */}
              <div className="mt-8 flex items-center gap-5">
                <span className="text-sm text-gray-400">Connect:</span>

                <a
                  href="https://github.com/dipu363"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-medium text-gray-600 transition hover:text-emerald-600"
                >
                  GitHub
                </a>

                <span className="text-gray-300">/</span>

                <a
                  href="https://linkedin.com/in/giyas-uddin"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-medium text-gray-600 transition hover:text-emerald-600"
                >
                  LinkedIn
                </a>
              </div>

              {/* Stats */}
              <div className="mt-12 flex flex-wrap gap-8 border-t border-gray-100 pt-8 sm:gap-12">
                <div>
                  <p className="text-3xl font-bold text-gray-900">5+</p>
                  <p className="mt-1 text-sm text-gray-500">
                    Years Experience
                  </p>
                </div>

                <div>
                  <p className="text-3xl font-bold text-gray-900">10+</p>
                  <p className="mt-1 text-sm text-gray-500">
                    Projects
                  </p>
                </div>

                <div>
                  <p className="text-3xl font-bold text-gray-900">2</p>
                  <p className="mt-1 text-sm text-gray-500">
                    Core Platforms
                  </p>
                </div>
              </div>
            </div>

            {/* ================= RIGHT VISUAL ================= */}
            <div className="relative flex items-center justify-center lg:justify-end">
              {/* Background Decorative Shape */}
              <div className="absolute h-[360px] w-[360px] rounded-full bg-emerald-50 blur-3xl" />

              <div className="relative h-[440px] w-full max-w-[390px]">
                {/* Top Right Card */}
                <div className="absolute right-0 top-4 z-20 rounded-2xl border border-white bg-white px-5 py-4 shadow-lg">
                  <p className="text-xs text-gray-400">Specialized in</p>
                  <p className="mt-1 text-sm font-bold text-gray-900">
                    Mobile Development
                  </p>
                </div>

                {/* Main Developer Card */}
                <div className="absolute inset-x-5 top-14 bottom-5 rounded-[2rem] bg-gray-50 shadow-sm">
                  {/* Decorative Green Circle */}
                  <div className="absolute -left-5 top-20 h-20 w-20 rounded-full bg-emerald-100" />

                  {/* Main Circle */}
                  <div className="absolute left-1/2 top-1/2 flex h-64 w-64 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-[10px] border-white bg-emerald-600 shadow-2xl">
                    <div className="text-center text-white">
                      <p className="text-7xl font-bold">G</p>

                      <div className="mx-auto mt-3 h-px w-12 bg-white/50" />

                      <p className="mt-3 text-xs font-semibold uppercase tracking-[0.3em]">
                        Developer
                      </p>
                    </div>
                  </div>

                  {/* Bottom Label */}
                  <div className="absolute bottom-6 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full border border-gray-200 bg-white px-5 py-2 text-xs font-medium text-gray-600 shadow-sm">
                    Flutter • Java • Android
                  </div>
                </div>

                {/* Bottom Right Decoration */}
                <div className="absolute bottom-0 right-0 h-20 w-20 rounded-2xl bg-emerald-100" />

                {/* Small Floating Card */}
                <div className="absolute bottom-20 left-0 z-20 rounded-2xl border border-white bg-white px-4 py-3 shadow-lg">
                  <p className="text-xs text-gray-400">Experience</p>
                  <p className="mt-1 text-lg font-bold text-gray-900">
                    5+ Years
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ================= TECHNOLOGIES ================= */}
           
        <section className="border-t border-gray-100 bg-gray-50">
          <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
            <div className="text-center">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-emerald-600">
                Technologies I Work With
              </p>

              <h2 className="mt-3 text-2xl font-bold text-gray-900">
                Tools & Technologies
              </h2>
            </div>

            <div className="mt-8 flex flex-wrap justify-center gap-3">
              {[
                "Flutter",
                "Dart",
                "Java",
                "Android",
                "Spring Boot",
                "Node.js",
                "REST API",
                "Firebase",
                "Git",
                "GitHub",
              ].map((technology) => (
                <span
                  key={technology}
                  className="rounded-full border border-gray-200 bg-white px-5 py-2.5 text-sm font-medium text-gray-700 shadow-sm transition duration-300 hover:-translate-y-0.5 hover:border-emerald-200 hover:text-emerald-600"
                >
                  {technology}
                </span>
              ))}
            </div>
          </div>
        </section>


        {/* ================= FEATURED PROJECTS ================= */}
<section className="bg-white">
  <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
    <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
      <div>
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-emerald-600">
          My Work
        </p>

        <h2 className="mt-3 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Featured Projects
        </h2>

        <p className="mt-4 max-w-2xl text-base leading-7 text-gray-600">
          A selection of applications and software projects I have worked on,
          focusing on practical solutions, performance, and user experience.
        </p>
      </div>

      <Link
        href="/projects"
        className="text-sm font-semibold text-emerald-600 transition hover:text-emerald-700"
      >
        View All Projects →
      </Link>
    </div>

    <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {projects
        .filter((project) => project.featured)
        .map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
    </div>
  </div>
</section>
        {/* ================= Contact ================= */}
        <ContactCTA />
      </main>
    </>
  );
}