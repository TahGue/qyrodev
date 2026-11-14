import type { Metadata } from "next";
import Link from "next/link";
import Button from "@/components/Button";

export const metadata: Metadata = {
  title: "Page not found",
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <div className="container-x flex min-h-[60vh] flex-col justify-center py-20">
      <p className="eyebrow">404</p>
      <h1 className="display mt-3 text-3xl text-foreground sm:text-4xl">This page does not exist</h1>
      <p className="lead mt-4 max-w-xl">
        The link may be outdated. The useful places to go from here are the services, the case studies or the contact
        form.
      </p>
      <div className="mt-8 flex flex-wrap gap-3">
        <Button href="/services">Browse services</Button>
        <Button href="/work" variant="secondary">
          See case studies
        </Button>
      </div>
      <p className="mt-8 text-sm text-muted">
        Or go{" "}
        <Link href="/" className="text-link">
          back to the homepage
        </Link>
        .
      </p>
    </div>
  );
}
