import Link from "next/link";
import { ArrowRight, Mail, Phone } from "lucide-react";

export default function ContactCTA() {
  return (
    <section className="bg-green-700 py-20 text-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          {/* Content */}
          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-green-200">
              Let&apos;s Work Together
            </p>

            <h2 className="max-w-2xl text-4xl font-bold tracking-tight sm:text-5xl">
              Have a project or opportunity in mind?
            </h2>

            <p className="mt-6 max-w-xl text-lg leading-8 text-green-50">
              I&apos;m always interested in building useful mobile applications
              and working on challenging software projects.
            </p>

            <Link
              href="/contact"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 font-semibold text-green-700 transition hover:bg-green-50"
            >
              Get In Touch
              <ArrowRight size={18} />
            </Link>
          </div>

          {/* Contact Information */}
          <div className="grid gap-4 sm:grid-cols-2">
            <a
              href="tel:+8801830011235"
              className="rounded-2xl border border-green-500 bg-green-600/40 p-6 transition hover:bg-green-600"
            >
              <Phone className="mb-4" size={28} />

              <p className="text-sm text-green-100">Phone</p>

              <p className="mt-1 font-semibold">
                +880 1830-011235
              </p>
            </a>

            <a
              href="mailto:giyas.uddin@example.com"
              className="rounded-2xl border border-green-500 bg-green-600/40 p-6 transition hover:bg-green-600"
            >
              <Mail className="mb-4" size={28} />

              <p className="text-sm text-green-100">Email</p>

              <p className="mt-1 break-all font-semibold">
                giyas.uddin@example.com
              </p>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}