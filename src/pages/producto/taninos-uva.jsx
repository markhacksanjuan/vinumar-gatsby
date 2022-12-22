import React, { useContext, useEffect, useState } from 'react'
import EntornoNatural from '../../components/entornoNatural/EntornoNatural'
import TextCentered from '../../components/textCentered/TextCentered'
import Button from '../../components/button/Button'
import Head from '../../components/Head/Head'
import Layout from '../../components/Layout/Layout'

import '../../styles/pages/taninos.css'
import '../../styles/pages/mediaQueries/producto-media.css'
import taninosHeaderImg from '../../images/DEF/BL8A9614.jpg'

import taninosProductoImg from '../../images/DEF/BL8A9520_2.jpg'

import { LangStateContext, LangDispatchContext } from '../../components/GlobalContextProvider/GlobalContextProvider'
import { langText } from '../../lang'

// const EntornoNatural = React.lazy(() => import('../../components/entornoNatural/EntornoNatural'))

const Taninos = ({}) => {
    const { lang } = useContext(LangStateContext)
    const dispatch = useContext(LangDispatchContext)
    const [screenWidth, setScreenWidth] = useState(typeof window !== 'undefined' ? window.screen.width : 1920)

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

    // useEffect(() => {
    //     if(typeof window !== 'undefined'){
    //         if(lang === 'en'){
    //             window.history.pushState({}, '', '/product/grape-tannins')
    //         }else {
    //             window.history.pushState({}, '', props.uri)
    //         }
    //     }
    // }, [lang])

    const renderTaninosHeader = () => {
        return(
            <>
                <div className='taninos-container-header'>
                    <div className='taninos-container-header-title'>
                        <h4>{langText.tannins.header.title[lang]}</h4>
                        <p>{langText.tannins.header.text_1[lang]}
                            <span className="parrafo">
                            {langText.tannins.header.text_2[lang]}
                            </span>
                        </p>
                    </div>
                    <div className='taninos-header-apli-carac-img-container'>
                        <div className='taninos-header-apli-carac-container'>
                            <div className='taninos-header-apli-container'>
                                <p className='taninos-header-apli-carac-title'>{langText.tannins.header.applications.title[lang]}</p>
                                <ul>
                                    <li>{langText.tannins.header.applications.industry[lang]}, 
                                    <span className='block'>{langText.tannins.header.applications.name[lang]}</span>
                                    
                                    </li>
                                </ul>
                                <p className='taninos-header-apli-definition'>{langText.tannins.header.applications.text[lang]}</p>
                            </div>
                            <div className='taninos-header-carac-container'>
                                <p className='taninos-header-apli-carac-title'>{langText.tannins.header.characteristics.title[lang]}</p>
                                <ul>
                                    <li className='taninos-header-carac-li'>
                                        <p>{langText.tannins.header.characteristics.botanic.title[lang]}</p>
                                        <p className='italic'>{langText.tannins.header.characteristics.botanic.name[lang]}</p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <img className='taninos-header-img' src={taninosHeaderImg} alt="Extracto de uva" />

                    </div>
                </div>
            </>
        )
    }

    const renderProductosCardPolvo = () => {
        return(
            <>
                <div>
                    <p>{langText.tannins.products.powder.title[lang]}</p>
                    <img className='tanin fit-cover' src={taninosProductoImg} alt="Polvo" />
                    <div>
                        <p>VINUPEP P</p>
                        <div className='producto-div taninos-productos-carac'>
                            <p>{langText.tannins.products.powder.text[lang]}</p>
                            <ul>
                                <li>
                                    <p>{langText.tannins.products.powder.tannins[lang]}</p>
                                    <p>&gt; 65 %</p>
                                </li>
                                <li>
                                    <p>{langText.tannins.products.powder.ashes[lang]}</p>
                                    <p>&lt; 4 %</p>
                                </li>
                                <li>
                                    <p>{langText.tannins.products.powder.iron[lang]}</p>
                                    <p>&lt; 50 ppm</p>
                                </li>
                                <li>
                                    <p>{langText.tannins.products.powder.moisture[lang]}</p>
                                    <p>&lt; 7 %</p>
                                </li>
                                <li>
                                    <p>{langText.tannins.products.powder.packaging.title[lang]}</p>
                                    <ul>
                                        <li>{langText.tannins.products.powder.packaging.text[lang]}</li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </>
        )
    }
    const renderProductos = () => {
        return(
            <>
                <div className="taninos-productos-container">
                    <h4>{langText.tannins.products.title[lang]}</h4>
                    <div>
                        {renderProductosCardPolvo()}
                    </div>
                </div>
            </>
        )
    }

    const key_tanin_esp = 'taninos, taninos de uva'
    const key_tanin_eng = 'tannins, grape tannins'
    const key_tanin = key_tanin_eng + ', ' + key_tanin_esp



    return(
        <>
            <Head keywordsPage={key_tanin} pageTitle={langText.head.tannins[lang]} description='Taninos de uva - grape tannins'/>
            <Layout>
                {renderTaninosHeader()}

                {renderProductos()}

                <TextCentered width='925px' margin='60px'>{langText.tannins.centered[lang]}</TextCentered>
                <Button style='red-button' width='270' goTo='/contacto'>{langText.tannins.button[lang]}</Button>

                {/* <Suspense fallback={<Loading/>}> */}
                    <EntornoNatural type='taninos' width={screenWidth} />
                {/* </Suspense> */}

                <Button style='red-button' width='270' goTo='/sobre-nosotros/valores'>{langText.where.button[lang]}</Button>
            </Layout>
            {/* <Navbar width='214px' />


            <Footer /> */}

        </>
    )
}
export default Taninos