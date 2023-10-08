interface TextboxProps {
  text?: string;
  onChange: (text: string) => void;
}

export function Textbox({ text, onChange }: TextboxProps) {
  return (
    <input
      type="text"
      value={text}
      onChange={(event) => onChange(event.target.value)}
    />
  );
}

export default Textbox;
