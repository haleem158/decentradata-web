import Link from "next/link";
import Shell from "@/components/site/Shell";

export default function NotFound() {
  return (
    <Shell full>
      <section className="hero">
        <div className="ghost404" aria-hidden="true">404</div>
        <div className="eyebrow" style={{ marginTop: 80 }}>
          <i /> Error 404
        </div>
        <div className="hero-bottom">
          <div>
            <h1 className="big">
              This page isn&apos;t<br className="brd" /> on the chain.
            </h1>
            <p className="sub">
              The page you&apos;re looking for has moved, or never existed. Head back and pick up
              from the start.
            </p>
          </div>
          <Link className="btn" href="/">
            Back to home <span aria-hidden="true">↗</span>
          </Link>
        </div>
        <div className="rule" />
      </section>
    </Shell>
  );
}
