"use client";

import { createContext, useCallback, useContext, useEffect, useRef, useState } from "react";
import { EnquiryModal } from "./EnquiryModal";

interface EnquiryContextValue {
  openEnquiry: (trigger?: HTMLElement | null) => void;
  closeEnquiry: () => void;
}

const EnquiryContext = createContext<EnquiryContextValue | null>(null);

export function EnquiryProvider({ children }: Readonly<{ children: React.ReactNode }>) {
  const [isOpen, setIsOpen] = useState(false);
  const triggerRef = useRef<HTMLElement | null>(null);
  const wasOpenRef = useRef(false);

  const openEnquiry = useCallback((trigger?: HTMLElement | null) => {
    triggerRef.current = trigger ?? document.activeElement as HTMLElement | null;
    setIsOpen(true);
  }, []);

  const closeEnquiry = useCallback(() => setIsOpen(false), []);

  useEffect(() => {
    if (wasOpenRef.current && !isOpen) triggerRef.current?.focus({ preventScroll: true });
    wasOpenRef.current = isOpen;
  }, [isOpen]);

  return (
    <EnquiryContext.Provider value={{ openEnquiry, closeEnquiry }}>
      {children}
      <EnquiryModal isOpen={isOpen} onClose={closeEnquiry} />
    </EnquiryContext.Provider>
  );
}

export function useEnquiry() {
  const context = useContext(EnquiryContext);

  if (!context) throw new Error("useEnquiry must be used within EnquiryProvider.");
  return context;
}
