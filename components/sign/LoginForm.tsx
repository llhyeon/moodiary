import Link from "next/link";
import SignButton from "~/components/sign/SignButton";
import SignInput from "~/components/sign/SignInput";

function LoginForm() {
  return (
    <form className="flex flex-col gap-2 mt-20 w-[80%] mx-auto">
      <SignInput name="id" placeholder="아이디를 입력해주세요">
        아이디
      </SignInput>
      <SignInput name="password" placeholder="비밀번호를 입력해주세요">
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
