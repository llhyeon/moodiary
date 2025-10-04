"use client";

import axios from "axios";
import { useRouter } from "next/navigation";
import { SetStateAction, useMemo, useState } from "react";
import { emailVaildate, pwValidate } from "~/app/utils/validation";
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
  const [nickname, setNickname] = useState("");
  const [pw, setPw] = useState("");
  const [pwConfirm, setPwConfirm] = useState("");

  const router = useRouter();

  // 중복확인 여부
  const [checkedDuplicate, setCheckedDuplicate] = useState(false);

  // 이메일, 비밀번호, 비밀번호 확인 유효성 검사
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
  // 닉네임 중복확인 이벤트
  const handleCheckDuplicate = async () => {
    try {
      const response = await fetch("/api/duplicate", {
        method: "POST",
        body: JSON.stringify({ nickname }),
      });
      const data = await response.json();

      console.log(data);

      if (response.status === 200) {
        setCheckedDuplicate(true);
        alert(data.message);
      } else {
        alert(`${data.message} - ${response.status}`);
      }
    } catch (error) {
      console.error("중복확인 에러 발생: ", error);
    }
  };

  // 회원가입 제출
  const userData = {
    nickname,
    email,
    password: pw,
  };

  const handleSubmit = async (
    e: React.FormEvent,
    data: { nickname: string; email: string; password: string }
  ) => {
    e.preventDefault();
    try {
      const response = await fetch("/api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();
      const message = result.message;

      if (response.status === 200) {
        router.push("/login");
      } else {
        console.error(`회원가입 에러 발생 : ${message} - ${response.status}`);
      }
    } catch (error) {
      console.error("서버 에러 발생: ", error);
    }
  };

  // 모두 입력하고 에러가 없을 때 버튼 enable
  const isDisabled = useMemo(() => {
    if (
      Object.values(error).filter(Boolean).length === 0 &&
      email.length &&
      pw.length &&
      pwConfirm.length &&
      checkedDuplicate
    ) {
      return false;
    }
    return true;
  }, [email, pw, pwConfirm, error, checkedDuplicate]);

  return (
    <form
      className="flex flex-col mt-20 w-[80%] mx-auto"
      onSubmit={(e) => handleSubmit(e, userData)}>
      <SignInput
        buttonShow
        buttonEvent={handleCheckDuplicate}
        text="중복확인"
        type="text"
        name="nickname"
        placeholder="닉네임을 입력해주세요"
        value={nickname}
        onChange={(e) => setNickname(e.target.value)}>
        닉네임
      </SignInput>
      <SignInput
        type="text"
        name="nickname"
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
      <SignButton className={"mt-20"} type="submit" isDisabled={isDisabled}>
        회원가입
      </SignButton>
    </form>
  );
}

export default RegisterContainer;
