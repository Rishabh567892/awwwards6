import Anchor from './Anchor'

let links = ["projects", "about", "archives", "start a project", "contact"]

const Navigation = () => {
  return (
    <div className="bg-white text-black px-6 py-6 min-h-screen relative w-[62vw]">
      <h2 className="text-4xl mb-6">Menu</h2>

      <hr className="absolute h-px w-full bg-zinc-300 outline-none border-none left-0" />

      <nav className="flex min-h-full mt-18">
        <div className="min-h-full w-4/6 flex flex-col justify-between text-zinc-500">
          <p>(Links)<sup>{String(links.length).padStart(2,"0")}</sup></p>
          <p className="whitespace-nowrap w-auto relative -bottom-8">(Social Media)</p>
        </div>

        <div className="w-full">
          {
            links.map((v, i) => <Anchor key={i} id={String(i+1)} name={v} />)
          }
        </div>
      </nav>
    </div>
  )
}

export default Navigation