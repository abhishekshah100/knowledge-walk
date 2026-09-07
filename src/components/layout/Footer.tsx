import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Icon, type IconName } from "@/components/ui/Icon";
import type { LinkItem, NavigationContent } from "@/types/site-content.types";

interface FooterProps {
  navigation: NavigationContent;
}

function contactIcon(link: LinkItem, index: number): IconName {
  if (link.href.startsWith("mailto:")) return "mail";
  if (link.href.startsWith("tel:")) return "phone";
  return index === 2 ? "map-pin" : "clock";
}

/** Independent site footer fed entirely from navigation.footer API content. */
export function Footer({ navigation }: FooterProps) {
  const { footer } = navigation;

  return (
    <footer className="border-t-2 border-primary/35 bg-surface-muted" aria-label="Site footer">
      <Container className="py-12 sm:py-16">
        <div className="grid gap-9 grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 lg:items-start lg:gap-6">
          <div className="lg:col-span-2 lg:pr-10">
            <Link href="/" className="inline-flex items-center gap-3 rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary">
              <Image
                src={navigation.logo.src}
                alt={navigation.logo.alt}
                width={navigation.logo.width ?? 40}
                height={navigation.logo.height ?? 40}
                sizes="40px"
                className="rounded-lg"
              />
              <span className="text-lg font-bold text-text-primary">{navigation.brandName}</span>
            </Link>
            <p className="mt-4 max-w-sm text-sm leading-6 text-text-secondary">{footer.tagline}</p>
            <div className="mt-6 flex flex-wrap gap-3" aria-label="Social links">
              {footer.socialLinks.map((social) => (
                <Link
                  key={social.platform}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.platform}
                  title={social.platform}
                  className="group flex h-10 w-10 items-center justify-center rounded-xl border border-border/80 bg-surface p-2.5 shadow-sm transition-[border-color,box-shadow,transform] duration-200 hover:-translate-y-1 hover:border-primary/50 hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
                >
                  <Image
                    src={social.image.src}
                    alt="Social"
                    width={social.image.width ?? 24}
                    height={social.image.height ?? 24}
                    className="h-6 w-6 object-contain transition-transform duration-200 group-hover:scale-110"
                  />
                </Link>
              ))}
            </div>
          </div>

          {footer.linkGroups
            .filter((g) => g.title !== "Resources")
            .map((group) => {
              const isContactGroup = group.title === "Contact";

              return (
                <div key={group.title} className="flex flex-col border-t border-border/80 pt-5 sm:border-t-0 sm:pt-0 lg:border-l lg:border-border lg:px-7 lg:pt-1 last:lg:pr-0">
                  <h2 className="text-sm font-bold text-text-primary">{group.title}</h2>
                  <div className="mt-2 h-0.5 w-8 bg-primary" aria-hidden="true" />
                  <ul className="mt-4 space-y-2.5">
                    {group.links.map((link) => (
                      <li key={link.label}>
                        <Link href={link.href} className={`group inline-flex text-sm leading-5 text-text-secondary transition-colors hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary ${isContactGroup ? "items-start gap-2" : "relative items-center"}`}>
                          {isContactGroup ? (
                            <Icon name={contactIcon(link, group.links.indexOf(link))} className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                          ) : (
                            <Icon name="chevron-right" className="absolute -left-4 h-3.5 w-3.5 text-primary opacity-0 transition-opacity group-hover:opacity-100" />
                          )}
                          <span>{link.label}</span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
        </div>

        <div className="mt-10 flex flex-col gap-3 border-t border-border pt-5 text-sm text-text-secondary sm:flex-row sm:items-center sm:justify-between">
          <p>{footer.copyright}</p>
          <div className="flex flex-wrap gap-x-4 gap-y-2">
            {footer.legalLinks.map((link) => (
              <Link key={link.label} href={link.href} className="transition-colors hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary">
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </Container>
    </footer>
  );
}
