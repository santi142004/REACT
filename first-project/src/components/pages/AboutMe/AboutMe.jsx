import React from 'react'
const blueasy= '../../public/images/blueasy.png';
const tenor= '../../public/images/tenorapi.png';
const bleux= '../../public/images/bleux.png'


export const AboutMe = () => {

  const openBlue = () => {
    window.open('https://blueasysanti.netlify.app', '_blank');
  };
  const openTenor= () => {
    window.open('https://tenorapisantibarrera.netlify.app', '_blank')
  };
  const openBleux = () =>{
    window.open('https://responsive-new.netlify.app', '_blank')
  }


  return (
    <section className='h-full  py-5 italic'>
      <h1 className='titulo text-center w-full mt-4'>Acerca de Mi</h1>
      <p className='flex justify-center text-center pt-3 text-white'>En esta sección podras encontar proyectos en los cuales he trabajado y yo mismo he hecho. <br /> Algunas cosas interesantes sobre mi como mis estudios, mis habilidades, tipos de lenguajes <br /> que manejo, tecnologias que manejo y demas cosas. </p>
      <section className='h-1/2 flex justify-around py-32'>
        <div className='w-80 h-96 bg-slate-600 mt-8 rounded-2xl flex flex-col items-center text-lg text-white hover:scale-105  '  onClick={openBlue}>
          <img className='w-full h-1/2 rounded-t-2xl object-cover' src={blueasy} alt="lion" />
          <h2 className='font-bold bg-slate-800 shadow-lg shadow-zinc-950 py-3 w-full flex justify-center'>BLUEASY</h2>
          <div className=' w-full h-96  font-medium flex justify-center items-center text-xs px-4 '>
            <p className=''>Blueasy es una página web impresionante construida con HTML y JavaScript, destacando por su diseño en tonos azules que evocan calma y profesionalismo. La página ofrece interacciones dinámicas y un diseño receptivo para una experiencia de usuario fluida. Desplegada en Netlify, garantiza velocidad y accesibilidad global. En resumen, Blueasy fusiona arte, diseño y programación en una experiencia web excepcional.</p>
          </div>
        </div>
        <div className='w-80 h-96 bg-slate-600 mt-8 rounded-2xl flex flex-col items-center text-lg text-white hover:scale-105 ' onClick={openTenor}>
          <img className='w-full h-1/2 rounded-t-2xl object-cover' src={tenor} alt="lion" />
          <h2 className='font-bold bg-slate-800 shadow-lg shadow-zinc-950 py-3 w-full flex justify-center'>TENOR</h2>
          <div className=' w-full h-96  font-medium flex justify-center items-center text-xs px-4'>
            <p>Tenor es una página web dinámica desarrollada en HTML y JavaScript que hace uso creativo del DOM y consume una API para ofrecer contenido actualizado y atractivo a los usuarios. Con su despliegue eficiente en Netlify, Tenor garantiza una experiencia fluida y rápida. Una combinación impresionante de tecnologías web que brindan interactividad y contenido en tiempo real.</p>

          </div>
        </div>
        <div className='w-80 h-96 bg-slate-600 mt-8  rounded-2xl flex flex-col items-center text-lg text-white hover:scale-105' onClick={openBleux}>
          <img className='w-full h-1/2 rounded-t-2xl object-cover' src={bleux} alt="lion" />
          <h2 className='font-bold bg-slate-800 shadow-lg shadow-zinc-950 py-3 w-full flex justify-center'>BLEUX</h2>
          <div className='w-full h-96  font-medium flex justify-center items-center text-xs px-4'>
            <p>Bleux es una página web con diseño elegante y funcionalidades avanzadas, construida en HTML y JavaScript. Aprovecha el poder del DOM para ofrecer interacciones dinámicas y utiliza efectos que mejoran la experiencia del usuario. La integración de Netlify garantiza un despliegue eficiente. En conjunto, Bleux representa la convergencia perfecta de tecnología y diseño web para una experiencia de usuario excepcional.</p>
          </div>
        </div>  
      </section> 

    </section>

  )
}
