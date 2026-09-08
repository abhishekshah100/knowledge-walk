interface PageLoaderProps {
  label?: string;
}

/**
 * Full-width, centered loading indicator shown while a page's own data
 * (e.g. `/api/about`, `/api/contact`) is still in flight — most visible
 * when that request is slow, so navigating never looks like a blank or
 * broken page. `role="status"`/`aria-live` announce it to screen readers.
 */
export function PageLoader({ label = "Loading page…" }: PageLoaderProps) {
  return (
    <div role="status" aria-live="polite" className="flex min-h-[60vh] flex-col items-center justify-center gap-4">
      <span
        aria-hidden="true"
        className="h-10 w-10 animate-spin rounded-full border-4 border-primary/20 border-t-primary"
      />
      <p className="text-sm font-medium text-text-secondary">{label}</p>
    </div>
  );
}
