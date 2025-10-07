"use client";

import { useUserStore } from "~/store/useUserStore";

function Profile() {
  const user = useUserStore((state) => state.user);

  if (!user) return <h1>로그인을 진행해주세요</h1>;

  return (
    <h1 className="text-2xl text-main text-center mt-10 animate-fadeUp">
      오늘의 나를 기록해보세요
    </h1>
  );
}

export default Profile;
