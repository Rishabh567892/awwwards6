import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

const variants = {
  initial: { paddingLeft: 40 },
  hover: { paddingLeft: 0 }
}

const Anchor = ({ name, id }) => {

  return (
    <Link
      to={name !== "projects" ? `/${String(name).replace(/ /g, "-")}` : "/"}
      className={id === '1' ? "pointer-events-none" : ''}
    >
      <motion.div
        className={`flex gap-3 align-center border-b border-zinc-300 w-full ${id != '1' ? 'pt-6 cursor-pointer' : ''} pb-6`}
        whileHover="hover"
        initial='initial'
      >

        <p className="text-zinc-400 text-xl">({id.padStart(2, '0')})</p>

        <motion.p
          className={`text-md w-full capitalize text-xl ${id != '1' ? 'pl-10' : ''}`}
          variants={id != '1' ? variants : {}}
        >{name}</motion.p>

        <img src="/Images/plus.svg" alt="" className="h-4 aspect-square" />
      </motion.div>
    </Link>
  )
}

export default Anchor