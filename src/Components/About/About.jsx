import { useState } from 'react'
import Card from './Card'
import services from './ServicesData'
import Intro from '../Intro'

const About = () => {

  const [extendedCard, setExtendedCard] = useState(-1)

  return (
    <div className="bg-zinc-950 h-screen p-6 w-[72vw]">
      <Intro
        name="(Introduction)"
        text="Independent Art Director and Digital Designer. From Peru, based in Madrid, collaborating with global brands.??I work with innovative companies and agencies, committed to solving problems through beautiful designs and experiences."
        border
        animated="#fff"
      />

      <hr className="absolute h-px w-full bg-zinc-600 outline-none border-none left-0" />

      <div className="flex mt-28">
        <p className="text-zinc-500 w-2/6">(Services)<sup>{String(services.length).padStart(2, "0")}</sup></p>

        <div className='w-full'>
          {
            services.map((v, i) => {
              return <Card key={i} id={i} name={v.name} desc={v.desc} extendedCard={extendedCard} setExtendedCard={setExtendedCard} />
            })
          }
        </div>
      </div>
    </div>
  )
}

export default About