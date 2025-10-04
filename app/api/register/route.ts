import { NextRequest, NextResponse } from "next/server";
import { createClient } from "~/app/utils/supabase/server";

export async function POST(req: NextRequest) {
  const supabase = await createClient();
  try {
    const { nickname, email, password } = await req.json();

    if (!email || !password) {
      return NextResponse.json({ error: "이메일과 비밀번호를 모두 입력해주세요" }, { status: 400 });
    }

    const { data, error } = await supabase.auth.signUp({
      email,
      password,
    });

    if (error) {
      return NextResponse.json({ message: error.message }, { status: 400 });
    }

    const { error: usersError } = await supabase.from("users").insert([
      {
        id: data.user?.id,
        nickname,
      },
    ]);

    if (usersError) return NextResponse.json({ message: usersError.message }, { status: 400 });

    return NextResponse.json({ user: data.user }, { status: 200 });
  } catch (error) {
    console.error("회원가입 중 에러 발생 :", error);
    return NextResponse.json({ error: "서버 에러 발생" }, { status: 500 });
  }
}
