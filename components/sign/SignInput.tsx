"use client";

import { ComponentProps, useId } from "react";
import SignButton from "~/components/sign/SignButton";

interface Props extends ComponentProps<"input"> {
  children: string | React.ReactNode;
  className?: string;
  buttonShow?: boolean;
  text?: string | number;
  buttonEvent?: () => void;
}

function SignInput({ children, className, buttonShow = false, text, buttonEvent, ...rest }: Props) {
  const id = useId();

  return (
    <div className={`flex flex-col flex-1 ${className}`}>
      <label className="text-tertiary text-lg" htmlFor={id}>
        {children}
      </label>
      <div className="flex gap-2">
        <input className="flex-1 bg-white rounded-md py-2 px-3 text-lg" {...rest} id={id} />
        {buttonShow && (
          <SignButton className={`px-2`} type="button" onClick={buttonEvent}>
            {text}
          </SignButton>
        )}
      </div>
    </div>
  );
}

export default SignInput;
