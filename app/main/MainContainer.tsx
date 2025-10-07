"use client";

import { useEffect } from "react";
import Spinner from "~/components/common/Spinner";
import Profile from "~/components/main/Profile";
import { useUserStore } from "~/store/useUserStore";

interface Props {
  user: string;
}

function MainContainer({ user }: Props) {
  const setUser = useUserStore((state) => state.setUser);

  // 현재 로그인된 유저 전역으로 등록
  useEffect(() => {
    if (user) {
      setUser(user);
    }
  }, [user, setUser]);

  return (
    <>
      <Profile />
      {/* <Spinner /> */}
    </>
  );
}

export default MainContainer;
