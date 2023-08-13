import React from 'react'

export const ContactUs = () => {
  return (
    <section className="bg-fondo bg-no-repeat bg-cover">
        <h1 className='text-center w-full'>Contacta con nosotros</h1>
        <p className='flex justify-center text-center py-8 text-white '>En esta sección podras contactar directamente conmigo, si tienes alguna duda, si necesitas que realice algun proyecto. <br /> En la parte de abajo tendras un acceso directo a mi github y estara mi número telefonico y mi correo <br /> por si deseas tener un contacto mas directo conmigo o si deseas ver todos mis proyectos</p>
        <div className='flex justify-center flex-col  items-center py-8'>
            <input className='w-5/12 p-2' type="text" placeholder='Nombre' /><br /><br />
            <input className='w-5/12 p-2' type="email" placeholder='correo electronico' /><br /><br />
            <textarea className='w-5/12 p-2' cols="38" rows="10" placeholder='Envianos un mensaje'></textarea>
        </div>
    </section>
  )
}
