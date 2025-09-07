interface Props {
  className?: string;
}

function Logo({ className }: Props) {
  return (
    <figure className={`flex justify-center ${className}`}>
      <img src="/logo/logo.svg" style={{ height: "auto" }} width={350} alt="moodiary" />
    </figure>
  );
}

export default Logo;
