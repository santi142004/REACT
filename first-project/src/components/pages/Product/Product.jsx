import React from 'react'
const img= 'https://w0.peakpx.com/wallpaper/850/559/HD-wallpaper-lion-animal-face-faces-king-leon-lions.jpg'

export const Product = () => {
  return (
    <div className='w-96 h-96 bg-slate-600 mt-8 ml-96 rounded-2xl flex flex-col items-center text-lg text-white '>
      <img className='w-full h-1/2 rounded-t-2xl object-cover' src={img} alt="lion" />
      <h2 className='font-bold bg-slate-800 shadow-lg shadow-zinc-950 py-3 w-full flex justify-center'>Category</h2>
      <div className=' w-full h-24  font-bold flex justify-between items-center text-lg px-4'>
        <p>title</p>
        <p className=''>$price</p>
      </div>
    </div>
  )
}
