import React from 'react'
import Section from '../Section/Section'
import './Main.css'

const img ='https://p4.wallpaperbetter.com/wallpaper/946/632/921/espacio-estrellas-naturaleza-planetas-wallpaper-preview.jpg'
const facebook= 'https://www.facebook.com/images/fb_icon_325x325.png'
const twitter= 'https://img.freepik.com/iconos-gratis/gorjeo_318-674515.jpg'
const instagram= 'https://img.freepik.com/iconos-gratis/instagram_318-183413.jpg'
const linkedin= 'https://cdn-icons-png.flaticon.com/512/174/174857.png'

export const Main = () => {
    return (
        <Section>
        <section className=' texts flex justify-around items-center bg-fondo bg-no-repeat bg-cover h-4/6 '>
                <div className='text'>
                    <h3 className='text-4xl'>Hello, it´s Me</h3>
                    <h2 className='text-5xl'>Santiago Barrera Lopez</h2>
                    <h3 className='text-4xl'>And I´m a <span>software developer |</span></h3> <br />
                    <p>Estudiante de desarrollo de software en el Sena, apasionado con todo lo que tenga que ver con tecnologia y temas afines a la programación. Soy una persona que tiene facil comunicación para el trabajo en equipo, interesado en aprender de muchas personas con mayor conocimiento, tambien poder desarrollar mis propias habilidades, soy una persona formada con valores importantes como lo son el respeto, resposabilidad, compromiso, profesionalismo y sobre todo puntualidad.</p>
                <div className="icons">
                    <img src={facebook} alt="facebok" />
                    <img src={twitter} alt="twitter" />
                    <img src={instagram} alt="" />
                    <img src={linkedin} alt="" />
                </div>

                <div className="button">
                    <button>
                    DownLoad CV
                    </button>
                </div>
                    
                </div>  
                <div className='photo'>
                    <img src={img} alt="hola" />
                </div>
        </section>

        </Section>
    )
}