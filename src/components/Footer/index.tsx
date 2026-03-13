import React, { type JSX } from "react";
import "./Footer.css";

interface FooterLink {
  label: string;
  href: string;
  external?: boolean;
  badge?: string;
  icon?: "github" | "linkedin" | "x" | "youtube";
}

interface FooterSection {
  title: string;
  links: FooterLink[];
}

const footerSections: FooterSection[] = [
  {
    title: "Get Started",
    links: [
      { label: "Templates", href: "/templates" },
      { label: "Supported frameworks", href: "/docs/frameworks" },
      { label: "Marketplace", href: "/marketplace" },
      { label: "Domains", href: "/domains" }
    ]
  },
  {
    title: "Build",
    links: [
      { label: "Next.js on Vercel", href: "/frameworks/nextjs" },
      { label: "Turborepo", href: "/solutions/turborepo" },
      { label: "v0", href: "https://v0.app", external: true }
    ]
  },
  {
    title: "Scale",
    links: [
      { label: "Content delivery network", href: "/cdn" },
      { label: "Fluid compute", href: "/fluid" },
      { label: "CI/CD", href: "/products/previews" },
      { label: "Observability", href: "/products/observability" },
      { label: "AI Gateway", href: "/ai-gateway", badge: "New" },
      { label: "Vercel Agent", href: "/agent", badge: "New" }
    ]
  },
  {
    title: "Secure",
    links: [
      { label: "Platform security", href: "/security" },
      { label: "Web Application Firewall", href: "/security/web-application-firewall" },
      { label: "Bot management", href: "/security/bot-management" },
      { label: "BotID", href: "/botid" },
      { label: "Sandbox", href: "/sandbox", badge: "New" }
    ]
  },
  {
    title: "Resources",
    links: [
      { label: "Pricing", href: "/pricing" },
      { label: "Customers", href: "/customers" },
      { label: "Enterprise", href: "/enterprise" },
      { label: "Articles", href: "/i" },
      { label: "Startups", href: "/startups" },
      { label: "Solution partners", href: "/partners/solution-partners" }
    ]
  },
  {
    title: "Learn",
    links: [
      { label: "Docs", href: "/docs" },
      { label: "Blog", href: "/blog" },
      { label: "Changelog", href: "/changelog" },
      { label: "Knowledge Base", href: "/kb" },
      { label: "Academy", href: "/academy" },
      { label: "Community", href: "https://community.vercel.com", external: true }
    ]
  },
  {
    title: "Frameworks",
    links: [
      { label: "Next.js", href: "/frameworks/nextjs" },
      { label: "Nuxt", href: "#" },
      { label: "Svelte", href: "#" },
      { label: "Nitro", href: "#" },
      { label: "Turbo", href: "#" }
    ]
  },
  {
    title: "SDKs",
    links: [
      { label: "AI SDK", href: "#", external: true },
      { label: "Workflow DevKit", href: "#", badge: "New" },
      { label: "Flags SDK", href: "#" },
      { label: "Chat SDK", href: "#" },
      { label: "Streamdown AI", href: "#", badge: "New" }
    ]
  },
  {
    title: "Use Cases",
    links: [
      { label: "Composable commerce", href: "#" },
      { label: "Multi-tenant platforms", href: "#" },
      { label: "Web apps", href: "#" },
      { label: "Marketing sites", href: "#" },
      { label: "Platform engineers", href: "#" },
      { label: "Design engineers", href: "#" }
    ]
  },
  {
    title: "Company",
    links: [
      { label: "About", href: "#" },
      { label: "Careers", href: "#" },
      { label: "Help", href: "#" },
      { label: "Press", href: "#" },
      { label: "Legal", href: "#" },
      { label: "Privacy Policy", href: "#" }
    ]
  },
  {
    title: "Community",
    links: [
      { label: "Open source program", href: "#" },
      { label: "Events", href: "#" },
      { label: "Shipped on Vercel", href: "#" },
      { label: "GitHub", href: "#", icon: "github" },
      { label: "LinkedIn", href: "#", icon: "linkedin" },
      { label: "X", href: "#", icon: "x" },
      { label: "YouTube", href: "#", icon: "youtube" }
    ]
  }
];

