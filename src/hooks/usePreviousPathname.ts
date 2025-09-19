import { usePathname } from "next/navigation";
import { SetStateAction, useEffect, useRef, useState } from "react";

export function usePreviousPathname(
  setAboutOn: (value: SetStateAction<boolean>) => void,
  setWorksOn: (value: SetStateAction<boolean>) => void
) {
  const pathname = usePathname();
  const prevRef = useRef<string | null>(null);

  const [prev, setPrev] = useState<string | null>(null);

  useEffect(() => {
    setPrev(prevRef.current);
    if (prevRef.current === "/about") setAboutOn(true);
    if (prevRef.current === "/works") setWorksOn(true);
    prevRef.current = pathname;
  }, [pathname, setAboutOn, setWorksOn]);

  return prev;
}
