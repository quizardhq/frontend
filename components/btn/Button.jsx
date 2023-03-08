export default function Button({ text, type, className }) {
  return (
    <div>
      <button type={type} className={className}>{text}</button>
    </div>
  );
}
