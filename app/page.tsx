import CLink from "~/components/common/CLink";
import Logo from "~/components/common/Logo";

export default function Home() {
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
