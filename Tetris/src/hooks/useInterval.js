import { useEffect, useRef } from "react";

// Simple useInterval hook
export default function useInterval(callback, delay) {
  const savedRef = useRef();
  useEffect(() => {
    savedRef.current = callback;
  }, [callback]);

  useEffect(() => {
    if (delay === null) return;
    const id = setInterval(() => savedRef.current(), delay);
    return () => clearInterval(id);
  }, [delay]);
}
