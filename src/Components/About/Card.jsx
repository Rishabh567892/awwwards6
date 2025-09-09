import { motion } from "framer-motion"

let nameVariants = {
  initial: { paddingLeft: 40 },
  hover: { paddingLeft: 0 }
}

const Card = ({ id, name, desc, extendedCard, setExtendedCard }) => {

  const handleOnClick = () => {
    if (extendedCard === id) {
      setExtendedCard(-1)
    } else setExtendedCard(id)
  }

  let styles = "w-fit flex items-center gap-3"

  return (
    <motion.div className={`flex items-center border-b border-zinc-300 w-full ${id != 0 ? 'pt-6' : ''} pb-6 cursor-pointer justify-between`} initial='initial' whileHover='hover' onClick={handleOnClick}>

      <div className={styles}>
        <p className="text-zinc-400 text-base">({String(id + 1).padStart(2, '0')})</p>

        <motion.p
          className='text-md w-full capitalize text-base pl-10'
          variants={nameVariants}
        >{name}</motion.p>
      </div>

      <div className={styles}>
        <motion.p
          initial={{ height: 0 }}
          animate={{ height: extendedCard === id ? '60px' : '0' }}
          className="overflow-hidden text-zinc-400 leading-5 text-sm mr-5 w-2xs flex items-center"
        >{desc}</motion.p>

        <motion.img
          src="/Images/plus-white.svg"
          alt=""
          className="h-4 aspect-square"
          initial={{ rotate: 0 }}
          animate={{ rotate: extendedCard === id ? 135 : 0 }}
          transition={{ duration: .5 }}
        />
      </div>
    </motion.div>
  )
}

export default Card