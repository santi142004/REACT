import {useState} from 'react'
const arrow= 'https://static.vecteezy.com/system/resources/previews/009/877/163/original/arrows-button-pointer-direction-for-decorative-free-png.png'
const git = 'https://pngimg.com/d/github_PNG83.png'

export const Footer = () => {
//   const [isOn, setIsOn] = useState(false);
//   const[color, setColor]= useState('bg-fondoColor')
//   const [colorText, setColorText]= useState('text-white')

// const changeColor= ()=>{
// setIsOn(!isOn)
//   if (!isOn) {
//     setColor('bg-white')
//     setColorText('text-black')
//   }else{
//     setColor('bg-fondoColor')
//     setColorText('text-white')
//   }
// }
  return (
    <footer className='h-1/6 flex justify-around items-center bg-neutral-500 text-sm '>
      <div className='flex flex-col w-7/12'>
        <p>Hecho en 2023 &copy;/ Santiago Barrera Lopez</p>
        <p>Correo: santiagobarreralopez2004@gmail.com</p>
      </div>
      <div className=' w-56 flex justify-around'>
        <button>
        <img className='w-14' src={git} alt="" />
        </button>
        <button className='w-14 border-4 p-2 rounded-md'>
            <img className='w-10'src={arrow} alt="" />
        </button>
      </div>
      {/* <p className={`${colorText} ${color}`} >Estado: {isOn ? 'Encendido' : 'Apagado'}</p>
      <button className={colorText} 
      onClick={changeColor}>Toggle</button> */}
    </footer>
  )
}
