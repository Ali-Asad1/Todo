import { useEffect } from "react";

export const useClickOutSide = (ref: any, callback: Function) => {
  const handleClick = (e: Event) => {
    if (ref.current && !ref.current.contains(e.target)) {
      callback();
    }
  };
  useEffect(() => {
    document.addEventListener("mousedown", handleClick);
    document.addEventListener("touchmove", handleClick);
    return () => {
      document.removeEventListener("mousedown", handleClick);
      document.removeEventListener("touchmove", handleClick);
    };
  }, [ref, callback]);
};
