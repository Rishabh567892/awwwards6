import { motion } from "framer-motion";

const Intro = ({ name, text, border = false, animated = "#000" }) => {

  let splitText = text.split("??");

  return (
    <div className="relative flex py-10 pr-15 gap-38">
      <p className="text-sm text-zinc-500 text-nowrap">{name}</p>
      <p className="text-2xl w-full leading-6.5 text-zinc-400">
        {splitText[0] ?
          <motion.span
            className={`bg-clip-text text-transparent self-end bg-linear-to-r from-[${animated}] to-[${animated}] bg-size-[0%_100%] bg-no-repeat mr-1`}
            initial={{ backgroundSize: "0% 100%" }}
            animate={{ backgroundSize: "100% 100%" }}
            transition={{ duration: 1, delay: 1.5 }}
          >{splitText[0]}</motion.span>
          : null}
        {splitText[1] ? splitText[1] : splitText[0]}
      </p>
      {border ? <hr className="absolute w-[calc(100%+48px)] -left-6 bottom-0 h-px bg-zinc-400 border-none outline-none" /> : null}
    </div>
  )
}

export default Intro