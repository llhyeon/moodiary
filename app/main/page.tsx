import MainContainer from "~/app/main/MainContainer";
import { createClient } from "~/app/utils/supabase/server";

async function MainPage() {
  const supabase = await createClient();

  const { data: userData } = await supabase.auth.getUser();

  if (!userData) return <p>로그인이 필요합니다.</p>;

  const { data: userProfile, error } = await supabase
    .from("users")
    .select("nickname")
    .eq("id", userData.user?.id);

  const user = userProfile?.[0].nickname;

  if (error) {
    console.error("유저 정보 조회 중 에러 발생: ", error.message);
    return <p>유저 정보 조회 에러 발생 {error.message}</p>;
  }

  return <MainContainer user={user} />;
}

export default MainPage;
