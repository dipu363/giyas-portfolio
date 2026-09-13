import Link from "next/link";
import Navbar from "@/components/Navbar";

const experiences = [
  {
    period: "Apr 2021 – Present",
    company: "Medical System Co. Ltd.",
    position: "Mid-Level Programmer (Mobile Application)",
    location: "Dhaka, Bangladesh",
    description:
      "Working on mobile applications and backend integrations, with a focus on Flutter, Firebase, REST APIs, and secure application development.",
    achievements: [
      "Developed and deployed Flutter applications with Firebase and REST APIs.",
      "Worked with GPS tracking and secure login functionality.",
      "Published applications on Google Play Store.",
      "Improved backend response time by 30% through optimized processing using Coroutines and Threads.",
      "Configured Swagger and Spring Security for API documentation and access control.",
      "Collaborated with full-stack teams to deliver application features.",
    ],
    technologies: [
      "Flutter",
      "Java",
      "Spring Boot",
      "Firebase",
      "REST API",
      "Android",
    ],
  },
  {
    period: "Jan 2020 – Mar 2021",
    company: "ZAB ERP Solution",
    position: "Assistant Software Developer",
    location: "Dhaka, Bangladesh",
    description:
      "Worked on ERP software development using Java and Crystal Reports while collaborating with QA and UX teams.",
    achievements: [
      "Designed and developed ERP modules using Java.",
      "Created reports using Crystal Reports.",
      "Worked with QA and UX teams to deliver product features.",
      "Analyzed source code and resolved functionality issues.",
      "Supported improvements to software engineering processes.",
    ],
    technologies: [
      "Java",
      "ERP",
      "Crystal Reports",
    ],
  },
];

export default function ExperiencePage() {
  return (
    <>
      <Navbar />

      <main>
        {/* Header */}
        <section className="bg-gray-50">
          <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-emerald-600">
              Career
            </p>

            <h1 className="mt-4 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
              Professional Experience
            </h1>

            <p className="mt-5 max-w-2xl text-lg leading-8 text-gray-600">
              My professional journey across mobile application development,
              backend integration, and enterprise software development.
            </p>
          </div>
        </section>

        {/* Timeline */}
        <section className="bg-white">
          <div className="mx-auto max-w-5xl px-6 py-20 lg:px-8">
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-[7px] top-2 hidden h-[calc(100%-8px)] w-px bg-gray-200 md:block" />

              <div className="space-y-16">
                {experiences.map((experience) => (
                  <article
                    key={`${experience.company}-${experience.period}`}
                    className="relative md:pl-12"
                  >
                    {/* Timeline Dot */}
                    <div className="absolute left-0 top-1 hidden h-4 w-4 rounded-full border-4 border-emerald-500 bg-white md:block" />

                    <p className="text-sm font-semibold text-emerald-600">
                      {experience.period}
                    </p>

                    <h2 className="mt-2 text-2xl font-bold text-gray-900">
                      {experience.position}
                    </h2>

                    <div className="mt-2 flex flex-wrap items-center gap-2 text-sm text-gray-500">
                      <span className="font-medium text-gray-700">
                        {experience.company}
                      </span>

                      <span>•</span>

                      <span>{experience.location}</span>
                    </div>

                    <p className="mt-5 max-w-3xl text-base leading-7 text-gray-600">
                      {experience.description}
                    </p>

                    {/* Achievements */}
                    <div className="mt-7">
                      <h3 className="text-sm font-bold uppercase tracking-wider text-gray-900">
                        Key Contributions
                      </h3>

                      <div className="mt-4 space-y-3">
                        {experience.achievements.map((achievement) => (
                          <div
                            key={achievement}
                            className="flex gap-3"
                          >
                            <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-xs font-bold text-emerald-600">
                              ✓
                            </span>

                            <p className="text-sm leading-6 text-gray-600">
                              {achievement}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Technologies */}
                    <div className="mt-7 flex flex-wrap gap-2">
                      {experience.technologies.map((technology) => (
                        <span
                          key={technology}
                          className="rounded-full bg-gray-50 px-3 py-1.5 text-xs font-medium text-gray-600"
                        >
                          {technology}
                        </span>
                      ))}
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-gray-50">
          <div className="mx-auto max-w-4xl px-6 py-20 text-center">
            <h2 className="text-3xl font-bold text-gray-900">
              Explore my technical skills
            </h2>

            <p className="mt-4 text-gray-600">
              See the technologies and tools I use to build software.
            </p>

            <Link
              href="/skills"
              className="mt-8 inline-flex rounded-lg bg-emerald-600 px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-emerald-700"
            >
              View My Skills →
            </Link>
          </div>
        </section>
      </main>
    </>
  );
}