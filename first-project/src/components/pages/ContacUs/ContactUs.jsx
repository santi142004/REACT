import React from 'react'
import './ContacUs.css'

export const ContactUs = () => {
  return (
    <section className='italic'>
        <h1 className='titulo text-center w-full mt-4'>Contacta con nosotros</h1>
        <p className='flex justify-center text-center py-8 text-white '>En esta sección podras contactar directamente conmigo, si tienes alguna duda, si necesitas que realice algun proyecto. <br /> En la parte de abajo tendras un acceso directo a mi github y estara mi número telefonico y mi correo <br /> por si deseas tener un contacto mas directo conmigo o si deseas ver todos mis proyectos</p>
        <div className='flex justify-center flex-col  items-center py-8 '>
            <input className='w-5/12 p-2 rounded-lg' type="text" placeholder='Nombre' /><br /><br />
            <input className='w-5/12 p-2 rounded-lg' type="email" placeholder='correo electronico' /><br /><br />
            <textarea className='w-5/12 p-2 rounded-3xl' cols="20" rows="15" placeholder='Envianos un mensaje'></textarea>
            <button>
              <input className='w-32 h-10 bg-zinc-400 hover:bg-slate-50 mt-5 rounded-3xl' type="submit" />
            </button>
        </div>
    </section>
  )
}
