import Link from "next/link";
import Image from "next/image";

function InstagramIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" />
    </svg>
  );
}

function LinkedinIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

function BehanceIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M22 7h-7V5h7v2zm1.726 10c-.442 1.297-2.029 3-5.101 3-3.074 0-5.564-1.729-5.564-5.675 0-3.91 2.325-5.92 5.466-5.92 3.082 0 4.964 1.782 5.375 4.426.078.506.109 1.188.095 2.14H15.97c.13 3.211 3.483 3.312 4.588 2.029H23.726zm-7.203-3h4.458c-.073-1.96-1.461-2.518-2.287-2.518-.928 0-2.018.524-2.171 2.518zM9.773 7.975c-.785-.782-2.063-1.175-3.656-1.175H2v12.4h4.219c1.646 0 2.976-.423 3.837-1.225.86-.801 1.285-1.945 1.285-3.4 0-1.479-.51-2.666-1.568-3.6zm-2.5 6.225c-.368.38-.97.575-1.793.575H4.5v-6.4h1.001c.82 0 1.42.186 1.784.556.365.37.547.984.547 1.844v2c0 .849-.19 1.44-.559 1.825z" />
    </svg>
  );
}

const navLinks = [
  { href: "/",         label: "Home"    },
  { href: "/projects", label: "Work"    },
  { href: "/about",    label: "Studio"  },
  { href: "/contact",  label: "Contact" },
];

const socialLinks = [
  { href: "https://instagram.com/spatialfoundry", label: "Instagram", Icon: InstagramIcon },
  { href: "https://behance.net/spatialfoundry",   label: "Behance",   Icon: BehanceIcon   },
  { href: "https://linkedin.com",                 label: "LinkedIn",  Icon: LinkedinIcon  },
];

export function Footer() {
  return (
    <footer className="bg-bg">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">

        {/* Row 1: Logo · Nav links · Social — inset divider above */}
        <div className="flex flex-col gap-8 border-t border-line py-12 md:flex-row md:items-center md:justify-between">
          {/* Logo */}
          <Link href="/" aria-label="Spatial Foundry — Home" className="shrink-0">
            <Image
              src="/logo/logo-wordmark-combination/combination-white.png"
              alt="Spatial Foundry"
              width={130}
              height={26}
              className="h-6 w-auto object-contain opacity-70 transition-opacity duration-200 hover:opacity-100"
            />
          </Link>

          {/* Nav links */}
          <nav className="flex items-center gap-7 md:gap-9">
            {navLinks.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className="font-body text-xs font-medium uppercase tracking-[0.18em] text-fg/65 transition-colors duration-200 hover:text-fg"
              >
                {label}
              </Link>
            ))}
          </nav>

          {/* Social icons */}
          <div className="flex items-center gap-5">
            {socialLinks.map(({ href, label, Icon }) => (
              <a
                key={href}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="text-fg/60 transition-colors duration-200 hover:text-fg"
              >
                <Icon size={16} />
              </a>
            ))}
          </div>
        </div>

        {/* Row 2: Location · Copyright — inset divider above */}
        <div className="flex flex-col gap-2 border-t border-line py-6 md:flex-row md:items-center md:justify-between">
          <p className="font-body text-xs font-medium uppercase tracking-[0.18em] text-fg/55">
            Lagos, Nigeria
          </p>
          <p className="font-body text-xs font-medium uppercase tracking-[0.18em] text-fg/55">
            © {new Date().getFullYear()} Spatial Foundry. All rights reserved.
          </p>
        </div>

      </div>
    </footer>
  );
}
