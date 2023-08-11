import React from 'react'
const arrow= 'https://static.vecteezy.com/system/resources/previews/009/877/163/original/arrows-button-pointer-direction-for-decorative-free-png.png'

export const Footer = () => {
  return (
    <footer className=' w-full h-20 flex justify-around items-center bg-neutral-500'>
        <p className='text-xl'>Hecho en 2023 &copy;/ Santiago Barrera Lopez</p>
        <button className='w-14 border-4 p-2 rounded-md'>
            <img className='w-10'src={arrow} alt="" />
        </button>
    </footer>
  )
}
