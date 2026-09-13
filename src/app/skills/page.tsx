import Link from "next/link";
import Navbar from "@/components/Navbar";
import { coreSkills, skillGroups } from "@/data/skills";

export default function SkillsPage() {
  return (
    <>
      <Navbar />

      <main>
        {/* Hero */}
        <section className="border-b border-gray-100 bg-white">
          <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
            <div className="max-w-3xl">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-600">
                Skills & Technologies
              </p>

              <h1 className="mt-4 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">
                Tools I use to build{" "}
                <span className="text-emerald-600">real-world applications.</span>
              </h1>

              <p className="mt-6 max-w-2xl text-lg leading-8 text-gray-600">
                My development experience covers mobile, backend, frontend,
                APIs, and the tools required to build reliable software
                products.
              </p>
            </div>
          </div>
        </section>

        {/* Core Skills */}
        <section className="bg-gray-50 py-20">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mb-10">
              <p className="text-sm font-semibold uppercase tracking-widest text-emerald-600">
                Core Stack
              </p>

              <h2 className="mt-2 text-3xl font-bold text-gray-900">
                My primary technologies
              </h2>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {coreSkills.map((skill) => (
                <div
                  key={skill.name}
                  className="group rounded-2xl border border-gray-100 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg"
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-100 text-lg font-bold text-emerald-700 transition group-hover:bg-emerald-600 group-hover:text-white">
                    {skill.shortName}
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
          </div>
        </section>

        {/* Skill Groups */}
        <section className="bg-white py-20">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <p className="text-sm font-semibold uppercase tracking-widest text-emerald-600">
                Technical Skills
              </p>

              <h2 className="mt-2 text-3xl font-bold text-gray-900">
                A broader development toolkit
              </h2>

              <p className="mt-4 text-gray-600">
                Technologies and tools I have worked with throughout my
                professional development experience.
              </p>
            </div>

            <div className="mt-14 grid gap-8 md:grid-cols-2">
              {skillGroups.map((group) => (
                <div
                  key={group.title}
                  className="rounded-2xl border border-gray-100 bg-white p-7 shadow-sm"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-emerald-50 text-lg font-bold text-emerald-600">
                      {group.title.charAt(0)}
                    </div>

                    <div>
                      <h3 className="text-xl font-bold text-gray-900">
                        {group.title}
                      </h3>

                      <p className="mt-2 text-sm leading-6 text-gray-600">
                        {group.description}
                      </p>
                    </div>
                  </div>

                  <div className="mt-6 flex flex-wrap gap-2">
                    {group.skills.map((skill) => (
                      <span
                        key={skill}
                        className="rounded-full border border-gray-200 bg-gray-50 px-4 py-2 text-sm font-medium text-gray-700 transition hover:border-emerald-200 hover:bg-emerald-50 hover:text-emerald-700"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Development Approach */}
        <section className="bg-gray-50 py-20">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
              <div>
                <p className="text-sm font-semibold uppercase tracking-widest text-emerald-600">
                  Development Approach
                </p>

                <h2 className="mt-3 text-3xl font-bold text-gray-900 sm:text-4xl">
                  More than just writing code.
                </h2>

                <p className="mt-5 leading-7 text-gray-600">
                  I focus on understanding the problem first, then building
                  practical solutions that are maintainable, scalable, and
                  useful for the people who use them.
                </p>

                <div className="mt-8 space-y-5">
                  {[
                    {
                      title: "Problem Solving",
                      text: "Breaking complex requirements into manageable development tasks.",
                    },
                    {
                      title: "API & System Integration",
                      text: "Connecting mobile and frontend applications with reliable backend services.",
                    },
                    {
                      title: "Performance",
                      text: "Paying attention to application responsiveness and efficient data handling.",
                    },
                    {
                      title: "Collaboration",
                      text: "Working with developers, QA, designers, and other stakeholders to deliver features.",
                    },
                  ].map((item, index) => (
                    <div key={item.title} className="flex gap-4">
                      <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-emerald-600 text-sm font-bold text-white">
                        {index + 1}
                      </div>

                      <div>
                        <h3 className="font-semibold text-gray-900">
                          {item.title}
                        </h3>

                        <p className="mt-1 text-sm leading-6 text-gray-600">
                          {item.text}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-3xl bg-gray-900 p-8 text-white shadow-xl lg:p-10">
                <p className="text-sm font-semibold uppercase tracking-widest text-emerald-400">
                  Technology Focus
                </p>

                <h3 className="mt-4 text-3xl font-bold">
                  Mobile-first development
                </h3>

                <p className="mt-5 leading-7 text-gray-300">
                  My strongest focus is mobile application development,
                  particularly Flutter and Android, supported by backend and
                  API development experience.
                </p>

                <div className="mt-8 grid grid-cols-2 gap-4">
                  {[
                    "Flutter",
                    "Dart",
                    "Java",
                    "Android",
                    "Spring Boot",
                    "REST API",
                    "Firebase",
                    "Git",
                  ].map((skill) => (
                    <div
                      key={skill}
                      className="rounded-xl border border-gray-700 bg-gray-800 px-4 py-3 text-sm font-medium"
                    >
                      {skill}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-white py-20">
          <div className="mx-auto max-w-4xl px-6 text-center lg:px-8">
            <p className="text-sm font-semibold uppercase tracking-widest text-emerald-600">
              Let's Build Something
            </p>

            <h2 className="mt-3 text-3xl font-bold text-gray-900 sm:text-4xl">
              Interested in working together?
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-gray-600">
              Take a look at my projects or get in touch to discuss an
              opportunity.
            </p>

            <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
              <Link
                href="/projects"
                className="rounded-xl bg-emerald-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-emerald-700"
              >
                View My Projects
              </Link>

              <Link
                href="/contact"
                className="rounded-xl border border-gray-200 px-6 py-3 text-sm font-semibold text-gray-700 transition hover:border-emerald-200 hover:bg-emerald-50 hover:text-emerald-700"
              >
                Let's Talk
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}