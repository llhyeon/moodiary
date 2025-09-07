import SignButton from "~/components/sign/SignButton";
import SignInput from "~/components/sign/SignInput";

function RegisterPage() {
  return (
    <form className="flex flex-col gap-3 mt-20 w-[80%] mx-auto">
      <SignInput
        buttonShow
        text="중복확인"
        type="text"
        name="id"
        placeholder="아이디를 입력해주세요">
        아이디
      </SignInput>
      <SignInput type="password" name="password" placeholder="비밀번호를 입력해주세요">
        비밀번호
      </SignInput>
      <SignInput
        type="password"
        name="passwordConfirm"
        placeholder="비밀번호를 한 번 더 입력해주세요">
        비밀번호 확인
      </SignInput>
      <SignButton className="mt-20" type="submit">
        회원가입
      </SignButton>
    </form>
  );
}

export default RegisterPage;
