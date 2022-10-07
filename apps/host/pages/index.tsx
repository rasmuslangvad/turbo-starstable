import dynamic from "next/dynamic";

import { Button } from "ui/Button";

const RegisterApp = dynamic(() => import("register/App"), {
  ssr: false,
});

const AccountApp = dynamic(() => import("account/App"), {
  ssr: false,
});

export default function Web() {
  return (
    <div>
      <h1>Host App</h1>
      <Button onClick={() => console.log("Clicked from Host App")}>
        Host button
      </Button>
      <RegisterApp />
      <AccountApp />
    </div>
  );
}
