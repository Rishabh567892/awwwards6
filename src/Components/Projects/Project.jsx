import { useParams } from "react-router-dom"
import Details from "./Details"
import Intro from "../Intro"
import OtherProjects from "./OtherProjects"
import projectData from "./projectData"
import ShowCase from "./ShowCase"

const Project = () => {

  let { project } = useParams();

  let index;

  let data = projectData.find((v, i) => {
    index = i;
    return v.name === project.replace("-", " ");
  });

  return (
    <div className="relative p-6 pb-0 flex flex-col overflow-y-scroll h-screen bg-white text-black w-[72vw]">
      <Intro name={`(${data.name})`} text={data.text} border />
      <Details {...data.details} services={data.services} />

      {/* current project's showcase */}
      <ShowCase
        name={data.name}
        year={data.details.year}
        projectInfo={`Project ${index+1}`}
        btnText="Live Site"
        btnImg={`/Images/${data.name}/1.webp`}
        url={`/Images/${data.name}/cover.webp`}
      />

      <div className="relative flex flex-col">
        <div className="bg-zinc-950 h-full w-[calc(100%+48px)] absolute top-0 -left-6 z-1"></div>

        <OtherProjects name={data.name} projects={projectData} />

        {/* archieve's showcase */}
        <ShowCase
          name="Archieves"
          year="2022-2024"
          projectInfo="Explorations"
          btnText="Explore all"
          btnImg={`/Images/${data.name}/1.webp`}
          url='/Images/Archieve-Cover.webp'
        />
      </div>
    </div>
  )
}

export default Project