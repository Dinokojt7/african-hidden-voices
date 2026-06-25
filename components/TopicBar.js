"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useRef, useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const topics = [
  { label: "AIS & Economics", href: "/areas-of-study" },
  { label: "AIS & Governance", href: "/areas-of-study" },
  { label: "AIS & Philosophy", href: "/areas-of-study" },
  { label: "AIS & Knowledge Systems", href: "/areas-of-study" },
  { label: "AIS & Social Systems", href: "/areas-of-study" },
  { label: "AIS Science Division", href: "/areas-of-study" },
  { label: "Revelation Framework", href: "/about" },
  { label: "PSCB Framework", href: "/about" },
  { label: "News & Blog", href: "/blog" },
  { label: "About & Framework", href: "/about" },
];

export default function TopicBar() {
  const pathname = usePathname();
  const scrollRef = useRef(null);
  const [canLeft, setCanLeft] = useState(false);
  const [canRight, setCanRight] = useState(false);

  function checkScroll() {
    const el = scrollRef.current;
    if (!el) return;
    setCanLeft(el.scrollLeft > 4);
    setCanRight(el.scrollLeft + el.clientWidth < el.scrollWidth - 4);
  }

  useEffect(() => {
    checkScroll();
    const el = scrollRef.current;
    if (!el) return;
    el.addEventListener("scroll", checkScroll, { passive: true });
    window.addEventListener("resize", checkScroll);
    return () => { el.removeEventListener("scroll", checkScroll); window.removeEventListener("resize", checkScroll); };
  }, []);

  function scroll(dir) {
    const el = scrollRef.current;
    if (!el) return;
    el.scrollBy({ left: dir * el.clientWidth, behavior: "smooth" });
  }

  const btnStyle = (visible) => ({
    flexShrink: 0,
    width: 32,
    height: 44,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    background: "var(--ahv-surface)",
    border: "none",
    cursor: visible ? "pointer" : "default",
    color: visible ? "var(--ahv-ink)" : "transparent",
    transition: "color .15s",
    padding: 0,
  });

  return (
    <div style={{
      background: "var(--ahv-surface)",
      borderBottom: "2px solid var(--ahv-border-strong)",
      display: "flex",
      alignItems: "center",
    }}>
      {/* Left button */}
      <button onClick={() => scroll(-1)} style={btnStyle(canLeft)} aria-label="Scroll left" disabled={!canLeft}>
        <ChevronLeft size={16} strokeWidth={2.2} />
      </button>

      {/* Scrollable strip */}
      <div ref={scrollRef} style={{
        flex: 1,
        overflowX: "auto",
        whiteSpace: "nowrap",
        scrollbarWidth: "none",
        msOverflowStyle: "none",
      }}>
        <div style={{ display: "inline-flex", alignItems: "center", height: 44, gap: 0 }}>
          {topics.map(({ label, href }, i) => {
            const active = pathname === href || (href === "/blog" && pathname.startsWith("/blog"));
            return (
              <Link key={label} href={href} style={{
                display: "inline-block",
                fontFamily: "var(--font-hanken)",
                fontSize: 13,
                fontWeight: active ? 700 : 600,
                color: active ? "var(--ahv-gold-deep)" : "var(--ahv-ink)",
                padding: "0 18px",
                height: 44,
                lineHeight: "44px",
                borderRight: i < topics.length - 1 ? "1px solid var(--ahv-border)" : "none",
                borderBottom: active ? "3px solid var(--ahv-gold)" : "3px solid transparent",
                transition: "color .15s, border-color .15s",
              }}>{label}</Link>
            );
          })}
        </div>
      </div>

      {/* Right button */}
      <button onClick={() => scroll(1)} style={btnStyle(canRight)} aria-label="Scroll right" disabled={!canRight}>
        <ChevronRight size={16} strokeWidth={2.2} />
      </button>
    </div>
  );
}
