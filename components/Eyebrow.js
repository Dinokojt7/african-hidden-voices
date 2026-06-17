export default function Eyebrow({ children, color = "var(--ahv-crimson)", centered = false }) {
  return (
    <div style={{
      display: "inline-flex", alignItems: "center", gap: 10,
      fontFamily: "var(--font-hanken)", fontSize: 12.5, fontWeight: 600,
      letterSpacing: ".22em", textTransform: "uppercase", color,
      marginBottom: 18, ...(centered ? { justifyContent: "center" } : {})
    }}>
      {centered && <span style={{ width: 30, height: 1, background: "var(--ahv-gold)" }} />}
      {!centered && <span style={{ width: 30, height: 1, background: color === "var(--ahv-gold)" ? "var(--ahv-gold)" : "none", display: color === "var(--ahv-gold)" ? "block" : "none" }} />}
      {children}
      {centered && <span style={{ width: 30, height: 1, background: "var(--ahv-gold)" }} />}
    </div>
  );
}
