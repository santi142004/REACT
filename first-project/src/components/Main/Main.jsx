import React from 'react'
import Section from '../Section/Section'
import './Main.css'
const img = 'https://p4.wallpaperbetter.com/wallpaper/946/632/921/espacio-estrellas-naturaleza-planetas-wallpaper-preview.jpg'
const facebook= 'https://cdn-icons-png.flaticon.com/512/20/20673.png'

export const Main = () => {
    return (
        <Section>
        <section>
                <div className='text'>
                    <h3>Hello, it´s Me</h3>
                    <h2>Michael Andres Diaz</h2>
                    <h3>And I´m a <span>FrontEnd |</span></h3> <br />
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi dolore rerum, voluptatem  commodi autem <br /> cum labore?  Natus excepturi laborum aspernatur nesciunt. Alias odio dolorum      provident ipsa ad ab distin</p>
                </div>
                <div className='photo'>
                    <img src={img} alt="hola" />
                </div>  
        </section>
        <section>
        <div className="icons">
                    <img src={facebook} alt="" />
                </div>
                <div className="button">

                </div>
        </section>
        </Section>
    )
}