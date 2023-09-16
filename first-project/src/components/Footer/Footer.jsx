
const git = 'https://pngimg.com/d/github_PNG83.png'

export const Footer = () => {

  const openGit = () =>{
    window.open('https://github.com/santi142004', '_blank')
  }


  return (
    <footer className='h-1/6  flex justify-around items-center bg-neutral-500 text-sm italic'>
      <div className='flex flex-col w-7/12'>
        <p>Hecho en 2023 &copy;/ Santiago Barrera Lopez</p>
        <p>Correo: santiagobarreralopez2004@gmail.com</p>
      </div>
      <div className=' w-56 flex justify-around'>
        <button onClick={openGit}>
          <img className='w-14' src={git} alt="" />
        </button>
      </div>
    </footer>
  )
}
