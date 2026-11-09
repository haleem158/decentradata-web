import { MapPin } from "lucide-react";
import Shell from "@/components/site/Shell";
import { pageMeta, REPORT_URL } from "@/lib/site";

export const metadata = pageMeta({
  title: "DecentraData — Blockchain data intelligence",
  description:
    "Blockchain data intelligence for institutions, agents and everyday users. Read the Base Ecosystem 2025 report.",
  path: "/",
  absoluteTitle: true,
});

export default function Home() {
  return (
    <Shell full>
      <section className="hero">
        <aside className="panel" aria-label="Latest research">
          <div className="grab" />
          <div className="loc">
            <MapPin size={16} aria-hidden="true" />
            Latest research, onchain
          </div>
          <a className="card" href={REPORT_URL} target="_blank" rel="noopener">
            <div className="top">
              Base Ecosystem 2025 <span>Report</span>
            </div>
            <div className="lbl">
              <span>Method</span>
              <span>Output</span>
            </div>
            <div className="row">
              <strong>Bot forensics</strong>
              <em className="tagpill" style={{ fontStyle: "normal" }}>Full report</em>
              <strong>Read</strong>
            </div>
          </a>
        </aside>

        <div className="hero-bottom">
          <div>
            <h1 className="big">
              Onchain data that<br className="brd" /> decides things.
            </h1>
            <p className="sub">
              Blockchain data intelligence for institutions, agents and everyday users.
            </p>
          </div>
          <a className="btn" href={REPORT_URL} target="_blank" rel="noopener">
            Read the research <span aria-hidden="true">↗</span>
          </a>
        </div>
        <div className="rule" />
      </section>
    </Shell>
  );
}
