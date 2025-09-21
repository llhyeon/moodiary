"use client";

import { error } from "console";
import { SetStateAction, use, useState } from "react";
import { emailVaildate, idValidate, pwValidate } from "~/app/utils/validation";
import SignButton from "~/components/sign/SignButton";
import SignInput from "~/components/sign/SignInput";

function ErrorMessage({
  children,
  isShow = false,
}: {
  children: React.ReactNode;
  isShow: boolean;
}) {
  return <p className={`text-red-600 text-sm`}>{isShow ? children : ""}</p>;
}

function RegisterContainer() {
  const [error, setError] = useState<{
    email: string | null;
    pw: string | null;
    pwConfirm: string | null;
  }>({
    email: null,
    pw: null,
    pwConfirm: null,
  });
  const [email, setEmail] = useState("");
  const [pw, setPw] = useState("");
  const [pwConfirm, setPwConfirm] = useState("");

  const handleCheckValid = (
    key: "email" | "pw" | "pwConfirm",
    value: string,
    setter: React.Dispatch<SetStateAction<string>>
  ) => {
    setter(value);
    switch (key) {
      case "email":
        setError((prev) => ({
          ...prev,
          [key]: emailVaildate(value) ? null : "올바른 형식의 이메일을 입력해주세요",
        }));
        return;
      case "pw":
        setError((prev) => ({
          ...prev,
          [key]: pwValidate(value) ? null : "특수문자가 최소 1개 포함된 8~14자로 해주세요",
        }));
        return;
      case "pwConfirm":
        setError((prev) => ({
          ...prev,
          [key]: pw === value ? null : "입력한 비밀번호가 다릅니다",
        }));
    }
  };

  return (
    <form className="flex flex-col mt-20 w-[80%] mx-auto">
      <SignInput
        buttonShow
        text="중복확인"
        type="email"
        name="email"
        placeholder="이메일을 입력해주세요"
        value={email}
        onChange={(e) => handleCheckValid("email", e.target.value, setEmail)}>
        이메일
      </SignInput>
      <ErrorMessage isShow={error.email ? true : false}>{error.email}</ErrorMessage>
      <SignInput
        type="password"
        name="password"
        placeholder="비밀번호를 입력해주세요"
        value={pw}
        onChange={(e) => handleCheckValid("pw", e.target.value, setPw)}>
        비밀번호
      </SignInput>
      <ErrorMessage isShow={error.pw ? true : false}>{error.pw}</ErrorMessage>
      <SignInput
        type="password"
        name="passwordConfirm"
        placeholder="비밀번호를 한 번 더 입력해주세요"
        value={pwConfirm}
        onChange={(e) => handleCheckValid("pwConfirm", e.target.value, setPwConfirm)}>
        비밀번호 확인
      </SignInput>
      <ErrorMessage isShow={error.pwConfirm ? true : false}>{error.pwConfirm}</ErrorMessage>
      <SignButton className="mt-20" type="submit">
        회원가입
      </SignButton>
    </form>
  );
}

export default RegisterContainer;
