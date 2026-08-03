export default function SectionLabel({ text }) {
  return (
    <p className="section-label" aria-hidden="true">
      <span>{'// '}</span>{text}<span>{' //'}</span>
    </p>
  );
}
