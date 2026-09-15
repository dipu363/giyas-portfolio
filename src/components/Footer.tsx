import Link from "next/link";
import {
  Mail,
  Phone,
  MessageCircle,
  Globe2,
  BriefcaseBusiness,
  ArrowUp
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


const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Skills", href: "/skills" },
  { name: "Projects", href: "/projects" },
  { name: "Contact", href: "/contact" },
];

export default function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-gray-950 text-white">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-3">
          {/* Brand */}
          <div>
            <Link
              href="/"
              className="text-2xl font-bold tracking-tight"
            >
              Giyas<span className="text-green-500">.</span>
            </Link>

            <p className="mt-4 max-w-sm text-sm leading-6 text-gray-400">
              Mobile application developer focused on building reliable,
              modern and user-friendly digital experiences.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
              Quick Links
            </h3>

            <div className="mt-4 flex flex-col gap-3">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="w-fit text-sm text-gray-400 transition-colors hover:text-green-500"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Social */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
              Connect
            </h3>

            <div className="mt-4 flex gap-3">
              {contactItems.map((social) => {
                const Icon = social.icon;

                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-700 text-gray-400 transition-all hover:border-green-500 hover:bg-green-500 hover:text-white"
                  >
                    <Icon size={18} />
                  </a>
                );
              })}
            </div>

            <a
              href="mailto:giyasuddin636@gmail.com"
              className="mt-5 flex w-fit items-center gap-2 text-sm text-gray-400 transition-colors hover:text-green-500"
            >
              <Mail size={16} />
              Email Me
            </a>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-10 flex flex-col gap-4 border-t border-gray-800 pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-gray-500">
            © {new Date().getFullYear()} Giyas Uddin. All rights reserved.
          </p>

          <a
            href="/"
            aria-label="Back to top"
            className="flex h-9 w-9 items-center justify-center rounded-full border border-gray-700 text-gray-400 transition-all hover:border-green-500 hover:text-green-500"
          >
            <ArrowUp size={16} />
          </a>
        </div>
      </div>
    </footer>
  );
}