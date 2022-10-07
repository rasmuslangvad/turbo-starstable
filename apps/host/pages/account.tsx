import dynamic from "next/dynamic";

const AccountApp = dynamic(() => import("account/App"), {
  ssr: false,
});

export default function Account() {
  return <AccountApp />;
}
