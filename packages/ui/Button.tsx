import * as React from "react";

export const Button = ({ children, onClick }: any) => {
  return <button onClick={onClick}>{children}</button>;
};
