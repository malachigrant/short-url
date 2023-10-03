interface TextboxProps {
  text?: string;
}

export function Textbox({ text }: TextboxProps) {
  return <input type="text" value={text} />;
}

export default Textbox;
