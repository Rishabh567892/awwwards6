import Toggle from "./Toggle"

const Header = () => {

  return (
    <>
      <p className='fixed top-9 left-6 z-10'>MBA©</p>

      <p className="absolute top-9 left-1/2 -translate-1/2 font-['Italic'] z-[5]">Art Director and Digital Designer</p>

      <Toggle />
    </>
  )
}

export default Header