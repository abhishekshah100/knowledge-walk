"use client";

import type { MouseEventHandler } from "react";
import { ENQUIRY_CONTENT } from "@/constants/enquiry";
import { Button } from "@/components/ui/Button";
import { useEnquiry } from "./EnquiryProvider";

interface JoinMovementButtonProps {
  className?: string;
  label?: string;
  onBeforeOpen?: () => void;
  variant?: "primary" | "outline";
}

export function JoinMovementButton({ className, label = ENQUIRY_CONTENT.buttons.trigger, onBeforeOpen, variant }: JoinMovementButtonProps) {
  const { openEnquiry } = useEnquiry();

  const handleClick: MouseEventHandler<HTMLButtonElement> = (event) => {
    onBeforeOpen?.();
    openEnquiry(event.currentTarget);
  };

  return (
    <Button type="button" onClick={handleClick} className={className} variant={variant}>
      {label}
    </Button>
  );
}
