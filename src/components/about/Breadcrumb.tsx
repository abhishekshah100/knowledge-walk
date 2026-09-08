import Link from "next/link";

interface BreadcrumbProps {
  /** Current page's label — always follows "Home". */
  currentLabel: string;
}

/** Small "Home / <Current Page>" trail shown above a page's hero content. */
export function Breadcrumb({ currentLabel }: BreadcrumbProps) {
  return (
    <nav aria-label="Breadcrumb" className="text-sm">
      <ol className="flex items-center gap-2">
        <li>
          <Link href="/" className="font-semibold text-primary hover:text-primary-dark">
            Home
          </Link>
        </li>
        <li aria-hidden="true" className="text-text-secondary">
          /
        </li>
        <li aria-current="page" className="text-text-secondary">
          {currentLabel}
        </li>
      </ol>
    </nav>
  );
}
