import { motion } from "framer-motion"
import { useEffect, useRef, useState } from "react"

const Card = ({ index, name, type, color }) => {

  let imgStyles = "h-8 aspect-square rounded-full overflow-hidden object-cover"

  const parentRef = useRef(null)
  const indexRef = useRef(null)

  const [parentWidth, setParentWidth] = useState(0)

  useEffect(() => {
    parentRef.current && setParentWidth(Number(parentRef.current.getBoundingClientRect().width))
  }, [])

  return (
    <motion.div className="flex border-b border-zinc-400 py-4 items-center cursor-pointer" initial='initial' whileHover='hover' ref={parentRef}>

      <motion.p
        ref={indexRef}
        className={`text-[${color}]`}
        variants={{
          initial: { width: "20%" },
          hover: { width: "10%" }
        }}
        transition={{ duration: .5 }}
      >({String(index).padStart(2, '0')})</motion.p>

      <p className={`text-[${color}]`} style={{ width: parentWidth / 3 }}>{name}</p>
      <p style={{ width: parentWidth / 3 }}>{type}</p>

      <motion.div
        className="flex gap-2 justify-end origin-right"
        variants={{
          initial: { width: 0 },
          hover: { width: "100%" }
        }}
        transition={{ duration: .5 }}
      >
        {
          [...Array(3)].map((_, i) => {
            return <img key={i} src={`/Images/${name.split(" ").join("_")}/${i + 1}.webp`} alt="" className={imgStyles} />
          })
        }
      </motion.div>
    </motion.div>
  )
}

export default Card