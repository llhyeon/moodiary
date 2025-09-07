import { ComponentProps } from "react";

interface Props extends ComponentProps<"button"> {
  children: string | React.ReactNode;
  className?: string;
}

function SignButton({ children, className, ...rest }: Props) {
  return (
    <button
      type="button"
      className={`bg-tertiary text-secondary text-xl py-2 rounded-md active:scale-95 transition-transform duration-200 ${className}`}
      {...rest}>
      {children}
    </button>
  );
}

export default SignButton;
