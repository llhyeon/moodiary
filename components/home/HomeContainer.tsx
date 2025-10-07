"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import CLink from "~/components/common/CLink";
import Logo from "~/components/common/Logo";

function HomeContainer() {
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const currentUser = sessionStorage.getItem("currentUser");
    if (currentUser) {
      router.push("/main");
    } else {
      setLoading(false);
    }
  }, [router]);

  if (loading) return null;

  return (
    <section className="relative h-screen">
      <Logo className="mt-70" />
      <CLink
        className="absolute top-[300px] left-1/2 translate-x-[-50%] py-2 px-8 animate-float"
        href={"/login"}>
        시작하기
      </CLink>
    </section>
  );
}

export default HomeContainer;
