import React from "react";
import { Button } from "ui/Button";

import { useLog } from "hooks/useLog";

const Register: React.FC = () => {
  useLog("Mounted from Register");
  return (
    <div>
      <h1>Register</h1>
      <Button onClick={() => console.log("Clicked from Register App")}>
        Register button
      </Button>
    </div>
  );
};

export default Register;
