import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

export function usePreviousPathname() {
  const pathname = usePathname();
  const prevRef = useRef<string | null>(null);

  const [prev, setPrev] = useState<string | null>(null);

  useEffect(() => {
    setPrev(prevRef.current);
    prevRef.current = pathname;
  }, [pathname]);

  return prev;
}
