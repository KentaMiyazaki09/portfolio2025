type Props = {
  text: string;
};

const PageTtl = ({ text }: Props) => (
  <h1 className="fixed top-[40%] left-[-10px] rotate-90 text-[clamp(1.1rem,2.5vw,2rem)] font-semibold mix-blend-exclusion">
    {text}
  </h1>
);

export default PageTtl;
