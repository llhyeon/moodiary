import { ComponentProps } from "react";

interface Props extends ComponentProps<"button"> {
  children: string | React.ReactNode;
  className?: string;
  isDisabled?: boolean;
}

function SignButton({ children, className, isDisabled, ...rest }: Props) {
  return (
    <button
      type="button"
      className={`${
        isDisabled ? "bg-gray-400 text-white disabled" : "bg-tertiary text-secondary"
      }   text-xl py-2 rounded-md active:scale-95 transition-transform duration-200 ${className}`}
      {...rest}>
      {children}
    </button>
  );
}

export default SignButton;
