import { AnimatePresence, motion } from 'framer-motion'
import { useEffect, useState } from 'react'

const Background = ({index, name, location}) => {

  const [imgUrl, setImgUrl] = useState(`/Images/${name}/${name}.webp`)

  useEffect(() => {
    setImgUrl(`/Images/${name}/${name}.webp`)
  }, [index])

  return (
    <AnimatePresence mode="wait">

      <motion.img
        key={index + '-img'}
        src={imgUrl}
        alt=""
        className="absolute top-0 left-0 h-screen w-screen object-cover"
        initial={{ filter: 'blur(20px)' }}
        animate={{ filter: location.pathname !== "/" ? "blur(20px)" : 'blur(0px)' }}
        exit={{ filter: 'blur(20px)' }}
        transition={{ duration: .5 }}
        onError={() => setImgUrl(`/Images/${name}/1.webp`)}
      />

    </AnimatePresence>
  )
}

export default Background