import Image from "next/image";
import CLink from "~/components/common/CLink";

export default function Home() {
  return (
    <section className="relative h-screen">
      <figure className="flex justify-center mt-70">
        <Image src="/logo/logo.svg" width={350} height={100} alt="moodiary" />
      </figure>
      <CLink
        className="absolute top-[300px] left-1/2 translate-x-[-50%] py-2 px-8 animate-float"
        href={"/login"}>
        시작하기
      </CLink>
    </section>
  );
}
