


const Details = ({ client, year, location, credits, services }) => {

  let hStyles = "flex-1"
  let vStyles = "flex-1"

  return (
    <div className="flex flex-col py-12 gap-7">
      <h3 className="text-xl mb-2">Details</h3>
      <div className="flex flex-col mb-6">

        <div className="flex w-full text-zinc-400 text-xs mb-5">
          <p className={hStyles}>Client</p>
          <p className={hStyles}>Year</p>
          <p className={hStyles}>Location</p>
          <p className={hStyles}>Credits</p>
        </div>

        <div className="flex w-full text-sm border border-zinc-400 border-l-0 border-r-0 py-4">
          <p className={vStyles}>{client}</p>
          <p className={vStyles}>{year}</p>
          <p className={vStyles}>{location}</p>
          <p className={vStyles}>{credits}</p>
        </div>
      </div>

      <h3 className="text-xl">Services</h3>
      <div className="flex flex-4 border border-zinc-400 border-l-0 border-r-0 py-4">
        {services.map((v, i) => <p key={i} className="text-sm w-1/4">{v}</p>)}
      </div>
    </div>
  )
}

export default Details