import Logo from "~/components/common/Logo";

function RegisterLayout({ children }: { children: React.ReactNode }) {
  return (
    <section className="h-screen bg-secondary">
      <Logo className="w-70 mx-auto mt-40" />
      {children}
    </section>
  );
}

export default RegisterLayout;
