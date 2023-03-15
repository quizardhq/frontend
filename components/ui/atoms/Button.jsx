export default function Button({ children, submit, className }) {
  return (
    <div>
      <button type={submit ? 'submit' : 'button'} className={className}>
        {children}
      </button>
    </div>
  );
}
