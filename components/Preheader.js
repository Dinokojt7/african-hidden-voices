import Link from "next/link";
import Image from "next/image";

const SOCIAL = [
  { label: "YouTube", icon: "/youtube.png", href: "https://www.youtube.com/@africanhiddenvoicesunmaski830" },
  { label: "Facebook", icon: "/facebook.png", href: "#" },
];

export default function Preheader() {
  const date = new Date().toLocaleDateString("en-GB", {
    weekday: "long", year: "numeric", month: "long", day: "numeric",
  });

  return (
    <div style={{ background: "var(--ahv-red)", borderBottom: "3px solid var(--ahv-gold)" }}>
      {/* Row 1 — tagline + utility nav */}
      <div style={{
        display: "flex", alignItems: "center", justifyContent: "space-between",
        padding: "0 20px", height: 44, borderBottom: "1px solid rgba(255,255,255,.08)",
        gap: 8,
      }}>
        {/* Tagline — hidden on small screens */}
        <span style={{
          fontFamily: "var(--font-spectral)", fontStyle: "italic",
          fontSize: 13, color: "rgba(255,255,255,.9)", letterSpacing: ".01em",
          overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap", minWidth: 0,
        }}
          className="hidden sm:block"
        >
          Numbers, Facts &amp; Truths Shaping the African Spiritual World
        </span>

        {/* Utility links */}
        <div style={{ display: "flex", alignItems: "center", gap: 0, marginLeft: "auto", flexShrink: 0 }}>
          {[
            { label: "Newsletters", href: "/newsletters" },
            { label: "Press", href: "/press" },
            { label: "My Account", href: "/account" },
          ].map(({ label, href }, i) => (
            <Link key={label} href={href} style={{
              fontFamily: "var(--font-hanken)", fontSize: 12, fontWeight: 600,
              color: "rgba(255,255,255,.75)", padding: "0 12px",
              borderRight: "1px solid rgba(255,255,255,.12)",
              height: 44, lineHeight: "44px", display: "inline-block",
              letterSpacing: ".02em", whiteSpace: "nowrap",
            }}
              className={i < 2 ? "hidden md:inline-block" : ""}
            >{label}</Link>
          ))}
          <Link href="/donate" style={{
            display: "inline-flex", alignItems: "center",
            fontFamily: "var(--font-hanken)", fontSize: 12, fontWeight: 700,
            background: "var(--ahv-gold)", color: "var(--ahv-dark)",
            padding: "0 16px", height: 44, lineHeight: "44px",
            letterSpacing: ".04em", textTransform: "uppercase", whiteSpace: "nowrap",
          }}>Donate</Link>
        </div>
      </div>

      {/* Row 2 — date + social icons */}
      <div style={{
        display: "flex", alignItems: "center", justifyContent: "space-between",
        padding: "0 20px", height: 36,
      }}>
        <span style={{ fontFamily: "var(--font-hanken)", fontSize: 11.5, color: "rgba(255,255,255,.5)", letterSpacing: ".04em", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}
          className="hidden sm:block"
        >
          {date}
        </span>
        <div style={{ display: "flex", alignItems: "center", gap: 16, marginLeft: "auto" }}>
          {SOCIAL.map(({ label, icon, href }) => (
            <a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label}
              style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", lineHeight: 1, paddingTop: 2 }}>
              <Image src={icon} alt={label} width={20} height={20}
                style={{ width: 20, height: 20, objectFit: "contain", display: "block", opacity: 0.85 }} />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
