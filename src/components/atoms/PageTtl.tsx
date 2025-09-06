import { motion } from "motion/react";

type Props = {
  text: string;
};

const PageTtl = ({ text }: Props) => (
  <h1 className="z-30 fixed top-[20%] left-[-10px] rotate-90 text-[clamp(1.1rem,2.5vw,2rem)] font-semibold opacity-0 pointer-events-none">
    {text}
  </h1>
);

export default PageTtl;
