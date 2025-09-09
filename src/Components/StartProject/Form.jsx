
let fields = ["Name", "Email", "Company name", "Website link"]

const Form = () => {
  return (
    <div className="flex flex-col gap-4">
      {
        fields.map((v, i) => {
          return <input
            key={i}
            type={v === "Email" ? "email" : "text"}
            placeholder={v}
            className="border-zinc-400 border outline-none px-2 py-3 text-sm placeholder:text-white"
          />
        })
      }
      <button
        className="bg-white text-black flex self-end px-4 py-2 items-center gap-10 text-sm rounded-sm"
      >
        Submit
        <img src="/Images/plus.svg" className="h-4 aspect-square" />
      </button>
    </div>
  )
}

export default Form