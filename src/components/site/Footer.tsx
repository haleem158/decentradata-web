import Link from "next/link";
import { X_HANDLE, X_URL } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="foot">
      <span>© 2026 DecentraData</span>
      <span>
        <Link href="/privacy">Privacy policy</Link> &nbsp;·&nbsp;{" "}
        <a href={X_URL} target="_blank" rel="noopener">
          {X_HANDLE}
        </a>
      </span>
    </footer>
  );
}
