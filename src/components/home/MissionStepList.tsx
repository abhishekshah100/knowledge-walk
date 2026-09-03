import Image from "next/image";
import type { MissionStep } from "@/types/site-content.types";

interface MissionStepListProps {
  steps: MissionStep[];
}

/** Foundation → Prelims → Mains → Interview stepper, connected by a hairline. */
export function MissionStepList({ steps }: MissionStepListProps) {
  return (
    <ol className="relative grid grid-cols-2 gap-x-4 gap-y-6 sm:grid-cols-4 sm:gap-x-3">
      <span
        aria-hidden="true"
        className="absolute top-5 right-[12.5%] left-[12.5%] hidden h-px border-t-2 border-dashed border-border sm:block"
      />
      {steps.map((step) => (
        <li key={step.step} className="flex flex-col items-center gap-2 text-center">
          <Image
            src={step.icon.src}
            alt={step.icon.alt}
            width={40}
            height={40}
            sizes="40px"
            className="relative z-10 h-10 w-10 rounded-full bg-background"
          />
          <span className="flex h-6 w-6 items-center justify-center rounded-full bg-primary text-xs font-extrabold text-text-inverse shadow-sm">
            {step.step}
          </span>
          <h4 className="text-sm font-bold text-text-primary">{step.title}</h4>
          <p className="text-xs leading-snug text-text-secondary">{step.description}</p>
        </li>
      ))}
    </ol>
  );
}
