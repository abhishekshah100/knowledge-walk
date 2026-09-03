interface LoadingSkeletonProps {
  className?: string;
}

/** A shimmering placeholder block shown while content is loading. */
export function LoadingSkeleton({ className = "h-4 w-full" }: LoadingSkeletonProps) {
  return <div className={`animate-pulse rounded-md bg-border ${className}`.trim()} />;
}
