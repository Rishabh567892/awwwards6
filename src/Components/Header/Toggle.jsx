import { useState } from "react"
import { Link, useLocation } from "react-router-dom"

const Toggle = () => {

  const location = useLocation();
  
  let hour = new Date().getHours()
  let min = new Date().getMinutes()

  const [currentTime, setCurrentTime] = useState(`${hour >= 12 ? hour - 12 : hour}:${min < 9 ? `0${min}` : min}`)

  let btnStyle = location.pathname === "/" ? 'z-10' : location.pathname === "/menu" ? 'z-10 text-black' : 'z-[5]'

  let lineStyle = `${location.pathname === "/menu" ? 'bg-black' : 'bg-white'} outline-none border-none h-px w-12`

  return (
    <div className={`absolute top-9 right-6 flex items-center gap-15 ${btnStyle}`}>
      <p>{currentTime}</p>

      <Link to={location.pathname === "/menu" ? '/' : '/menu'}>
        <div className={`flex flex-col ${location.pathname === "/menu" ? 'py-2' : 'gap-2'} cursor-pointer`}>
          <hr className={lineStyle} />
          <hr className={lineStyle} />
        </div>
      </Link>
    </div>
  )
}

export default Toggle