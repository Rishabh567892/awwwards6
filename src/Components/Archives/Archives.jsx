import Card from "../Card"
import Intro from "../Intro"
import archivesData from "./archivesData"

const Archives = () => {
  return (
    <div className="w-[72vw] overflow-y-scroll h-screen bg-white text-black min-h-screen p-6">
      <Intro
        name={<>The archieves<sup>(15)</sup></>}
        text="??A space for exploration, creative concepts the never saw light and work-in-progress ideas"
      />
      {archivesData.map((v, i) => {
        return <Card key={i} index={i+1} name={v.name} type={v.type} color="#000" />
      })}
    </div>
  )
}

export default Archives