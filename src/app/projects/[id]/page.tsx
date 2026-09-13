import Link from "next/link";
import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import { projects } from "@/data/projects";

type ProjectPageProps = {
  params: Promise<{
    id: string;
  }>;
};

export default async function ProjectDetailsPage({
  params,
}: ProjectPageProps) {
  const { id } = await params;

  const project = projects.find((item) => item.id === id);

  if (!project) {
    notFound();
  }

  return (
    <>
      <Navbar />

      <main>
        {/* Hero */}
        <section className="bg-gray-50">
          <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
            <Link
              href="/projects"
              className="text-sm font-medium text-emerald-600 hover:text-emerald-700"
            >
              ← Back to Projects
            </Link>

            <div className="mt-10 grid gap-12 lg:grid-cols-2 lg:items-center">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-emerald-600">
                  {project.category}
                </p>

                <h1 className="mt-4 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
                  {project.title}
                </h1>

                <p className="mt-6 max-w-2xl text-lg leading-8 text-gray-600">
                  {project.description}
                </p>

                <div className="mt-8">
                  <p className="text-sm font-semibold text-gray-900">
                    My Role
                  </p>

                  <p className="mt-2 text-sm text-gray-600">
                    {project.role}
                  </p>
                </div>
              </div>

              {/* Project Visual */}
              <div className="flex justify-center lg:justify-end">
                <div className="relative flex h-80 w-full max-w-md items-center justify-center overflow-hidden rounded-3xl bg-white shadow-sm">
                  <div className="absolute -right-16 -top-16 h-48 w-48 rounded-full bg-emerald-100" />

                  <div className="absolute -bottom-16 -left-16 h-48 w-48 rounded-full bg-emerald-50" />

                  <div className="relative flex h-36 w-36 items-center justify-center rounded-[2rem] bg-emerald-600 text-6xl font-bold text-white shadow-xl">
                    {project.title.charAt(0)}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Overview */}
        <section className="bg-white">
          <div className="mx-auto max-w-5xl px-6 py-20 lg:px-8">
            <div className="grid gap-12 lg:grid-cols-[1.5fr_1fr]">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-emerald-600">
                  Overview
                </p>

                <h2 className="mt-3 text-3xl font-bold text-gray-900">
                  About the Project
                </h2>

                <p className="mt-5 text-base leading-8 text-gray-600">
                  {project.overview}
                </p>
              </div>

              {/* Technologies */}
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-emerald-600">
                  Technologies
                </p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {project.technologies.map((technology) => (
                    <span
                      key={technology}
                      className="rounded-full border border-gray-200 bg-gray-50 px-4 py-2 text-sm font-medium text-gray-700"
                    >
                      {technology}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="bg-gray-50">
          <div className="mx-auto max-w-5xl px-6 py-20 lg:px-8">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-emerald-600">
              Features
            </p>

            <h2 className="mt-3 text-3xl font-bold text-gray-900">
              Key Features
            </h2>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {project.features.map((feature) => (
                <div
                  key={feature}
                  className="rounded-xl border border-gray-100 bg-white p-5 shadow-sm"
                >
                  <div className="flex items-start gap-3">
                    <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-xs font-bold text-emerald-600">
                      ✓
                    </span>

                    <p className="text-sm font-medium text-gray-700">
                      {feature}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Challenges & Solutions */}
        <section className="bg-white">
          <div className="mx-auto max-w-5xl px-6 py-20 lg:px-8">
            <div className="grid gap-12 md:grid-cols-2">
              {/* Challenges */}
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-emerald-600">
                  Challenges
                </p>

                <h2 className="mt-3 text-2xl font-bold text-gray-900">
                  Technical Challenges
                </h2>

                <div className="mt-6 space-y-4">
                  {project.challenges.map((challenge) => (
                    <div
                      key={challenge}
                      className="border-l-2 border-gray-200 pl-4"
                    >
                      <p className="text-sm leading-6 text-gray-600">
                        {challenge}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Solutions */}
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-emerald-600">
                  Solutions
                </p>

                <h2 className="mt-3 text-2xl font-bold text-gray-900">
                  My Approach
                </h2>

                <div className="mt-6 space-y-4">
                  {project.solutions.map((solution) => (
                    <div
                      key={solution}
                      className="border-l-2 border-emerald-500 pl-4"
                    >
                      <p className="text-sm leading-6 text-gray-600">
                        {solution}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Bottom CTA */}
        <section className="bg-gray-50">
          <div className="mx-auto max-w-4xl px-6 py-20 text-center">
            <h2 className="text-3xl font-bold text-gray-900">
              Interested in my work?
            </h2>

            <p className="mt-4 text-gray-600">
              Explore more projects or get in touch to discuss a project.
            </p>

            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link
                href="/projects"
                className="rounded-lg border border-gray-300 bg-white px-6 py-3 text-sm font-semibold text-gray-700 transition hover:border-emerald-600 hover:text-emerald-600"
              >
                View More Projects
              </Link>

              <Link
                href="/contact"
                className="rounded-lg bg-emerald-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-emerald-700"
              >
                Contact Me
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}