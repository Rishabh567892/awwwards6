import { useState } from 'react'
import projectData from "./projectData"
import ProjectSwitcher from './ProjectSwitcher'
import { Link, useLocation } from 'react-router-dom';
import Background from './Background';
import Heading from './Heading';

let nameOfAllProjects = projectData.map(v => v.name);

const Home = () => {

  const location = useLocation()

  const [projectIndex, setProjectIndex] = useState(0)

  let data = projectData[projectIndex]

  return (
    <div className="h-screen w-screen px-6 py-4 flex items-end z-[2]">

      <Link to={`/works/${data.name}`} className="h-full">

        <Background name={data.name} location={location} index={projectIndex} />

        <Heading name={data.name} location={location} desc={data.description} index={projectIndex} />

      </Link>

      <ProjectSwitcher location={location} nameOfAllProjects={nameOfAllProjects} data={data} projectIndex={projectIndex} setProjectIndex={setProjectIndex} />
    </div>
  )
}

export default Home