import { motion } from "framer-motion"

const Buttons = ({ buttons }) => {
  return (
    <div className="flex flex-wrap gap-2">
      {buttons.map((v, i) => {
        return <motion.button
          key={i}
          className="border border-zinc-400 rounded-sm px-4 py-3 text-sm"
          initial={{color: "white", backgroundColor: "#ffffff00"}}
          whileHover={{color: "#000", backgroundColor: "#fff"}}
          transition={{duration: .5}}
        >{v}</motion.button>
      })}
    </div>
  )
}

export default Buttons