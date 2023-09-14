import React from 'react'
import Head from '../../../Head/Head'
import LayoutNews from '../../../Layout/LayoutNews'
import Button from '../../../button/Button'

import semillaImg from '../../../../images/NEWS/Imagen 14.jpg'

import '../../../../styles/pages/extractos-semillas.css'
import '../../../../styles/pages/news/news-pages.css'
import '../../../../styles/pages/news/news-mediaQueries.css'

const Enocyanin = ({ location }) => {
    const renderExtractos = () => {
        return (
            <>
                <div className='news-page-header'>
                    <div className='news-page-header-title'>
                        <h1 className='news-page-h1'>What are grape tannins?</h1>
                        <p>In general, tannins are natural phenolic compounds found in trees and plants, as well as in their fruits. They have a characteristic smell and taste, predominating bitterness and astringency.
                    
                        <span className="parrafo"><b>Specifically, grape tannins are natural phenolic compounds found in different parts of the vine and its fruit.</b> A particular importance is given to those tannins concentrated in the skin and seeds of the grape <i>Vitis Vinifera</i>. These polyphenols are obtained through aqueous extraction of the skin and seeds of white grapes.</span>
                        <span className="parrafo">Grape tannins have astringent, anti-inflammatory and antioxidant properties, making them a highly appreciated natural additive, and providing the products containing them added value. </span>
                        <span className="parrafo"></span></p>
                    </div>
                    <div className='news-page-header-apli-carac-img-container'>
                        <div className='news-page-header-apli-carac-container'>
                            <div className='news-page-header-apli-container'>
                                <h2 className='news-page-h2'>At Vinumar, we are specialist on grape tannins.</h2>
                                <p><b>At Vinumar we are specialist in the manufacture of grape tannins.</b> The experience together with the big investment in high performance equipment provide us a great flexibility, being able to adapt our grape tannins productions to the different needs of our customers. 
                                <span className="parrafo">We are also located in one of the largest grape production areas in the world which guarantees us a complete access to the raw material. This strategic location also gives us the opportunity to process the raw material immediately, keeping their properties and getting a high pureness and quality product.</span>
                                </p>
                            </div>
                            <div className='news-page-header-carac-container'>
                                <h2 className='news-page-h2'>What are the applications of grape tannins?</h2>
                                <p>While it is true that tannins were originally used for tanning animal hides (which is still the case), the main use of tannin today is in the food industry, specifically in winemaking (oenological use).
                                    <span className="parrafo">Both grape skin and grape seeds tannins give the wine different organoleptic qualities, providing astringency and bitterness, as well as acting on its colour and structure, playing a very important role in the ageing of the wine.</span>
                                    <span className="parrafo">Vinumar offer both condensed tannins of low molecular weight extracted from selected white grape seeds (VINUPEP) and condensed tannins of high molecular weight extracted from selected white grape skin (VINUPEB). Both of them are offered in powder format and packed in vacuum-sealed aluminium bags of 25 Kg. </span>
                                </p>
                            </div>
                            <div className='news-page-button'>
                                <Button style='red-button' width='270px' goTo='/en/product/grape-tannins'>FIND OUT MORE</Button>
                            </div>
                        </div>
                        <img className='news-semilla-header-img' src={semillaImg} alt="Semilla uva" />
                    </div>
                </div>
            </>
        )
    }
    return (
        <>
            <Head pageTitle='Grape tannins - Vinumar' description='At Vinumar we are grape tannins suppliers with more than 60 years of experience. Experts in grape tannins. Contact us.' />
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