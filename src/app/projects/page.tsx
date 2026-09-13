import Link from "next/link";
import Navbar from "@/components/Navbar";
import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/data/projects";

export default function ProjectsPage() {
  return (
    <>
      <Navbar />

      <main>
        {/* Page Header */}
        <section className="bg-gray-50">
          <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-emerald-600">
              Portfolio
            </p>

            <h1 className="mt-4 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
              My Projects
            </h1>

            <p className="mt-5 max-w-2xl text-base leading-7 text-gray-600 sm:text-lg">
              A collection of mobile applications and software projects I
              have worked on, from personal products to professional
              applications.
            </p>
          </div>
        </section>

        {/* Projects */}
        <section className="bg-white">
          <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {projects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-gray-50">
          <div className="mx-auto max-w-4xl px-6 py-20 text-center">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-emerald-600">
              Have a project in mind?
            </p>

            <h2 className="mt-4 text-3xl font-bold text-gray-900 sm:text-4xl">
              Let&apos;s build something useful together.
            </h2>

            <p className="mx-auto mt-4 max-w-xl text-gray-600">
              I&apos;m always interested in working on meaningful software
              products and challenging technical problems.
            </p>

            <Link
              href="/contact"
              className="mt-8 inline-flex rounded-lg bg-emerald-600 px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-emerald-700"
            >
              Get In Touch →
            </Link>
          </div>
        </section>
      </main>
    </>
  );
}