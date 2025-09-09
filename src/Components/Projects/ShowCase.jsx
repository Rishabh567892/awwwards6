
const ShowCase = ({ name, year, projectInfo, url, btnText }) => {

  return (
    <div className="mb-15 relative z-2">
      <div className="relative h-screen p-4">
        <img src={url.replace(" ", "_")} alt="" className="absolute top-0 left-0 h-screen w-full rounded-md overflow-hidden object-cover" />

        <div className="sticky top-10 flex justify-between">
          <p className="text-white text-3xl">{name}</p>

          <button className="h-fit w-fit py-1 px-1.5 flex items-center gap-3 bg-white rounded-md">
            {/* complete image url */}
            <img src="/Images" alt="" className="h-6 aspect-square rounded-sm overflow-hidden object-cover" />
            <p className="text-sm">{btnText}</p>
            <img src="/Images/plus.svg" alt="" className="h-4 aspect-square" />
          </button>
        </div>

      </div>

      <div className="flex py-5 text-base text-zinc-400 gap-40">
        <p>{projectInfo}</p>
        <p>({year})</p>
      </div>
    </div>
  )
}

export default ShowCase