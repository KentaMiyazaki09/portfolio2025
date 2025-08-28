import { motion } from "motion/react";

type Props = {
  text: string;
};

const PageTtl = ({ text }: Props) => (
  <h1 className="z-30 fixed top-[20%] left-[-10px] rotate-90 text-[clamp(1.1rem,2.5vw,2rem)] font-semibold">
    <motion.div
      initial={{ opacity: 0, x: 10 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 10 }}
      transition={{ duration: 0.5 }}
    >
      {text}
    </motion.div>
  </h1>
);

export default PageTtl;
