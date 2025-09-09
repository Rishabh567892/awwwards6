import Buttons from "./Buttons"
import data from "./data"
import Form from "./Form"
import Section from "./Section"

const StartProject = () => {
  return (
    <div className="bg-zinc-950 h-screen w-[72vw] py-5 overflow-y-scroll">
      {data.map((v, i) => {
        return <Section key={i} index={i} {...v}>
          <Buttons buttons={v.buttons} />
        </Section>
      })}

      <Section index={3} heading='Project information' desc='Include any relevant project details, questions or ideas.'>
        <textarea
          name=""
          placeholder="Enter project details"
          className="text-sm text-white placeholder:text-white border border-zinc-400 rounded-sm px-2 py-3 h-40 outline-none"
        ></textarea>
      </Section>

      <Section index={4} heading='General information' desc="Include your personal details.">
        <Form />
      </Section>
    </div>
  )
}

export default StartProject
