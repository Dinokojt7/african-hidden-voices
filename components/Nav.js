"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowRight } from "lucide-react";

const links = [
  { label: "Research", href: "/research" },
  { label: "Topics", href: "/topics" },
  { label: "IImboni Database", href: "/archive" },
  { label: "Publications", href: "/publications" },
  { label: "About AHV", href: "/about" },
  { label: "Media", href: "/podcast" },
];

export default function Nav() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <nav style={{
        position: "sticky", top: 0, zIndex: 50,
        background: "rgba(255,255,255,.97)", backdropFilter: "blur(10px)",
        borderBottom: "1px solid var(--ahv-border)",
        display: "flex", alignItems: "center", justifyContent: "space-between",
        padding: "16px 40px", height: "auto",
      }}>
        <Link href="/" style={{ display: "inline-flex", alignItems: "center" }}>
          <Image src="/logo.png" alt="African Hidden Voices" width={320} height={90}
            style={{ height: 72, width: "auto", display: "block", mixBlendMode: "multiply" }} />
        </Link>

        <div style={{ alignItems: "center", gap: 26, fontFamily: "var(--font-hanken)", fontSize: 13, fontWeight: 500, color: "var(--ahv-ink)" }} className="hidden md:flex">
          {links.map(({ label, href }) => {
            const active = pathname === href;
            return (
              <Link key={href} href={href} style={{
                color: active ? "var(--ahv-gold-deep)" : "var(--ahv-ink)",
                borderBottom: active ? "2px solid var(--ahv-gold)" : "2px solid transparent",
                paddingBottom: 4,
                transition: "color .2s, border-color .2s",
              }}>
                {label}
              </Link>
            );
          })}
          <Link href="/contact" style={{
            display: "inline-flex", alignItems: "center", gap: 7,
            background: "var(--ahv-gold)", color: "var(--ahv-dark)",
            fontFamily: "var(--font-hanken)", fontWeight: 700, fontSize: 12.5,
            letterSpacing: ".06em", textTransform: "uppercase",
            padding: "9px 20px", borderRadius: 4,
          }}>
            Collaborate <ArrowRight size={13} strokeWidth={2.2} />
          </Link>
        </div>

        <button onClick={() => setMenuOpen(!menuOpen)} aria-label="Menu" style={{
          background: "transparent", border: "1.5px solid var(--ahv-border)",
          borderRadius: 6, width: 40, height: 40,
          alignItems: "center", justifyContent: "center",
          cursor: "pointer", color: "var(--ahv-ink)",
        }} className="flex md:hidden">
          {menuOpen ? <X size={18} /> : <Menu size={18} />}
        </button>
      </nav>

      {menuOpen && (
        <div style={{
          position: "sticky", top: 68, zIndex: 49,
          background: "#fff", borderBottom: "1px solid var(--ahv-border)",
          display: "flex", flexDirection: "column",
          padding: "8px 24px 20px",
          fontFamily: "var(--font-hanken)", fontSize: 15, fontWeight: 500, color: "var(--ahv-ink)",
        }}>
          {links.map(({ label, href }) => (
            <Link key={href} href={href} onClick={() => setMenuOpen(false)} style={{
              padding: "14px 4px",
              borderBottom: "1px solid var(--ahv-border)",
              color: pathname === href ? "var(--ahv-gold-deep)" : "inherit",
            }}>{label}</Link>
          ))}
          <Link href="/contact" onClick={() => setMenuOpen(false)} style={{
            marginTop: 14, display: "inline-flex", alignItems: "center",
            justifyContent: "center", gap: 8,
            background: "var(--ahv-gold)", color: "var(--ahv-dark)",
            padding: "13px 20px", borderRadius: 4,
            fontWeight: 700, fontSize: 13, letterSpacing: ".06em", textTransform: "uppercase",
          }}>Collaborate</Link>
        </div>
      )}
    </>
  );
}
