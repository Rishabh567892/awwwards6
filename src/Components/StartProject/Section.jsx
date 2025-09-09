
const Section = ({ index, heading, desc, children }) => {
  return (
    <div className={`flex px-6 py-12 border-${index != 0 ? 't' : 'none'} border-zinc-400`}>
      <p className="text-zinc-400 flex-[0.5]">({String(index + 1).padStart(2, "0")})</p>
      <h3 className="text-lg flex-[0.5]">{heading}</h3>
      <div className="flex flex-col gap-5 flex-1">
        <h2 className="text-md text-zinc-400">{desc}</h2>
        {children}
      </div>
    </div>
  )
}

export default Section