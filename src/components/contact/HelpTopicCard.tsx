import Image from "next/image";
import type { HelpTopic } from "@/types/site-content.types";

interface HelpTopicCardProps {
  topic: HelpTopic;
}

/** One "How Can We Help?" quick-topic tile — icon chip + title + short blurb. */
export function HelpTopicCard({ topic }: HelpTopicCardProps) {
  return (
    <div className="flex h-full items-start gap-4 rounded-2xl border border-border bg-surface p-5 shadow-sm transition-shadow hover:shadow-md">
      <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-accent-purple/10">
        <Image
          src={topic.icon.src}
          alt=""
          width={24}
          height={24}
          sizes="24px"
          className="h-6 w-6 object-contain"
        />
      </span>
      <div>
        <h3 className="text-sm font-bold text-text-primary sm:text-base">{topic.title}</h3>
        <p className="mt-1 text-sm leading-6 text-text-secondary">{topic.description}</p>
      </div>
    </div>
  );
}
