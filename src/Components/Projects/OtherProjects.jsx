import { Link } from "react-router-dom";
import Intro from "../Intro";
import Card from "../Card"

const OtherProjects = ({ name, projects }) => {

  let index = 0;

  return (
    <div className="relative text-zinc-400 z-2 py-20">

      <Intro name={<>Explore More<sup>05</sup></>} text={"??A space for exploration, creative concepts that never saw the light, and work-in-progress ideas."} />

      <div className="flex flex-col">
        {
          projects.map((v, i) => {

            if (v.name !== name) {
              index++;
              return <Link to={`/works/${v.name.replace(" ", "-")}`}>
                <Card key={i} index={index} type={v.type} name={v.name} />
              </Link>
            } else {
              return null
            }
          })
        }
      </div>
    </div>
  )
}

export default OtherProjects