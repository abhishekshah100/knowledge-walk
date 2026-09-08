import Image from "next/image";
import type { HelpTopic } from "@/types/site-content.types";

interface HelpTopicCardProps {
  topic: HelpTopic;
  onSelect?: () => void;
}

const BASE_CLASSES =
  "flex h-full w-full flex-col items-center gap-4 rounded-2xl border border-border bg-surface p-6 text-center shadow-sm transition-colors sm:flex-row sm:items-start sm:text-left";

/**
 * One "How Can We Help?" quick-topic tile. When `onSelect` is provided
 * (the topic maps to a program option) it renders as a real button that
 * preselects that option in the enquiry form and scrolls to it — with a
 * hover/focus treatment to match; otherwise it's a plain, non-interactive tile.
 */
export function HelpTopicCard({ topic, onSelect }: HelpTopicCardProps) {
  const content = (
    <>
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
        <p className="mt-1 text-sm leading-7 text-text-secondary">{topic.description}</p>
      </div>
    </>
  );

  if (onSelect) {
    return (
      <button
        type="button"
        onClick={onSelect}
        aria-label={`${topic.title} — preselect this in the enquiry form below`}
        className={`${BASE_CLASSES} cursor-pointer hover:border-primary/40 hover:bg-primary/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2`}
      >
        {content}
      </button>
    );
  }

  return <div className={BASE_CLASSES}>{content}</div>;
}
