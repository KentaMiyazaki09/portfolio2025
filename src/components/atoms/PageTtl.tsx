type Props = {
  text: string;
};

const PageTtl = ({ text }: Props) => (
  <h1 className="fixed top-[40%] left-[-10px] rotate-90 text-lg font-semibold">
    {text}
  </h1>
);

export default PageTtl;
