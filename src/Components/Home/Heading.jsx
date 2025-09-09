import { AnimatePresence, motion } from "framer-motion"

const Heading = ({ index, name, desc, location }) => {
  return (
    <div className="absolute top-1/2 left-0 w-full px-6 flex justify-between items-center -translate-y-1/2 z-2">

      <AnimatePresence mode="wait">
        <motion.h1
          key={index + '-heading'}
          className="text-5xl whitespace-nowrap w-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: location.pathname !== "/" ? 0 : 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: .5 }}
        >{name}</motion.h1>
      </AnimatePresence>

      <div className="relative overflow-hidden w-full flex justify-end h-6">
        <AnimatePresence mode="wait">
          <motion.p
            key={index + '-desc'}
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "-100%" }}
            transition={{ duration: 1 }}
            className="relative text-xl font-[Italic] leading-5"
          >
            {desc}
          </motion.p>
        </AnimatePresence>
      </div>
    </div>
  )
}

export default Heading