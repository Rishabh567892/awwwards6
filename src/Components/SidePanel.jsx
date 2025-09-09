import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

let variants = {
  initial: { rotate: 0 },
  hover: { rotate: '135deg' }
}

const SidePanel = ({ sidePanelContent = null }) => {
  return sidePanelContent ? (
    <motion.div
      className="h-screen w-screen flex flex-row-reverse items-end fixed top-0 right-0 z-[7]"
      initial={{ opacity: 0, x: "100%" }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: "100%" }}
      transition={{ duration: 1 }}
    >

      <div className="relative z-[2] min-h-screen w-fit">{sidePanelContent}</div>

      <Link to="/">
        <motion.button className="relative z-[2] bg-white p-3 m-3.5 rounded-md cursor-pointer" initial='initial' whileHover='hover'>
          <motion.img
            src="/Images/plus.svg"
            className="h-6 aspect-square"
            variants={variants}
            transition={{ duration: .25 }}
          />
        </motion.button>
      </Link>

    </motion.div>
  )
    : null
}

export default SidePanel