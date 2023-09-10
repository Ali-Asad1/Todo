import { useEffect } from "react";

export const useKeyPress = (targetKey: string, callback: Function) => {
  const handleKeyPress = (e: KeyboardEvent) => {
    if (e.key === targetKey) {
      callback();
    }
  };
  useEffect(() => {
    document.addEventListener("keydown", handleKeyPress);
    return () => {
      document.removeEventListener("keydown", handleKeyPress);
    };
  }, [targetKey, callback]);
};
