import Nav from "./Nav";

export default function Shell({
  children,
  full = false,
}: {
  children: React.ReactNode;
  full?: boolean;
}) {
  return (
    <div className={full ? "page full" : "page"}>
      <div className="bg" aria-hidden="true">
        <div className="glow" />
        <div className="flutes" />
        <div className="vig" />
      </div>
      <div className="wrap">
        <Nav />
        <main id="main" style={{ flex: 1, display: "flex", flexDirection: "column" }}>
          {children}
        </main>
      </div>
    </div>
  );
}
