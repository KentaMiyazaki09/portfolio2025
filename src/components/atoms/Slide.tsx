type Props = {
  text: string
}

const Slide = ({ text }: Props) => {
  return (
    <div className="h-[50px] flex-[0_0_50%]">{text}</div>
  )
}

export default Slide;