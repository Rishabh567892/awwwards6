import { AnimatePresence, motion } from "framer-motion"
import { useState } from "react"
import ProjectImage from "./ProjectImage"

const ProjectSwitcher = ({ data, nameOfAllProjects, projectIndex, setProjectIndex, location }) => {

  const [hoveredImage, setHoveredImage] = useState(-1)

  return (
    <div className="flex justify-between relative w-full z-2 items-end" onClick={e => e.stopPropagation()}>
      <div className='flex gap-10'>
        <AnimatePresence mode="wait">
          {["credits", "rol", "year"].map((v, i) => {
            return (
              <motion.div
                key={i + "-" + projectIndex}
                className="h-fit"
                initial={{ opacity: 0 }}
                animate={{ opacity: location.pathname !== "/" ? 0 : 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
              >
                <h3 className="capitalize text-sm text-zinc-400 leading-3">{v}</h3>
                <p className="text-sm">{data[v]}</p>
              </motion.div>
            )
          })}
        </AnimatePresence>
      </div>

      <div className="flex gap-2 mb-2" onMouseOut={() => setHoveredImage(-1)}>
        {
          nameOfAllProjects.map((v, i) => {
            return <ProjectImage name={v} i={i} key={i} hoveredImage={hoveredImage} setHoveredImage={setHoveredImage} setProjectIndex={setProjectIndex} />
          })
        }
      </div>
    </div>
  )
}

export default ProjectSwitcher