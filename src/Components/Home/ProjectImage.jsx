import { motion } from 'framer-motion'
import { useState } from 'react'

const ProjectImage = ({name, hoveredImage, setHoveredImage, i, setProjectIndex}) => {
  const [imgUrl, setImgUrl] = useState(`/Images/${name}/${name}.webp`)

  return (
    <motion.img
      key={i}
      src={imgUrl}
      alt=""
      className="h-15 cursor-pointer"
      onClick={() => setProjectIndex(i)}
      initial={{ opacity: 1 }}
      animate={{ opacity: hoveredImage === i || hoveredImage === -1 ? 1 : 0.5 }}
      onMouseOver={() => setHoveredImage(i)}
      onMouseOut={() => setHoveredImage()}
      onError={() => setImgUrl(`/Images/${name}/1.webp`)}
    />
  )
}

export default ProjectImage