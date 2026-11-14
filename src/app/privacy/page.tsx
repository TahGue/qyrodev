import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import { CONTACT_EMAIL, SITE } from "@/content/site";
import { pageMetadata } from "@/content/seo";

export const metadata: Metadata = pageMetadata({
  title: "Privacy",
  description: "How QYRODEV handles personal data on this website: what is collected, why, and your rights.",
  path: "/privacy",
  noindex: true,
});

const UPDATED = "14 November 2026";

export default function PrivacyPage() {
  return (
    <>
      <PageHeader
        crumbs={[{ label: "Home", href: "/" }, { label: "Privacy", href: "/privacy" }]}
        eyebrow="Privacy"
        title="Privacy notice"
        lead="Short version: this site does not run analytics, does not set tracking cookies and does not store your contact form submission."
      />

      <div className="container-x py-12 sm:py-16">
        <div className="max-w-3xl space-y-10 text-sm leading-relaxed text-muted">
          <section aria-labelledby="who-we-are">
            <h2 id="who-we-are" className="text-lg font-semibold tracking-tight text-foreground">
              Who is responsible
            </h2>
            <p className="mt-3">
              {SITE.name} ({SITE.location}) operates this website. For anything in this notice, contact{" "}
              <a href={`mailto:${CONTACT_EMAIL}`} className="text-link">
                {CONTACT_EMAIL}
              </a>
              .
            </p>
          </section>

          <section aria-labelledby="contact-form">
            <h2 id="contact-form" className="text-lg font-semibold tracking-tight text-foreground">
              Project enquiries
            </h2>
            <p className="mt-3">
              The contact form does not send data to a server or store it in a database. It prepares a message in your
              own email application, and nothing is delivered until you press send there. From that point, your name,
              email address and message arrive in our ordinary email inbox and are used only to reply to your enquiry.
            </p>
            <p className="mt-3">
              We keep enquiry emails for as long as needed to handle the conversation and any resulting work, and delete
              them when they are no longer needed. The legal basis is our legitimate interest in responding to a
              business enquiry (GDPR Art. 6(1)(f)).
            </p>
          </section>

          <section aria-labelledby="analytics">
            <h2 id="analytics" className="text-lg font-semibold tracking-tight text-foreground">
              Cookies and analytics
            </h2>
            <p className="mt-3">
              This site sets no tracking or advertising cookies and runs no third-party analytics scripts. Custom fonts
              are served from our own domain rather than a third-party font service.
            </p>
          </section>

          <section aria-labelledby="hosting">
            <h2 id="hosting" className="text-lg font-semibold tracking-tight text-foreground">
              Hosting and server logs
            </h2>
            <p className="mt-3">
              The site is hosted on Vercel. Like every web server, the hosting platform processes standard request data
              — IP address, browser user agent, requested URL and timestamp — to deliver pages, prevent abuse and keep
              the service reliable. This data is not used to build visitor profiles. Vercel acts as our processor under
              its data protection terms.
            </p>
          </section>

          <section aria-labelledby="links">
            <h2 id="links" className="text-lg font-semibold tracking-tight text-foreground">
              Links to other sites
            </h2>
            <p className="mt-3">
              We link to LinkedIn and GitHub. Those services have their own privacy policies, which apply once you leave
              this website.
            </p>
          </section>

          <section aria-labelledby="rights">
            <h2 id="rights" className="text-lg font-semibold tracking-tight text-foreground">
              Your rights
            </h2>
            <p className="mt-3">
              Under the GDPR you can ask for access to, correction or deletion of personal data we hold about you, or
              object to its processing. Email{" "}
              <a href={`mailto:${CONTACT_EMAIL}`} className="text-link">
                {CONTACT_EMAIL}
              </a>{" "}
              and we will respond within one month. If you are not satisfied, you can complain to the Swedish Authority
              for Privacy Protection (IMY).
            </p>
          </section>

          <section aria-labelledby="changes">
            <h2 id="changes" className="text-lg font-semibold tracking-tight text-foreground">
              Changes to this notice
            </h2>
            <p className="mt-3">Last updated {UPDATED}. Material changes will be reflected here.</p>
          </section>
        </div>
      </div>
    </>
  );
}
