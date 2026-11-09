import Shell from "@/components/site/Shell";
import Footer from "@/components/site/Footer";
import { pageMeta, REPORT_URL } from "@/lib/site";

export const metadata = pageMeta({
  title: "About us",
  description:
    "DecentraData is a blockchain data intelligence consultancy turning onchain activity into research anyone can verify.",
  path: "/about",
});

const services = [
  {
    n: "01",
    title: "Ecosystem research",
    body: "Original reports on how onchain ecosystems actually behave, written for readers who need the answer first.",
  },
  {
    n: "02",
    title: "Behavioural forensics",
    body: "Bot detection and user classification built from onchain activity patterns, not assumptions.",
  },
  {
    n: "03",
    title: "Consulting",
    body: "Custom data intelligence for teams that need their own questions answered with their own data.",
  },
];

export default function About() {
  return (
    <Shell>
      <section className="pg-hero">
        <div>
          <div className="eyebrow">
            <i /> About us
          </div>
          <h1 className="big">
            Blockchain data,
            <br className="brd" /> made checkable.
          </h1>
        </div>
        <p className="lead">
          DecentraData is a blockchain data intelligence consultancy. We turn onchain activity into
          research that institutions, agents and everyday users can verify for themselves.
        </p>
      </section>
      <div className="rule" />

      <section className="sec">
        <div className="sec-head">
          <h2 className="t">What we do</h2>
          <p className="sec-note">
            Three kinds of work, all built on the same rule: show the method, then show the result.
          </p>
        </div>
        <div className="grid3">
          {services.map((s) => (
            <div className="glass" key={s.n}>
              <span className="n">{s.n}</span>
              <h3>{s.title}</h3>
              <p>{s.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="sec" id="work">
        <div className="sec-head">
          <h2 className="t">Our work</h2>
          <p className="sec-note">The flagship research so far.</p>
        </div>
        <div className="work">
          <div className="glass">
            <div>
              <span className="tag">Report</span>
              <h3>
                Base Ecosystem
                <br className="brd" /> 2025
              </h3>
            </div>
            <div className="meta">
              <div>
                Method<strong>Bot forensics</strong>
              </div>
              <div>
                Classification<strong>High / low-sleep users</strong>
              </div>
            </div>
          </div>
          <div className="glass">
            <p className="big-p">
              A full-ecosystem study of Base built on original methodology: users are split into
              high-sleep and low-sleep groups from their onchain activity, and bot behaviour is
              isolated with forensic analysis.
            </p>
            <div>
              <a className="btn" href={REPORT_URL} target="_blank" rel="noopener">
                Read the report <span aria-hidden="true">↗</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </Shell>
  );
}
