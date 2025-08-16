interface Props {
  children: string | React.ReactNode;
  className?: string;
}

function Button({ children, className }: Props) {
  return (
    <button
      className={`bg-primary rounded-full text-white active:scale-95 transition-transform duration-200 text-2xl ${className}`}>
      {children}
    </button>
  );
}

export default Button;
