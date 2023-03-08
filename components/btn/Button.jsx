export default function Button({ text, submit, className }) {
  return (
    <div>
      <button type={submit ? 'submit' : 'button'} className={className}>{text}</button>
    </div>
  );
}
