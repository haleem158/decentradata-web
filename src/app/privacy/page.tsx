import Shell from "@/components/site/Shell";
import Footer from "@/components/site/Footer";
import { pageMeta, X_HANDLE, X_URL } from "@/lib/site";

export const metadata = pageMeta({
  title: "Privacy policy",
  description:
    "How DecentraData handles visit data and messages. No accounts, no advertising cookies and no sale of personal data.",
  path: "/privacy",
});

const sections: { id: string; title: string; body: React.ReactNode }[] = [
  {
    id: "summary",
    title: "Summary",
    body: "We collect as little as possible. This site counts visits with cookieless analytics, has no accounts or sign-ups, and never sells personal data.",
  },
  {
    id: "collect",
    title: "What we collect",
    body: (
      <>
        <b>Visit data.</b> Which pages are viewed, the referring site, country, browser and device
        type. This is aggregated and not tied to a named person. <b>Messages.</b>{" "}
        If you contact us on X, we see your message and public handle so we can reply. X&apos;s own privacy policy
        applies on that platform.
      </>
    ),
  },
  {
    id: "dont-collect",
    title: "What we don't collect",
    body: "No accounts, no wallet connections, no payment details and no advertising cookies on this site.",
  },
  {
    id: "use",
    title: "How we use it",
    body: "To see which pages are read, to fix errors, and to reply to messages you send us.",
  },
  {
    id: "share",
    title: "Who we share it with",
    body: "Our analytics provider, Vercel, processes visit data on our behalf through Vercel Analytics, which does not use cookies. We do not sell personal data or share it for advertising.",
  },
  {
    id: "keep",
    title: "How long we keep it",
    body: "Visit data is kept for as long as our analytics provider retains it under its standard settings. Messages are kept only as long as needed to reply.",
  },
  {
    id: "rights",
    title: "Your rights",
    body: "You can ask to see, correct or delete the personal data we hold about you. We handle data in line with applicable data protection law, including the Nigeria Data Protection Act 2023.",
  },
  {
    id: "changes",
    title: "Changes",
    body: "If this policy changes, we will update the date at the top of this page.",
  },
  {
    id: "contact",
    title: "Contact",
    body: (
      <>
        Questions or requests: message us on X at{" "}
        <a href={X_URL} target="_blank" rel="noopener">
          {X_HANDLE}
        </a>
        .
      </>
    ),
  },
];

export default function Privacy() {
  return (
    <Shell>
      <section className="legal-hero">
        <div className="eyebrow">
          <i /> Legal
        </div>
        <h1 className="big" style={{ marginTop: 26 }}>Privacy policy</h1>
        <div className="upd">Last updated 9 November 2026</div>
      </section>
      <div className="rule" />

      <div className="legal">
        <nav className="toc" aria-label="Contents">
          {sections.map((s, i) => (
            <a key={s.id} href={`#${s.id}`}>
              {String(i + 1).padStart(2, "0")}&nbsp;&nbsp;{s.title}
            </a>
          ))}
        </nav>
        <div className="doc">
          {sections.map((s, i) => (
            <section key={s.id} id={s.id}>
              <span className="n">{String(i + 1).padStart(2, "0")}</span>
              <h2>{s.title}</h2>
              <p>{s.body}</p>
            </section>
          ))}
        </div>
      </div>

      <Footer />
    </Shell>
  );
}
