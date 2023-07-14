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
                        <h1 className='news-page-h1'>What is white wine concentrate?</h1>
                        <p><b>White wine concentrate is a natural substance obtained from the concentration of white wines previously selected and conveniently dealcoholised. </b>
                        Also known as wine extract, it is an aromatic ingredient highly appreciated in the food industry for its organoleptic qualities.
                        <span className="parrafo"></span>
                        <span className="parrafo"></span>
                        <span className="parrafo"></span></p>
                    </div>
                    <div className='news-page-header-apli-carac-img-container'>
                        <div className='news-page-header-apli-carac-container'>
                            <div className='news-page-header-apli-container'>
                                <h2 className='news-page-h2'>At Vinumar, we are specialist on white wine concentrate.</h2>
                                <p><b>At Vinumar we are specialist on the manufacture of white wine concentrate.</b> The experience together with the big investment in high performance equipment provide us a great flexibility, being able to adapt our wine extract productions to the different needs of our customers. 
                                <span className="parrafo">We are also located in one of the largest grape production areas in the world which guarantees us a complete access to the raw material. This strategic location also gives us the opportunity to process the raw material immediately, keeping their properties and getting a high pureness and quality product.</span>
                                </p>
                            </div>
                            <div className='news-page-header-carac-container'>
                                <h2 className='news-page-h2'>What are the applications of white wine concentrate? </h2>
                                <p><b>White wine concentrate can be used in different applications, but it is in the food and beverage industry where its use is most widespread.</b> Wine extracts are widely used as culinary bases in the preparation of sauces, marinades, or ready meals. It is also used in the formulation of beverages.
                                    <span className="parrafo">Vinumar offers red and white wine concentrate under the commercial brand VINUWINE.</span>
                                </p>
                            </div>
                            <div className='news-page-button'>
                                <Button style='red-button' width='270px' goTo='/en/product/wine-extracts'>FIND OUT MORE</Button>
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
            <Head pageTitle='White Wine Concentrate - Vinumar' description='At Vinumar we are white wine concentrate suppliers with more than 60 years of experience. Experts in white wine concentrate. Contact us.' />
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