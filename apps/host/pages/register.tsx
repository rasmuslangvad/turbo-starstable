import dynamic from "next/dynamic";

const RegisterApp = dynamic(() => import("register/App"), {
  ssr: false,
});

export default function Register() {
  return <RegisterApp />;
}
