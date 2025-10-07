"use client";

import { useUserStore } from "~/store/useUserStore";

function Profile() {
  const user = useUserStore((state) => state.user);
  return <h1>{user}</h1>;
}

export default Profile;
