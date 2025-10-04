import { NextRequest, NextResponse } from "next/server";
import { createClient } from "~/app/utils/supabase/server";

export async function POST(req: NextRequest) {
  const supabase = await createClient();

  try {
    const { nickname } = await req.json();

    if (!nickname) {
      return NextResponse.json(
        {
          message: "닉네임이 필요합니다.",
        },
        { status: 400 }
      );
    }

    const { data, error } = await supabase.from("users").select().eq("nickname", nickname);
    console.log(data);

    if (error) throw error;

    const isDuplicate = data?.length > 0;

    return NextResponse.json(
      {
        message: isDuplicate ? "중복된 닉네임입니다." : "사용가능한 닉네임입니다.",
      },
      { status: isDuplicate ? 400 : 200 }
    );
  } catch (err) {
    console.error("서버 에러 발생: ", err);
    return NextResponse.json(
      {
        message: "서버 에러가 발생했습니다",
      },
      { status: 500 }
    );
  }
}
