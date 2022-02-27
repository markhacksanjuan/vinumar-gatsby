import React from 'react'
import './situacion.css'
import SimpleImageSlider from 'react-simple-image-slider'

// import images to slider
// import img1 from '../../images/img/Entorno_natural_Carrusel_1.jpg'
// import img2 from '../../images/img/Entorno_natural_Carrusel_2.jpg'
// import img3 from '../../images/img/Entorno_natural_Carrusel_3.jpg'

import imgAlcohol1 from '../../images/img/Situacion-Geografica-Carrusel-1.jpg'
import imgAlcohol2 from '../../images/img/Entorno_natural_Pagina_6.jpg'

import img1 from '../../images/selected/DJI_0682-2_sit1.jpg'
import img2 from '../../images/selected/DJI_0684-2_sit2.jpg'
import img3 from '../../images/selected/DJI_0696-2_sit3.jpg'


const Situacion = ({ type, children, title }) => {
    const images = [
        { url: img1 },
        { url: img2 },
        { url: img3 }
    ]
    // const imagesSlider = [
    //     { url: sliderImg1 },
    //     { url: sliderImg2 },
    //     { url: sliderImg3 }
    // ]

        return (
            <>
                <div className='situacion-container'>
                    <div className='situacion-text-container'>
                        <h4>Situación geográfica</h4>
                        <p>Enraizados en esta tierra</p>
                        <p>Hace más de 60 años, decidimos plantar nuestras raíces en estos parajes únicos para vivir inmersos en una de las zonas de mayor producción de uva del mundo. Hoy, somos parte del tejido económico de Castilla-La Mancha como referente internacional en el mercado del tratamiento de la uva.</p>
                    </div>
                    <SimpleImageSlider
                        images={images}
                        width='72.82%'
                        height={600}
                        showNavs={true}
                        className='situacion-slider'
                     />
                </div>
            </>
        )

}
export default Situacion