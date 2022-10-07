import { useEffect } from "react";

export const useLog = (value: string) => {
  useEffect(() => {
    console.log(value);
  }, []);
};
