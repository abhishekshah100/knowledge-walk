"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCallback, useRef, useState } from "react";
import { JoinMovementButton } from "@/components/enquiry/JoinMovementButton";
import { Container } from "@/components/ui/Container";
import { Icon } from "@/components/ui/Icon";
import { scrollToSectionHref } from "@/lib/smoothScroll";
import type { NavigationContent } from "@/types/site-content.types";
import { MobileMenu } from "./MobileMenu";

interface HeaderProps {
  navigation: NavigationContent;
}

const MOBILE_NAV_ID = "mobile-nav-drawer";

function isLinkActive(pathname: string, href: string) {
  return href === "/" ? pathname === "/" : pathname.startsWith(href);
}

/**
 * Sticky, frosted-glass site header. Renders the desktop nav inline and
 * delegates to `MobileMenu` for the small-screen drawer, so both stay in
 * sync on active link state without duplicating that logic.
 */
export function Header({ navigation }: HeaderProps) {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuButtonRef = useRef<HTMLButtonElement>(null);

  const closeMenu = useCallback(() => {
    setIsMenuOpen(false);
    menuButtonRef.current?.focus();
  }, []);

  return (
    <>
      {/*
        MobileMenu is rendered as a sibling, not a child, of <header>.
        <header> has `backdrop-blur`, and a `backdrop-filter` on an
        ancestor creates a new containing block for `position: fixed`
        descendants — nesting the drawer inside it would confine the
        "fixed" overlay to the header's own (short) height instead of
        the full viewport.
      */}
      <header className="sticky top-0 z-50 h-[72px] border-b border-glass-border bg-glass-bg backdrop-blur-md">
        <Container className="flex h-full items-center justify-between gap-4">
          <Link
            href="/"
            className="flex items-center gap-2 rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
          >
            <Image
              src={navigation.logo.src}
              alt={navigation.logo.alt}
              width={navigation.logo.width ?? 48}
              height={navigation.logo.height ?? 48}
              sizes="48px"
              className="h-11 w-auto rounded-lg object-contain sm:h-12"
              priority
            />
            <span className="text-base font-bold tracking-tight text-text-primary sm:text-lg">{navigation.brandName}</span>
          </Link>

          <nav aria-label="Primary" className="hidden items-center gap-6 min-[900px]:flex">
            {navigation.primaryLinks.map((link) => {
              const active = isLinkActive(pathname, link.href);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={(event) => {
                    if (scrollToSectionHref(link.href)) event.preventDefault();
                  }}
                  aria-current={active ? "page" : undefined}
                  className={`relative rounded-sm py-6 text-[15px] font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary ${
                    active ? "text-primary after:absolute after:inset-x-0 after:-bottom-0.5 after:h-0.5 after:rounded-full after:bg-primary" : "text-text-primary hover:text-primary"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          <div className="hidden min-[900px]:block">
            <JoinMovementButton className="min-h-11" />
          </div>

          <button
            ref={menuButtonRef}
            type="button"
            onClick={() => setIsMenuOpen(true)}
            aria-expanded={isMenuOpen}
            aria-controls={MOBILE_NAV_ID}
            aria-label="Menu"
            className="flex h-10 w-10 items-center justify-center rounded-full text-text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary min-[900px]:hidden"
          >
            <Icon name="menu" className="h-6 w-6" />
          </button>
        </Container>
      </header>

      <MobileMenu
        id={MOBILE_NAV_ID}
        navigation={navigation}
        pathname={pathname}
        isOpen={isMenuOpen}
        onClose={closeMenu}
      />
    </>
  );
}
