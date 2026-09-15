import Link from "next/link";
import Navbar from "@/components/Navbar";

import {
  Mail,
  Phone,
  MessageCircle,
  Globe2,
  BriefcaseBusiness,
} from "lucide-react";

const contactItems = [
  {
    label: "Email",
    value: "giyasuddin636@gmail.com",
    href: "mailto:giyasuddin636@gmail.com",
    icon: Mail,
  },
  {
    label: "Phone",
    value: "+88 019 3393 2636",
    href: "tel:+8801933926336",
    icon: Phone,
  },
  {
    label: "WhatsApp",
    value: "01933932636",
    href: "https://wa.me/8801933932636",
    icon: MessageCircle,
  },
  {
    label: "Facebook",
    value: "facebook.com/dipuj2ee",
    href: "https://www.facebook.com/dipuj2ee",
    icon: Globe2,
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/giyas-uddin",
    href: "https://linkedin.com/in/giyas-uddin",
    icon: BriefcaseBusiness,
  },
  {
    label: "GitHub",
    value: "github.com/dipu363",
    href: "https://github.com/dipu363",
    icon: BriefcaseBusiness,
  },
];

export default function ContactPage() {
  return (
    <>
      <Navbar />

      <main>
        {/* Header */}
        <section className="border-b border-gray-100 bg-white">
          <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
            <div className="max-w-3xl">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-600">
                Contact
              </p>

              <h1 className="mt-4 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">
                Let's build something{" "}
                <span className="text-emerald-600">useful together.</span>
              </h1>

              <p className="mt-6 text-lg leading-8 text-gray-600">
                Whether you have a project, a job opportunity, or simply want
                to connect, feel free to reach out.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Content */}
        <section className="bg-gray-50 py-20">
          <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-2 lg:px-8">
            {/* Left */}
            <div>
              <p className="text-sm font-semibold uppercase tracking-widest text-emerald-600">
                Get In Touch
              </p>

              <h2 className="mt-3 text-3xl font-bold text-gray-900">
                I'm always open to new opportunities.
              </h2>

              <p className="mt-5 max-w-xl leading-7 text-gray-600">
                I am interested in software development opportunities where I
                can use my experience in Flutter, Java, Android, APIs, and
                application development to contribute to meaningful products.
              </p>

              <div className="mt-8 space-y-4">
               {contactItems.map((item) => {
  const Icon = item.icon;

  return (
    <a
      key={item.label}
      href={item.href}
      target={item.href.startsWith("http") ? "_blank" : undefined}
      rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
      className="group flex items-center gap-4 rounded-2xl border border-gray-100 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:border-emerald-100 hover:shadow-md"
    >
      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600 transition group-hover:bg-emerald-600 group-hover:text-white">
        <Icon size={22} strokeWidth={1.8} />
      </div>

      <div>
        <p className="text-xs font-semibold uppercase tracking-wider text-gray-400">
          {item.label}
        </p>

        <p className="mt-1 text-sm font-medium text-gray-800">
          {item.value}
        </p>
      </div>
    </a>
  );
})}
              </div>
            </div>

            {/* Right */}
            <div className="rounded-3xl bg-gray-900 p-8 text-white shadow-xl lg:p-10">
              <p className="text-sm font-semibold uppercase tracking-widest text-emerald-400">
                Let's Connect
              </p>

              <h2 className="mt-4 text-3xl font-bold">
                Have an opportunity?
              </h2>

              <p className="mt-5 leading-7 text-gray-300">
                If you are looking for a developer for a mobile application,
                backend integration, or software project, let's start a
                conversation.
              </p>

              <div className="mt-8 space-y-4">
                <a
                  href="mailto:giyasuddin636@gmail.com?subject=Project%20Opportunity"
                  className="block rounded-xl bg-emerald-600 px-6 py-4 text-center text-sm font-semibold text-white transition hover:bg-emerald-700"
                >
                  Send Me an Email
                </a>
      <a
                  href="https://www.facebook.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block rounded-xl border border-gray-700 px-6 py-4 text-center text-sm font-semibold text-white transition hover:border-emerald-500 hover:text-emerald-400"
                >
                   Facbock
                </a>
                      <a
                  href="https://wa.me/8801933932636"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block rounded-xl border border-gray-700 px-6 py-4 text-center text-sm font-semibold text-white transition hover:border-emerald-500 hover:text-emerald-400"
                >
                   Whatsapp
                </a>
                <a
                  href="https://www.linkedin.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block rounded-xl border border-gray-700 px-6 py-4 text-center text-sm font-semibold text-white transition hover:border-emerald-500 hover:text-emerald-400"
                >
                  Connect on LinkedIn
                </a>

                <a
                  href="https://github.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block rounded-xl border border-gray-700 px-6 py-4 text-center text-sm font-semibold text-white transition hover:border-emerald-500 hover:text-emerald-400"
                >
                  View GitHub
                </a>
                
              </div>
            </div>
          </div>
        </section>

        {/* Location */}
        <section className="bg-white py-16">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="rounded-3xl border border-gray-100 bg-gray-50 p-8 sm:p-10">
              <div className="grid gap-8 md:grid-cols-2 md:items-center">
                <div>
                  <p className="text-sm font-semibold uppercase tracking-widest text-emerald-600">
                    Based In
                  </p>

                  <h2 className="mt-3 text-2xl font-bold text-gray-900">
                    Dhaka, Bangladesh
                  </h2>

                  <p className="mt-3 leading-7 text-gray-600">
                    Available for professional software development
                    opportunities and remote collaboration.
                  </p>
                </div>

                <div className="flex h-48 items-center justify-center rounded-2xl bg-emerald-50">
                  <div className="text-center">
                    <div className="text-5xl">⌖</div>
                    <p className="mt-3 font-semibold text-emerald-700">
                      Dhaka, Bangladesh
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="bg-emerald-600 py-16">
          <div className="mx-auto max-w-4xl px-6 text-center lg:px-8">
            <h2 className="text-3xl font-bold text-white sm:text-4xl">
              Ready to start a conversation?
            </h2>

            <p className="mx-auto mt-4 max-w-2xl leading-7 text-emerald-50">
              Explore my work and experience, then get in touch if you think
              we could work well together.
            </p>

            <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
              <Link
                href="/projects"
                className="rounded-xl bg-white px-6 py-3 text-sm font-semibold text-emerald-700 transition hover:bg-gray-100"
              >
                Explore Projects
              </Link>

              <Link
                href="/resume"
                className="rounded-xl border border-emerald-300 px-6 py-3 text-sm font-semibold text-white transition hover:bg-emerald-700"
              >
                View Resume
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}