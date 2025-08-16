import Link from "next/link";

interface Props {
  children: string | React.ReactNode;
  className?: string;
  href: string;
}

function CLink({ children, className, href }: Props) {
  return (
    <Link
      className={`bg-primary rounded-full text-white active:scale-95 transition-transform duration-200 text-2xl ${className}`}
      href={href}>
      {children}
    </Link>
  );
}

export default CLink;
