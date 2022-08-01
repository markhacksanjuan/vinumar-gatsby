import React, { useContext } from 'react'
import Navbar from '../../components/navbarIndex/NavbarIndex'
import Footer from '../../components/footer/Footer'
import EntornoNatural from '../../components/entornoNatural/EntornoNatural'
import Button from '../../components/button/Button'

import '../../styles/pages/pepita.css'

import pepitaHeaderImg from '../../images/DEF/BL8A9687.jpg'

import { LangStateContext } from '../../components/GlobalContextProvider/GlobalContextProvider'
import { langText } from '../../lang'


const Pepita = () => {
    const { lang } = useContext(LangStateContext)

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


    return(
        <>
            <Navbar width='214px' />

            {renderPepitaHeader()}

            <Button style='red-button' width='270' goTo='/Contacto'>{langText.seed.button[lang]}</Button>

            <EntornoNatural type='pepita' />
            <Footer />

        </>
    )
}
export default Pepita