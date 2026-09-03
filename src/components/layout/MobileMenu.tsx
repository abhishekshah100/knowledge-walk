"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";
import { JoinMovementButton } from "@/components/enquiry/JoinMovementButton";
import { Icon } from "@/components/ui/Icon";
import { scrollToSectionHref } from "@/lib/smoothScroll";
import type { NavigationContent } from "@/types/site-content.types";

interface MobileMenuProps {
  id: string;
  navigation: NavigationContent;
  pathname: string;
  isOpen: boolean;
  onClose: () => void;
}

function isLinkActive(pathname: string, href: string) {
  return href === "/" ? pathname === "/" : pathname.startsWith(href);
}

const FOCUSABLE_SELECTOR = "a[href], button:not([disabled])";

/**
 * Off-canvas navigation drawer for small screens. Traps focus and closes
 * on Escape while open, restores body scrolling on close, and is fully
 * removed from the tab order (`inert`) while hidden.
 */
export function MobileMenu({ id, navigation, pathname, isOpen, onClose }: MobileMenuProps) {
  const panelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isOpen) return undefined;

    const panel = panelRef.current;
    const focusable = panel?.querySelectorAll<HTMLElement>(FOCUSABLE_SELECTOR);
    focusable?.[0]?.focus();

    const scrollY = window.scrollY;
    const previousBodyStyles = {
      overflow: document.body.style.overflow,
      position: document.body.style.position,
      top: document.body.style.top,
      width: document.body.style.width,
    };

    // Fix the body in place instead of only hiding its overflow. This avoids
    // viewport shifts and preserves the reader's position behind the drawer.
    Object.assign(document.body.style, {
      overflow: "hidden",
      position: "fixed",
      top: `-${scrollY}px`,
      width: "100%",
    });

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        onClose();
        return;
      }

      if (event.key !== "Tab" || !focusable || focusable.length === 0) return;

      const first = focusable[0];
      const last = focusable[focusable.length - 1];

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    }

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      Object.assign(document.body.style, previousBodyStyles);
      window.scrollTo(0, scrollY);
    };
  }, [isOpen, onClose]);

  return (
    <div
      className={`fixed inset-0 z-50 overflow-hidden lg:hidden ${isOpen ? "" : "pointer-events-none"}`}
      inert={!isOpen}
    >
      <div
        onClick={onClose}
        aria-hidden="true"
        className={`absolute inset-0 bg-text-primary/40 transition-opacity duration-400 ease-out motion-reduce:transition-none ${
          isOpen ? "opacity-100" : "opacity-0"
        }`}
      />

      <div
        id={id}
        ref={panelRef}
        role="dialog"
        aria-modal="true"
        aria-label={`${navigation.brandName} navigation`}
        className={`absolute top-0 right-0 flex h-full w-full max-w-xs transform-gpu flex-col gap-8 bg-surface p-6 shadow-xl will-change-transform transition-[transform,opacity] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:transition-none ${
          isOpen ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"
        }`}
      >
        <div className="flex items-center justify-between">
          <span className="text-lg font-bold text-text-primary">{navigation.brandName}</span>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close menu"
            className="flex h-10 w-10 items-center justify-center rounded-full text-text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
          >
            <Icon name="close" className="h-5 w-5" />
          </button>
        </div>

        <nav aria-label="Primary" className="flex flex-col gap-6">
          {navigation.primaryLinks.map((link) => {
            const active = isLinkActive(pathname, link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={(event) => {
                  if (!scrollToSectionHref(link.href)) {
                    onClose();
                    return;
                  }

                  event.preventDefault();
                  onClose();
                  window.setTimeout(() => scrollToSectionHref(link.href), 0);
                }}
                aria-current={active ? "page" : undefined}
                className={`rounded-sm text-base font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary ${
                  active ? "text-primary" : "text-text-primary"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <JoinMovementButton onBeforeOpen={onClose} className="mt-auto w-full" />
      </div>
    </div>
  );
}
