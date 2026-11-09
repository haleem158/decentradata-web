"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { REPORT_URL, X_HANDLE, X_URL } from "@/lib/site";

const links = [
  { href: "/about#work", label: "Research", match: null },
  { href: REPORT_URL, label: "Reports", match: null, external: true },
  { href: "/about", label: "About us", match: "/about" },
];

function Brand() {
  return (
    <Link className="brand" href="/" aria-label="DecentraData home">
      <Image src="/logo.png" alt="" width={141} height={111} priority />
      DecentraData
    </Link>
  );
}

export default function Nav() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header className="nav">
        <Brand />
        <nav className="pill" aria-label="Primary">
          {links.map((l) =>
            l.external ? (
              <a key={l.label} href={l.href} target="_blank" rel="noopener">
                {l.label}
              </a>
            ) : (
              <Link
                key={l.label}
                href={l.href}
                aria-current={l.match && pathname === l.match ? "page" : undefined}
              >
                {l.label}
              </Link>
            ),
          )}
        </nav>
        <div className="actions">
          <a className="circle" href={X_URL} target="_blank" rel="noopener" aria-label={`DecentraData on X (${X_HANDLE})`}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
            </svg>
          </a>
          <button
            className="menu"
            aria-label="Open menu"
            aria-expanded={open}
            aria-controls="drawer"
            onClick={() => setOpen(true)}
          >
            <div>
              <span />
              <span />
            </div>
          </button>
        </div>
      </header>

      {open && (
        <div className="drawer" id="drawer" role="dialog" aria-modal="true" aria-label="Menu">
          <div className="drawer-top">
            <Brand />
            <button className="menu" aria-label="Close menu" onClick={() => setOpen(false)}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" aria-hidden="true">
                <path d="M5 5l14 14M19 5L5 19" />
              </svg>
            </button>
          </div>
          <nav className="drawer-links" aria-label="Menu">
            <Link href="/" onClick={() => setOpen(false)}>Home</Link>
            <Link href="/about#work" onClick={() => setOpen(false)}>Research</Link>
            <a href={REPORT_URL} target="_blank" rel="noopener">Reports</a>
            <Link href="/about" onClick={() => setOpen(false)}>About us</Link>
            <Link href="/privacy" onClick={() => setOpen(false)}>Privacy policy</Link>
          </nav>
          <div className="drawer-foot">© 2026 DecentraData · {X_HANDLE}</div>
        </div>
      )}
    </>
  );
}
