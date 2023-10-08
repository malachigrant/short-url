interface ButtonProps {
  text?: string;
  onClick: () => void;
}

export function Button({ text, onClick }: ButtonProps) {
  return <input type="button" value={text} onClick={onClick} />;
}

export default Button;
