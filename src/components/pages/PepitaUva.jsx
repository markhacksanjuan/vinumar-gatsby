import React, { useEffect, useState } from 'react'
import EntornoNatural from '../entornoNatural/EntornoNatural'
import Button from '../button/Button'
import Head from '../Head/Head'
import Layout from '../Layout/Layout'

import '../../styles/pages/pepita.css'
import '../../styles/pages/mediaQueries/producto-media.css'

import pepitaHeaderImg from '../../images/DEF/BL8A9687.jpg'

import { langText } from '../../lang'
import { useLang } from '../../hook/useLang'

const Pepita = ({ location }) => {
    const [screenWidth, setScreenWidth] = useState(typeof window !== 'undefined' ? window.screen.width : 1920)
    const lang = useLang(location)
    const resizeFunction = () => {
        setScreenWidth(window.screen.width)
    }
    useEffect(() =>{
        if(typeof window !== 'undefined'){
            window.addEventListener('resize', resizeFunction)
          }
        return(() => {
            window.removeEventListener('resize', resizeFunction)
        })
    }, [])

    const renderPepitaHeader = () => {
        return(
            <>
                <div className='pepita-container-header'>
                    <div className='pepita-container-header-title'>
                        <h4>{langText.seed.header.title[lang]}</h4>
                        <p>{langText.seed.header.text_1[lang]}
                            <br/><br/> 
                            {langText.seed.header.text_2[lang]}</p>
                    </div>
                    <div className='pepita-header-apli-carac-img-container'>
                        <div className='pepita-header-apli-carac-container'>
                            <div className='pepita-header-apli-container'>
                                <p className='pepita-header-apli-carac-title'>{langText.seed.header.applications.title[lang]}</p>
                                <ul>
                                    <li>{langText.seed.header.applications.oil[lang]}</li>
                                    <li>{langText.seed.header.applications.cosmetics[lang]}</li>
                                    <li>{langText.seed.header.applications.poly[lang]}</li>
                                </ul>
                                <p className='pepita-header-apli-definition'>{langText.seed.header.applications.text[lang]}</p>
                            </div>
                            <div className='pepita-header-carac-container'>
                                <p className='pepita-header-apli-carac-title'>{langText.seed.header.characteristics.title[lang]}</p>
                                <ul>
                                    <li className='pepita-header-carac-li'>
                                        <p>{langText.seed.header.characteristics.botanic.title[lang]}</p>
                                        <p className='italic'>{langText.seed.header.characteristics.botanic.name[lang]}</p>
                                    </li>
                                    <li className='pepita-header-carac-li'>
                                        <p>{langText.seed.header.characteristics.labelling.title[lang]}</p>
                                        <ul className='circle'>
                                            <li>{langText.seed.header.characteristics.labelling.name[lang]}</li>
                                        </ul>
                                    </li>
                                    <li className='pepita-header-carac-li'>
                                        <p>{langText.seed.header.characteristics.storage.title[lang]}</p>
                                        <ul className='no-style'>
                                            <li>{langText.seed.header.characteristics.storage.name[lang]}</li>
                                        </ul>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <img className='pepita-header-img' src={pepitaHeaderImg} alt="Extracto de uva" />

                    </div>
                </div>
            </>
        )
    }

    const key_grape_esp = 'pepita de uva, granilla'
    const key_grape_eng = 'grape seed'
    const key_grape = key_grape_eng + ', ' + key_grape_esp

    return(
        <>
            <Head keywordsPage={key_grape} pageTitle={langText.head.seed[lang]} description='Granilla - pepita de uva - grape seed'/>
            <Layout pageLocation={location}>
                {renderPepitaHeader()}

                <Button style='red-button' width='270' goTo={lang === 'es' ? '/contacto' : '/en/contact-us'}>{langText.seed.button[lang]}</Button>

                    <EntornoNatural type='pepita' width={screenWidth} />

                <Button style='red-button' width='270' goTo={lang === 'es' ? '/sobre-nosotros/valores' : '/en/about-us/values'}>{langText.where.button[lang]}</Button>
            </Layout>
        </>
    )
}
export default Pepita