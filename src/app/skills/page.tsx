import Image from "next/image";
import Link from "next/link";

import Navbar from "@/components/Navbar";
import { coreSkills, skillGroups } from "@/data/skills";

export default function SkillsPage() {
  return (
    <>
      <Navbar />

      <main className="bg-white">
        {/* Hero */}
        <section className="border-b border-gray-100 bg-gray-50">
          <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
            <div className="max-w-3xl">
              <p className="text-sm font-semibold uppercase tracking-widest text-emerald-600">
                Skills & Technologies
              </p>

              <h1 className="mt-4 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
                Technologies I use to build reliable applications.
              </h1>

              <p className="mt-6 max-w-2xl text-lg leading-8 text-gray-600">
                My technical experience covers mobile development, backend
                development, frontend technologies, APIs, and professional
                development tools.
              </p>
            </div>
          </div>
        </section>

        {/* Core Stack */}
        <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <div className="mb-10">
            <p className="text-sm font-semibold uppercase tracking-widest text-emerald-600">
              Core Stack
            </p>

            <h2 className="mt-2 text-3xl font-bold text-gray-900">
              Technologies I work with most
            </h2>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {coreSkills.map((skill) => (
              <div
                key={skill.name}
                className="group rounded-2xl border border-gray-100 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-emerald-100 hover:shadow-lg"
              >
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gray-50">
                  <Image
                    src={skill.icon}
                    alt={`${skill.name} logo`}
                    width={48}
                    height={48}
                    className="h-12 w-12 object-contain transition duration-300 group-hover:scale-110"
                  />
                </div>

                <h3 className="mt-5 text-xl font-bold text-gray-900">
                  {skill.name}
                </h3>

                <p className="mt-2 text-sm leading-6 text-gray-600">
                  {skill.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Technical Skills */}
        <section className="bg-gray-50">
          <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
            <div className="mb-12">
              <p className="text-sm font-semibold uppercase tracking-widest text-emerald-600">
                Technical Skills
              </p>

              <h2 className="mt-2 text-3xl font-bold text-gray-900">
                My development toolkit
              </h2>
            </div>

            <div className="space-y-8">
              {skillGroups.map((group) => (
                <div
                  key={group.title}
                  className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm sm:p-8"
                >
                  <div className="max-w-2xl">
                    <h3 className="text-2xl font-bold text-gray-900">
                      {group.title}
                    </h3>

                    <p className="mt-2 text-sm leading-6 text-gray-600">
                      {group.description}
                    </p>
                  </div>

                  <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
                    {group.skills.map((skill) => (
                      <div
                        key={skill.name}
                        className="group flex flex-col items-center justify-center rounded-xl border border-gray-100 bg-gray-50 p-5 text-center transition duration-300 hover:-translate-y-1 hover:bg-white hover:shadow-md"
                      >
                        <Image
                          src={skill.icon}
                          alt={`${skill.name} logo`}
                          width={48}
                          height={48}
                          className="h-12 w-12 object-contain transition duration-300 group-hover:scale-110"
                        />

                        <span className="mt-3 text-sm font-medium text-gray-700">
                          {skill.name}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Development Approach */}
        <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-2">
            <div>
              <p className="text-sm font-semibold uppercase tracking-widest text-emerald-600">
                Development Approach
              </p>

              <h2 className="mt-3 text-3xl font-bold text-gray-900">
                Focused on maintainable and practical solutions.
              </h2>

              <p className="mt-5 leading-7 text-gray-600">
                I focus on creating applications with clear structure,
                reusable components, reliable API integration, and practical
                user experiences.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {[
                "Clean Architecture",
                "Reusable Components",
                "REST API Integration",
                "State Management",
                "Local Data Storage",
                "Application Testing",
              ].map((item) => (
                <div
                  key={item}
                  className="rounded-xl border border-gray-100 bg-gray-50 p-5"
                >
                  <div className="h-2 w-2 rounded-full bg-emerald-600" />

                  <p className="mt-3 font-semibold text-gray-800">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-emerald-600">
          <div className="mx-auto max-w-7xl px-6 py-16 text-center lg:px-8">
            <h2 className="text-3xl font-bold text-white">
              Interested in working together?
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-emerald-50">
              Let&apos;s discuss your project, application, or development
              opportunity.
            </p>

            <Link
              href="/contact"
              className="mt-8 inline-flex rounded-lg bg-white px-6 py-3 text-sm font-semibold text-emerald-700 transition hover:bg-emerald-50"
            >
              Get In Touch →
            </Link>
          </div>
        </section>
      </main>
    </>
  );
}