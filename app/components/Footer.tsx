import Link from "next/link";
import { SocialPill } from "./SocialPill";
import { GridWrapper } from "./GridWrapper";

interface FooterLink {
  href: string;
  label: string;
  isExternal?: boolean;
}

interface FooterSection {
  title: string;
  links: FooterLink[];
}

const footerSections: FooterSection[] = [
  {
    title: "Connect",
    links: [
      {
        href: "https://github.com/HamnaCh456",
        label: "GitHub",
        isExternal: true,
      },
      {
        href: "https://www.linkedin.com/in/hamna-hameed-7431472a5/",
        label: "LinkedIn",
        isExternal: true,
      },
      {
        href: "mailto:hamnahameed555@gmail.com",
        label: "Email",
        isExternal: true,
      },
    ],
  },
];

export function Footer(): JSX.Element {
  const renderFooterLink = (link: FooterLink): JSX.Element => {
    if (link.isExternal) {
      return (
        <a href={link.href} target="_blank" rel="noopener noreferrer">
          {link.label}
        </a>
      );
    }
    return <Link href={link.href}>{link.label}</Link>;
  };

  return (
    <>
      <div className="relative max-w-7xl border-border/60">
        <GridWrapper>
          <div className="max-w-6xl divide-y divide-border/60 px-4 lg:mx-auto lg:flex lg:divide-x lg:divide-y-0 lg:px-4 xl:px-0">
            <div className="flex w-full py-6 text-sm">
              <div>
                <div className="flex-grow space-y-6">
                  <Link className="inline-block" href="/">
                    <span className="font-display text-2xl leading-none tracking-tight text-ink">
                      Hamna<span className="italic text-ink-muted">.</span>
                    </span>
                  </Link>
                  <p className="w-60 leading-5 text-ink-muted">
                    I&apos;m Hamna - an AI engineer and full-stack developer
                    building intelligent, agentic, end-to-end products. Thanks
                    for stopping by!
                  </p>
                </div>
                <p className="mt-6 text-ink-dim">
                  © {new Date().getFullYear()} Hamna Hameed
                </p>
              </div>
              <div className="flex w-full items-end justify-end pr-16">
                <SocialPill />
              </div>
            </div>
            <div className="flex w-full flex-col items-end py-6 text-xs lg:pl-16">
              <div className="ld:space-x-0 flex w-full justify-between md:justify-start md:space-x-36 lg:justify-between">
                {footerSections.map((section) => (
                  <div key={section.title}>
                    <span className="mb-4 inline-block text-base font-medium text-ink">
                      {section.title}
                    </span>
                    <ul className="space-y-2 text-sm text-ink-muted">
                      {section.links.map((link) => (
                        <li className="hover:text-ink" key={link.href}>
                          {renderFooterLink(link)}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </GridWrapper>
      </div>
      <div className="relative h-8 w-full [background-image:linear-gradient(45deg,theme(colors.border)_12.50%,transparent_12.50%,transparent_50%,theme(colors.border)_50%,theme(colors.border)_62.50%,transparent_62.50%,transparent_100%)] [background-size:5px_5px]"></div>
    </>
  );
}
