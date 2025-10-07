import { NextRequest, NextResponse } from "next/server";
import { createClient } from "~/app/utils/supabase/server";

export async function POST(req: NextRequest) {
  const supabase = await createClient();

  try {
    const { email, password } = await req.json();

    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      return NextResponse.json({ message: "로그인 중 에러가 발생하였습니다." }, { status: 400 });
    }

    return NextResponse.json({ message: "로그인 성공" }, { status: 200 });
  } catch (error) {
    console.error("서버 에러 발생: ", error);
    return NextResponse.json({ message: `서버 에러가 발생하였습니다: ${error}` }, { status: 500 });
  }
}
