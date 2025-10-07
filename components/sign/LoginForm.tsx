"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import SignButton from "~/components/sign/SignButton";
import SignInput from "~/components/sign/SignInput";

function LoginForm() {
  const [id, setId] = useState("");
  const [pw, setPw] = useState("");

  const router = useRouter();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch("/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: id,
          password: pw,
        }),
      });

      const loginData = await response.json();

      if (response.status === 200) {
        console.log("로그인 완료 :", loginData);
        router.push("/main");
      } else if (response.status === 400) {
        console.error(loginData.message);
        alert("로그인 정보가 올바르지 않습니다.");
      }
    } catch (error) {
      console.error((error as Error).message);
      return;
    }
  };

  return (
    <form className="flex flex-col gap-2 mt-20 w-[80%] mx-auto" onSubmit={handleLogin}>
      <SignInput
        value={id}
        onChange={(e) => setId(e.target.value)}
        name="id"
        placeholder="아이디를 입력해주세요">
        아이디
      </SignInput>
      <SignInput
        value={pw}
        onChange={(e) => setPw(e.target.value)}
        type="password"
        name="password"
        placeholder="비밀번호를 입력해주세요">
        비밀번호
      </SignInput>
      <p className="text-right text-sm">
        혹시 회원이 아니신가요?{" "}
        <Link className="text-blue-800" href={"/register"}>
          회원가입
        </Link>
      </p>
      <SignButton className="mt-30" type="submit">
        로그인
      </SignButton>
    </form>
  );
}

export default LoginForm;
