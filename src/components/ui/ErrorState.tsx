interface ErrorStateProps {
  message: string;
  onRetry?: () => void;
}

/** Generic inline error panel. The message always comes from the caller
 * (e.g. an API error), so no site copy is hard-coded here. */
export function ErrorState({ message, onRetry }: ErrorStateProps) {
  return (
    <div className="flex flex-col items-center gap-[var(--space-heading-subtitle)] rounded-2xl border border-border bg-surface p-8 text-center">
      <p className="text-sm font-medium text-danger">{message}</p>
      {onRetry ? (
        <button
          type="button"
          onClick={onRetry}
          className="rounded-full bg-primary px-5 py-2 text-sm font-semibold text-text-inverse"
        >
          Try Again
        </button>
      ) : null}
    </div>
  );
}