const Footer: React.FC = () => {
  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  const renderIcon = (icon?: string) => {
    if (!icon) return null;


    const icons: Record<string, JSX.Element> = {
      github: (
        <svg viewBox="0 0 24 24" className="icon" aria-hidden="true">
          <path
            fill="currentColor"
            d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.44 9.8 8.21 11.38.6.11.82-.26.82-.58
            0-.29-.01-1.04-.02-2.04-3.34.73-4.04-1.61-4.04-1.61-.55-1.38-1.34-1.75-1.34-1.75
            -1.1-.75.08-.73.08-.73 1.21.08 1.85 1.24 1.85 1.24 1.08 1.84 2.83 1.31 3.52 1
            .11-.78.42-1.31.76-1.61-2.67-.3-5.47-1.34-5.47-5.93 0-1.31.47-2.38
            1.24-3.22-.12-.3-.54-1.52.12-3.16 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 0 1 3-.4
            11.5 11.5 0 0 1 3 .4c2.28-1.55 3.29-1.23 3.29-1.23.66 1.64.24 2.86.12 3.16
            .77.84 1.24 1.91 1.24 3.22 0 4.61-2.81 5.63-5.49 5.93.43.37.81 1.1.81 2.22
            0 1.61-.02 2.9-.02 3.29 0 .32.21.7.83.58C20.56 21.8 24 17.3 24 12
            24 5.37 18.63 0 12 0Z"
          />
        </svg>
      ),
      linkedin: (
        <svg viewBox="0 0 24 24" className="icon" aria-hidden="true">
          <path
            fill="currentColor"
            d="M4.98 3.5C4.98 4.88 3.86 6 2.5 6S0 4.88 0 3.5
            1.12 1 2.5 1 4.98 2.12 4.98 3.5ZM.5 8h4V24h-4V8Zm7.5
            0h3.8v2.2h.05c.53-1 1.83-2.2 3.77-2.2C20.2
            8 24 10.1 24 15.1V24h-4v-7.7c0-1.8-.03-4.2-2.6-4.2
            -2.6 0-3 2-3 4V24h-4V8Z"
          />
        </svg>
      ),
      x: (
        <svg viewBox="0 0 24 24" className="icon" aria-hidden="true">
          <path
            fill="currentColor"
            d="M18.244 2H21l-6.54 7.48L22 22h-6.828l-5.35-6.99L3.77
            22H1l7.02-8.02L2 2h6.828l4.84 6.3L18.244 2Zm-2.396
            18h1.882L8.003 4H6.06l9.788 16Z"
          />
        </svg>
      ),
      youtube: (
        <svg viewBox="0 0 24 24" className="icon" aria-hidden="true">
          <path
            fill="currentColor"
            d="M23.5 6.2s-.23-1.64-.94-2.36c-.9-.95-1.9-.96-2.36-1
            -3.3-.24-8.26-.24-8.26-.24h-.01s-4.96 0-8.26.24c-.46.04-1.46.05-2.36
            1C.73 4.56.5 6.2.5 6.2S.25 8.13.25 10.06v1.88c0
            1.93.25 3.86.25 3.86s.23 1.64.94 2.36c.9.95
            2.08.92 2.61 1.02 1.9.18 8.05.24 8.05.24s4.97
            -.01 8.27-.25c.46-.04 1.46-.05 2.36-1 .71-.72.94-2.36.94-2.36s.25
            -1.93.25-3.86v-1.88c0-1.93-.25-3.86-.25-3.86ZM9.75
            14.6V7.4l6.27 3.6-6.27 3.6Z"
          />
        </svg>
      )
    };

    return icons[icon];
  };

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-grid">
          {footerSections.map((section, i) => (
            <div key={i} className="footer-column">
              <h4 className="footer-title">{section.title}</h4>

              <ul className="footer-list">
                {section.links.map((link, j) => (
                  <li key={j} className="footer-item">
                    <a
                      href={link.href}
                      className="footer-link"
                      target={link.external ? "_blank" : "_self"}
                      rel={link.external ? "noopener noreferrer" : undefined}
                    >
                      {renderIcon(link.icon)}
                      <span>{link.label}</span>

                      {link.badge && <span className="badge">{link.badge}</span>}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          <div className="footer-logo" onClick={scrollTop}>
            ▲
          </div>
        </div>

        <div className="status-row">
          <div className="status">
            <span className="dot"></span>
            <span>Dubai region (DXB1) is unavailable and traffic is being re-routed</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;