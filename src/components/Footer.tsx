import Link from "next/link";
import {
 
  ExternalLink,
  Mail,
  MessageCircle,
} from "lucide-react";

const footerLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Experience", href: "/experience" },
  { label: "Projects", href: "/projects" },
  { label: "Skills", href: "/skills" },
  { label: "Contact", href: "/contact" },
];

const socialLinks = [
  {
    label: "GitHub",
    href: "https://github.com/dipu363",
    icon: ExternalLink,
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com/in/giyas-uddin",
    icon: ExternalLink,
  },
  {
    label: "Facebook",
    href: "https://www.facebook.com/dipuj2ee",
    icon: ExternalLink,
  },
  {
    label: "WhatsApp",
    href: "https://wa.me/8801933926336",
    icon: MessageCircle,
  },
  {
    label: "Email",
    href: "mailto:giyasuddin636@gmail.com",
    icon: Mail,
  },
];

export default function Footer() {
  return (
    <footer className="border-t border-gray-100 bg-white">
      <div className="mx-auto max-w-7xl px-6 py-14 lg:px-8">
        <div className="grid gap-10 md:grid-cols-3">
          {/* Brand */}
          <div>
            <Link
              href="/"
              className="text-2xl font-bold tracking-tight text-gray-900"
            >
              Giyas<span className="text-emerald-600">.</span>
            </Link>

            <p className="mt-4 max-w-sm text-sm leading-6 text-gray-600">
              Flutter & Java Developer focused on building reliable,
              user-friendly mobile applications and practical software
              solutions.
            </p>

            <div className="mt-6 flex items-center gap-3">
              {socialLinks.map((social) => {
                const Icon = social.icon;

                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target={
                      social.href.startsWith("http") ? "_blank" : undefined
                    }
                    rel={
                      social.href.startsWith("http")
                        ? "noopener noreferrer"
                        : undefined
                    }
                    aria-label={social.label}
                    title={social.label}
                    className="flex h-10 w-10 items-center justify-center rounded-lg border border-gray-200 text-gray-600 transition hover:border-emerald-200 hover:bg-emerald-50 hover:text-emerald-600"
                  >
                    <Icon size={18} strokeWidth={1.8} />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-900">
              Navigation
            </h3>

            <nav className="mt-5 grid grid-cols-2 gap-x-6 gap-y-3">
              {footerLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm text-gray-600 transition hover:text-emerald-600"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-900">
              Contact
            </h3>

            <div className="mt-5 space-y-3">
              <a
                href="mailto:giyasuddin636@gmail.com"
                className="block text-sm text-gray-600 transition hover:text-emerald-600"
              >
                giyasuddin636@gmail.com
              </a>

              <a
                href="tel:+8801933926336"
                className="block text-sm text-gray-600 transition hover:text-emerald-600"
              >
                +88 019 3393 2636
              </a>

              <a
                href="https://wa.me/8801933926336"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-sm text-gray-600 transition hover:text-emerald-600"
              >
                WhatsApp
              </a>

              <a
                href="https://www.facebook.com/dipuj2ee"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-sm text-gray-600 transition hover:text-emerald-600"
              >
                Facebook
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 flex flex-col gap-3 border-t border-gray-100 pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} Giyas Uddin. All rights reserved.
          </p>

          <p className="text-sm text-gray-500">
            Built with{" "}
            <span className="font-medium text-emerald-600">
              Next.js & TypeScript
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
}