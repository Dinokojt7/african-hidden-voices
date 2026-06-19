"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowRight } from "lucide-react";

const links = [
  { label: "About", href: "/about" },
  { label: "The Imboni", href: "/imboni" },
  { label: "The Archive", href: "/archive" },
  { label: "Areas of Study", href: "/areas-of-study" },
  { label: "Research", href: "/research" },
  { label: "Podcast", href: "/podcast" },
];

export default function Nav() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (!isHome) return;
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, [isHome]);

  const barStyle = isHome && !scrolled
    ? { background: "transparent", borderBottomColor: "transparent", boxShadow: "none" }
    : { background: "rgba(246,239,226,.96)", backdropFilter: "blur(8px)", borderBottomColor: "rgba(201,162,75,.5)", boxShadow: "0 6px 24px -16px rgba(66,12,15,.45)" };

  const fg = "#3A1A18";

  return (
    <>
      <nav style={{ position: "sticky", top: 0, zIndex: 50, display: "flex", alignItems: "center", justifyContent: "space-between", padding: "14px 40px", transition: "background .35s ease, box-shadow .35s ease, border-color .35s ease", borderBottom: "1px solid transparent", ...barStyle }}>
        <Link href="/" style={{ display: "flex", alignItems: "center" }}>
          <Image src="/logo.png" alt="African Hidden Voices" width={320} height={90} style={{ height: 68, width: "auto", display: "block", mixBlendMode: "multiply" }} />
        </Link>

        <div style={{ alignItems: "center", gap: 18, fontFamily: "var(--font-hanken)", fontSize: "13px", fontWeight: 600, letterSpacing: ".04em", color: fg }} className="hidden md:flex">
          {links.map(({ label, href }) => (
            <Link key={href} href={href} style={pathname === href ? { color: "var(--ahv-crimson)", borderBottom: "2px solid var(--ahv-gold)", paddingBottom: 3 } : { opacity: 0.9 }}>
              {label}
            </Link>
          ))}
          <Link href="/contact" style={{ display: "inline-flex", alignItems: "center", gap: 8, border: `1.5px solid ${isHome && !scrolled ? fg : "var(--ahv-crimson)"}`, color: isHome && !scrolled ? fg : "var(--ahv-crimson)", padding: "9px 18px", borderRadius: 999, letterSpacing: ".06em", textTransform: "uppercase", fontSize: 12, fontWeight: 700 }}>
            Collaborate <ArrowRight size={14} strokeWidth={2} />
          </Link>
        </div>

        <button onClick={() => setMenuOpen(!menuOpen)} aria-label="Menu" style={{ background: "transparent", border: `1.5px solid ${fg}`, borderRadius: 8, width: 42, height: 42, alignItems: "center", justifyContent: "center", cursor: "pointer", color: fg }} className="flex md:hidden">
          {menuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {menuOpen && (
        <div style={{ position: "sticky", top: 74, zIndex: 49, background: "var(--ahv-parchment)", borderBottom: "1px solid rgba(201,162,75,.5)", display: "flex", flexDirection: "column", padding: "10px 22px 18px", fontFamily: "var(--font-hanken)", fontSize: 16, fontWeight: 600, color: "var(--ahv-ink)" }}>
          {links.map(({ label, href }) => (
            <Link key={href} href={href} onClick={() => setMenuOpen(false)} style={{ padding: "13px 4px", borderBottom: "1px solid rgba(110,19,22,.1)", color: pathname === href ? "var(--ahv-crimson)" : "inherit" }}>{label}</Link>
          ))}
          <Link href="/contact" onClick={() => setMenuOpen(false)} style={{ marginTop: 12, display: "inline-flex", alignItems: "center", justifyContent: "center", gap: 8, background: "var(--ahv-crimson)", color: "var(--ahv-cream)", padding: 14, borderRadius: 999, textTransform: "uppercase", fontSize: 13, letterSpacing: ".06em" }}>Collaborate</Link>
        </div>
      )}
    </>
  );
}
