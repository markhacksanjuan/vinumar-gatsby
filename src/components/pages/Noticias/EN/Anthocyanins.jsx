import React from 'react'
import Head from '../../../Head/Head'
import LayoutNews from '../../../Layout/LayoutNews'
import Button from '../../../button/Button'

import semillaImg from '../../../../images/DEF/productos/semillas/BL8A9285.jpg'

import '../../../../styles/pages/extractos-semillas.css'
import '../../../../styles/pages/news/news-pages.css'
import '../../../../styles/pages/news/news-mediaQueries.css'

const Anthocyanins = ({ location }) => {
    const renderExtractos = () => {
        return (
            <>
                <div className='news-page-header'>
                    <div className='news-page-header-title'>
                        <h1 className='news-page-h1'>What are anthocyanins?</h1>
                        <p><b>Anthocyanins are natural substances found in certain plants in nature.</b>
                        They are polyphenols belonging to the flavonoids family, responsible for providing red, violet and blue tones to flowers, leaves or fruits of plants, as well as to any product containing them. The clearest example is red wine, whose colour is due to the presence of anthocyanins in the red grapes from which it is made.
                        <span className="parrafo"><b>The extraction of anthocyanins allows the production of a 100% natural colouring which can be found on the approved additives and E numbers list under the reference E163 Anthocyanins.</b></span>
                        <span className="parrafo">One of the most widely used fruits for obtaining anthocyanins is the red grape Vitis Vinifera. Through an aqueous extraction of the skin of red grapes we obtain this natural colouring called grape skin extract or enocyanin.</span>
                        <span className="parrafo">The presence of anthocyanins highlights the power of enocyanin as these substances are well known for their multiple healthy properties. Therefore, the user of enocyanin is not only getting a natural colouring but also an important added value.</span></p>
                    </div>
                    <div className='news-page-header-apli-carac-img-container'>
                        <div className='news-page-header-apli-carac-container'>
                            <div className='news-page-header-apli-container'>
                                <h2 className='news-page-h2'>At Vinumar, we are specialist on anthocyanins extraction.</h2>
                                <p><b>At Vinumar we are specialists in the extraction of anthocyanins.</b> Our experience, together with our strong investment in high performance equipment, allows us to offer great flexibility, being able to adapt our production of anthocyanins to our customers' needs.
                                <span className="parrafo">Furthermore, we are located in one of the world's main grape-producing areas, so access to the raw material is guaranteed. This proximity also allows us to process the raw material immediately, maintaining its properties and obtaining a pure product, of high quality.</span>
                                </p>
                            </div>
                            <div className='news-page-header-carac-container'>
                                <h2 className='news-page-h2'>What are the applications of anthocyanins?</h2>
                                <p>Anthocyanins, in the form of natural colouring E-163, have a multitude of applications, but it is in the food and beverage industry where its use is most widespread. Grape skin extract is widely used in the formulation of liqueurs and beverages, providing the characteristic colour of red grapes. Its use is also very popular in the elaboration of ice creams, confectionery, pastries or even jams.
                                    <span className="parrafo">Vinumar offers grape skin extract in both liquid format (VINUPER) and powder format (VINUCAP) in several forms of packaging.</span>
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
            <Head pageTitle='Grape Anthocyanins - Vinumar' description='At Vinumar we are specialists in grape anthocyanins for various applications. More than 60 years of experience. Contact us.' />
            <LayoutNews pageLocation={location}>
                {renderExtractos()}
                {/* <div className='news-page-button'>
                    <Button style='red-button' width='270px' goTo='/producto/extracto-de-semilla-de-uva'>MÁS INFORMACIÓN</Button>
                </div> */}
            </LayoutNews>
        </>
    )
}
export default Anthocyanins