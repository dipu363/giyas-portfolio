import Link from "next/link";
import Navbar from "@/components/Navbar";

const highlights = [
  {
    number: "5+",
    title: "Years Experience",
    description: "Professional experience in mobile and software development.",
  },
  {
    number: "4",
    title: "Core Platforms",
    description: "Flutter cross-platform development and native Android.",
  },
  {
    number: "30%",
    title: "Performance Improvement",
    description: "Backend response-time improvement through optimized processing.",
  },
];

const education = [
  {
    period: "2017 – 2018",
    title: "PGD - Computer Programming",
    institution: "The Computers Limited (IsDB IT Scholarship)",
  },
  {
    period: "2013 – 2014",
    title: "Masters in Accounting",
    institution: "National University, Dhaka",
  },
  {
    period: "2009 – 2013",
    title: "Honors in Accounting",
    institution: "National University, Dhaka",
  },
];

const certifications = [
  "Oracle Certified Associate (OCA), Java SE8 Programmer — 2019",
  "Mobile Application Development (Android) — BASIS Institute of Technology & Management, 2019",
  "App Development with Flutter — Ostad Online Platform, 2022–2023",
];

export default function AboutPage() {
  return (
    <>
      <Navbar />

      <main>
        {/* Header */}
        <section className="bg-gray-50">
          <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-emerald-600">
              About Me
            </p>

            <h1 className="mt-4 max-w-3xl text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
              A developer focused on building useful mobile experiences.
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-gray-600">
              I&apos;m Giyas Uddin, a Flutter & Java Developer and Mobile
              Application Specialist with more than 5 years of professional
              experience.
            </p>
          </div>
        </section>

        {/* About */}
        <section className="bg-white">
          <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
            <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-emerald-600">
                  My Story
                </p>

                <h2 className="mt-3 text-3xl font-bold text-gray-900">
                  From software development to mobile applications
                </h2>

                <div className="mt-6 space-y-5 text-base leading-8 text-gray-600">
                  <p>
                    I started my professional software development career
                    working with Java and ERP solutions before moving deeper
                    into mobile application development.
                  </p>

                  <p>
                    Today, my primary focus is building Flutter and Android
                    applications, integrating REST APIs and Firebase, and
                    working with backend technologies when required.
                  </p>

                  <p>
                    I enjoy solving practical technical problems, improving
                    application performance, and collaborating with
                    cross-functional teams to deliver reliable software.
                  </p>
                </div>
              </div>

              {/* Developer Card */}
              {/* Developer Card */}
                <div className="relative mx-auto w-full max-w-md">
                  <div className="rounded-3xl bg-gray-50 p-8">
                    <div className="h-28 w-28 overflow-hidden rounded-3xl bg-emerald-600 shadow-lg">
                      <img
                        src="/images/giyas.jpg"
                        alt="Giyas Uddin"
                        className="h-full w-full object-cover"
                      />
                    </div>

                    <h3 className="mt-8 text-2xl font-bold text-gray-900">
                      Giyas Uddin
                    </h3>

                    <p className="mt-2 font-medium text-emerald-600">
                      Flutter & Java Developer
                    </p>

                    <p className="mt-4 text-sm leading-6 text-gray-600">
                      Mobile Application Specialist focused on Flutter, Android,
                      Java, APIs, Firebase, and scalable software solutions.
                    </p>

                    <div className="mt-6 border-t border-gray-200 pt-6">
                      <p className="text-sm font-semibold text-gray-900">
                        Based in
                      </p>
                      <p className="mt-1 text-sm text-gray-500">
                        Dhaka, Bangladesh
                      </p>
                    </div>
                  </div>
                </div>
            </div>
          </div>
        </section>

        {/* Highlights */}
        <section className="bg-gray-50">
          <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
            <div className="text-center">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-emerald-600">
                Highlights
              </p>

              <h2 className="mt-3 text-3xl font-bold text-gray-900">
                Experience at a glance
              </h2>
            </div>

            <div className="mt-10 grid gap-6 md:grid-cols-3">
              {highlights.map((item) => (
                <div
                  key={item.title}
                  className="rounded-2xl border border-gray-100 bg-white p-7 shadow-sm"
                >
                  <p className="text-4xl font-bold text-emerald-600">
                    {item.number}
                  </p>

                  <h3 className="mt-4 text-lg font-bold text-gray-900">
                    {item.title}
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-gray-600">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Education */}
        <section className="bg-white">
          <div className="mx-auto max-w-5xl px-6 py-20 lg:px-8">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-emerald-600">
              Education
            </p>

            <h2 className="mt-3 text-3xl font-bold text-gray-900">
              Academic Background
            </h2>

            <div className="mt-10 space-y-6">
              {education.map((item) => (
                <div
                  key={item.title}
                  className="grid gap-3 rounded-2xl border border-gray-100 bg-gray-50 p-6 md:grid-cols-[150px_1fr]"
                >
                  <p className="text-sm font-semibold text-emerald-600">
                    {item.period}
                  </p>

                  <div>
                    <h3 className="font-bold text-gray-900">{item.title}</h3>

                    <p className="mt-1 text-sm text-gray-600">
                      {item.institution}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Certifications */}
        <section className="bg-gray-50">
          <div className="mx-auto max-w-5xl px-6 py-20 lg:px-8">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-emerald-600">
              Certifications
            </p>

            <h2 className="mt-3 text-3xl font-bold text-gray-900">
              Professional Certifications
            </h2>

            <div className="mt-8 space-y-4">
              {certifications.map((certification) => (
                <div
                  key={certification}
                  className="flex gap-4 rounded-xl border border-gray-100 bg-white p-5 shadow-sm"
                >
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-sm font-bold text-emerald-600">
                    ✓
                  </span>

                  <p className="text-sm leading-6 text-gray-700">
                    {certification}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-white">
          <div className="mx-auto max-w-4xl px-6 py-20 text-center">
            <h2 className="text-3xl font-bold text-gray-900">
              Want to see what I&apos;ve built?
            </h2>

            <p className="mt-4 text-gray-600">
              Explore my projects and learn more about my development
              experience.
            </p>

            <Link
              href="/projects"
              className="mt-8 inline-flex rounded-lg bg-emerald-600 px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-emerald-700"
            >
              Explore My Projects →
            </Link>
          </div>
        </section>
      </main>
    </>
  );
}