export default function Button({ text, type }) {
  return (
    <div>
      <button type={type ? type : 'button'}>{text}</button>
    </div>
  );
}
