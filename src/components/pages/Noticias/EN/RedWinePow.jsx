import React from 'react'
import Head from '../../../Head/Head'
import LayoutNews from '../../../Layout/LayoutNews'
import Button from '../../../button/Button'

import semillaImg from '../../../../images/DEF/productos/semillas/BL8A9285.jpg'

import '../../../../styles/pages/extractos-semillas.css'
import '../../../../styles/pages/news/news-pages.css'
import '../../../../styles/pages/news/news-mediaQueries.css'

const Enocyanin = ({ location }) => {
    const renderExtractos = () => {
        return (
            <>
                <div className='news-page-header'>
                    <div className='news-page-header-title'>
                        <h1 className='news-page-h1'>What is red wine extract powder?</h1>
                        <p><b>Red wine extract powder is a natural substance obtained by dealcoholisation, vacuum concentration, filtration and spray drying of selected red wines.</b>
                        Also known as wine concentrate, it is an aromatic ingredient highly appreciated in the food industry for its organoleptic qualities.
                        <span className="parrafo"></span>
                        <span className="parrafo"></span>
                        <span className="parrafo"></span></p>
                    </div>
                    <div className='news-page-header-apli-carac-img-container'>
                        <div className='news-page-header-apli-carac-container'>
                            <div className='news-page-header-apli-container'>
                                <h2 className='news-page-h2'>At Vinumar, we are specialist on red wine extract powder.</h2>
                                <p><b>At Vinumar we are specialist on the manufacture of red wine extract powder.</b> The experience together with the big investment in high performance equipment provide us a great flexibility, being able to adapt our wine concentrate productions to the different needs of our customers. 
                                <span className="parrafo">We are also located in one of the largest grape production areas in the world which guarantees us a complete access to the raw material. This strategic location also gives us the opportunity to process the raw material immediately, keeping their properties and getting a high pureness and quality product.</span>
                                </p>
                            </div>
                            <div className='news-page-header-carac-container'>
                                <h2 className='news-page-h2'>What are the applications of red wine extract powder? </h2>
                                <p>Red wine extract powder can be used in different applications, but it is in the food and beverage industry where its use is most widespread. Wine extracts are widely used as culinary bases in the preparation of sauces, marinades, or ready meals. It is also used in the formulation of beverages.
                                    <span className="parrafo">Vinumar offers red and white wine extracts powder under the commercial brand VINUWINE, both packed in vacuum-sealed aluminium bags of 25 Kg.</span>
                                </p>
                            </div>
                            <div className='news-page-button'>
                                <Button style='red-button' width='270px' goTo='/producto/extracto-de-semilla-de-uva'>FIND OUT MORE</Button>
                            </div>
                        </div>
                        <img className='semilla-header-img' src={semillaImg} alt="Semilla uva" />
                    </div>
                </div>
            </>
        )
    }
    return (
        <>
            <Head pageTitle='Red Wine Extract Powder - Vinumar' description='At Vinumar we are red wine extract powder suppliers with more than 60 years of experience. Experts in red wine extract powder. Contact us.' />
            <LayoutNews pageLocation={location}>
                {renderExtractos()}
                {/* <div className='news-page-button'>
                    <Button style='red-button' width='270px' goTo='/producto/extracto-de-semilla-de-uva'>MÁS INFORMACIÓN</Button>
                </div> */}
            </LayoutNews>
        </>
    )
}
export default Enocyanin