"use client";

import { ComponentProps, useId } from "react";
import SignButton from "~/components/sign/SignButton";

interface Props extends ComponentProps<"input"> {
  children: string | React.ReactNode;
  className?: string;
  buttonShow?: boolean;
  text?: string | number;
  isError?: boolean;
}

function SignInput({ children, className, buttonShow = false, text, isError, ...rest }: Props) {
  const id = useId();

  return (
    <div className={`flex flex-col flex-1 ${className}`}>
      <label className="text-tertiary text-lg" htmlFor={id}>
        {children}
      </label>
      <div className="flex gap-2">
        <input className="flex-1 bg-white rounded-md py-2 px-3 text-lg" {...rest} id={id} />
        <SignButton className={`px-2 ${buttonShow ? "block" : "hidden"}`}>{text}</SignButton>
      </div>
      {isError && <p className="text-red-600 text-xs">에러 메세지</p>}
    </div>
  );
}

export default SignInput;
