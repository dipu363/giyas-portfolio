import Link from "next/link";
import Navbar from "@/components/Navbar";

const experience = [
  {
    company: "Medical System Co. Ltd.",
    role: "Mid-Level Programmer (Mobile Application)",
    period: "Apr 2021 – Present",
    description:
      "Developing mobile applications using Flutter and working with Firebase, REST APIs, GPS tracking, authentication, and backend services.",
    technologies: [
      "Flutter",
      "Dart",
      "Firebase",
      "REST API",
      "GPS Tracking",
      "Java",
      "Spring Boot",
    ],
  },
  {
    company: "ZAB ERP Solution",
    role: "Assistant Software Developer",
    period: "Jan 2020 – Mar 2021",
    description:
      "Worked on Java-based ERP applications, reports, software development, testing, bug fixing, and process improvements.",
    technologies: [
      "Java",
      "Android",
      "ERP",
      "Crystal Reports",
    ],
  },
];

const education = [
  {
    title: "Diploma in Computer Programming",
    institution: "The Computers Limited",
    period: "2017 – 2018",
  },
  {
    title: "Master's in Accounting",
    institution: "National University",
    period: "2013 – 2014",
  },
  {
    title: "Honors in Accounting",
    institution: "National University",
    period: "2009 – 2013",
  },
];

const certifications = [
  {
    title: "Oracle Certified Associate (OCA) Java SE 8 Programmer",
    year: "2019",
  },
  {
    title: "Mobile Application Development (Android)",
    year: "2019",
  },
  {
    title: "App Development with Flutter",
    year: "2022 – 2023",
  },
];

export default function ResumePage() {
  return (
    <>
      <Navbar />

      <main>
        {/* Header */}
        <section className="border-b border-gray-100 bg-white">
          <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-24">
            <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
              <div className="max-w-3xl">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-600">
                  Resume
                </p>

                <h1 className="mt-4 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
                  My professional journey.
                </h1>

                <p className="mt-6 text-lg leading-8 text-gray-600">
                  A summary of my professional experience, education,
                  certifications, and technical background as a software
                  developer.
                </p>
              </div>

              <a
                href="/resume/Giyas Uddin_MobileApplication_Resume.pdf"
                download
                className="inline-flex w-fit items-center rounded-xl bg-emerald-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-emerald-700"
              >
                Download CV ↓
              </a>
            </div>
          </div>
        </section>

        {/* Summary */}
        <section className="bg-gray-50 py-16">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="grid gap-8 md:grid-cols-3">
              <div className="rounded-2xl bg-white p-7 shadow-sm">
                <p className="text-3xl font-bold text-emerald-600">5+</p>
                <p className="mt-2 font-semibold text-gray-900">
                  Years Experience
                </p>
                <p className="mt-2 text-sm text-gray-600">
                  Professional software development experience.
                </p>
              </div>

              <div className="rounded-2xl bg-white p-7 shadow-sm">
                <p className="text-3xl font-bold text-emerald-600">2</p>
                <p className="mt-2 font-semibold text-gray-900">
                  Core Platforms
                </p>
                <p className="mt-2 text-sm text-gray-600">
                  Flutter cross-platform and native Android development.
                </p>
              </div>

              <div className="rounded-2xl bg-white p-7 shadow-sm">
                <p className="text-3xl font-bold text-emerald-600">30%</p>
                <p className="mt-2 font-semibold text-gray-900">
                  Performance Improvement
                </p>
                <p className="mt-2 text-sm text-gray-600">
                  Backend response-time improvement through optimization.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Experience */}
        <section className="bg-white py-20">
          <div className="mx-auto max-w-5xl px-6 lg:px-8">
            <div>
              <p className="text-sm font-semibold uppercase tracking-widest text-emerald-600">
                Experience
              </p>

              <h2 className="mt-2 text-3xl font-bold text-gray-900">
                Professional experience
              </h2>
            </div>

            <div className="mt-12 space-y-8">
              {experience.map((item) => (
                <article
                  key={item.company}
                  className="rounded-2xl border border-gray-100 bg-white p-7 shadow-sm"
                >
                  <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                    <div>
                      <h3 className="text-xl font-bold text-gray-900">
                        {item.role}
                      </h3>

                      <p className="mt-1 font-medium text-emerald-600">
                        {item.company}
                      </p>
                    </div>

                    <span className="w-fit rounded-full bg-gray-50 px-4 py-2 text-sm font-medium text-gray-500">
                      {item.period}
                    </span>
                  </div>

                  <p className="mt-5 leading-7 text-gray-600">
                    {item.description}
                  </p>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {item.technologies.map((technology) => (
                      <span
                        key={technology}
                        className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-medium text-emerald-700"
                      >
                        {technology}
                      </span>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Education & Certifications */}
        <section className="bg-gray-50 py-20">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="grid gap-12 lg:grid-cols-2">
              {/* Education */}
              <div>
                <p className="text-sm font-semibold uppercase tracking-widest text-emerald-600">
                  Education
                </p>

                <h2 className="mt-2 text-3xl font-bold text-gray-900">
                  Academic background
                </h2>

                <div className="mt-8 space-y-5">
                  {education.map((item) => (
                    <div
                      key={item.title}
                      className="rounded-2xl bg-white p-6 shadow-sm"
                    >
                      <div className="flex gap-4">
                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-emerald-100 font-bold text-emerald-700">
                          E
                        </div>

                        <div>
                          <h3 className="font-bold text-gray-900">
                            {item.title}
                          </h3>

                          <p className="mt-1 text-sm text-gray-600">
                            {item.institution}
                          </p>

                          <p className="mt-2 text-xs font-medium text-emerald-600">
                            {item.period}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Certifications */}
              <div>
                <p className="text-sm font-semibold uppercase tracking-widest text-emerald-600">
                  Certifications
                </p>

                <h2 className="mt-2 text-3xl font-bold text-gray-900">
                  Professional certifications
                </h2>

                <div className="mt-8 space-y-5">
                  {certifications.map((item) => (
                    <div
                      key={item.title}
                      className="rounded-2xl bg-white p-6 shadow-sm"
                    >
                      <div className="flex gap-4">
                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-emerald-100 font-bold text-emerald-700">
                          C
                        </div>

                        <div>
                          <h3 className="font-bold leading-6 text-gray-900">
                            {item.title}
                          </h3>

                          <p className="mt-2 text-xs font-medium text-emerald-600">
                            {item.year}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-gray-900 py-20">
          <div className="mx-auto max-w-4xl px-6 text-center lg:px-8">
            <p className="text-sm font-semibold uppercase tracking-widest text-emerald-400">
              Next Step
            </p>

            <h2 className="mt-3 text-3xl font-bold text-white sm:text-4xl">
              Let's talk about an opportunity.
            </h2>

            <p className="mx-auto mt-4 max-w-2xl leading-7 text-gray-300">
              Interested in my background? Explore my projects or get in touch
              to discuss how I can contribute to your team.
            </p>

            <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
              <Link
                href="/projects"
                className="rounded-xl bg-emerald-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-emerald-700"
              >
                View Projects
              </Link>

              <Link
                href="/contact"
                className="rounded-xl border border-gray-700 px-6 py-3 text-sm font-semibold text-white transition hover:border-emerald-500 hover:text-emerald-400"
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