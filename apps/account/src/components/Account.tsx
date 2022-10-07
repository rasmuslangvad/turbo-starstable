import React from "react";
import { Button } from "ui/Button";

const Account: React.FC = () => {
  return (
    <div>
      <h1>Account</h1>
      <Button onClick={() => console.log("Clicked from Account App")}>
        Account button
      </Button>
    </div>
  );
};

export default Account;
