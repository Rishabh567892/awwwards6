import Intro from "../Intro"
import ArchivesData from "./ArchivesData"

const Archives = () => {
  return (
    <div className="w-[72vw] bg-white min-h-screen p-6">
      <Intro
        name={<>The archieves<sup>(15)</sup></>}
        text="??A space for exploration, creative concepts the never saw light and work-in-progress ideas"
      />
      {ArchivesData.map((v, i) => {
        return <Card key={i} name={v} />
      })}
    </div>
  )
}

export default Archives