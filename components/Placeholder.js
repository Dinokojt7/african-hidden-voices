export default function Placeholder({ label, style }) {
  return (
    <div style={{
      background: "repeating-linear-gradient(45deg, rgba(110,19,22,.05) 0 11px, rgba(110,19,22,.09) 11px 22px), var(--ahv-parchment-2)",
      display: "flex", alignItems: "center", justifyContent: "center",
      ...style
    }}>
      <span style={{ fontFamily: "ui-monospace, Menlo, monospace", fontSize: 11, letterSpacing: ".14em", color: "rgba(42,22,20,.4)", textTransform: "uppercase", textAlign: "center" }}>{label}</span>
    </div>
  );
}
