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
                        <h1 className='news-page-h1'>Vinumar: the importance of experience in natural food colors manufacturers. </h1>
                        <p><b>Vinumar stands out in the production of grape skin extract E163 among natural food colors manufacturers.</b>
                        We are specialists in the production of grape skin extracts or enocyanin. Our experience, together with our strong investment in high performance equipment, allows us to offer great flexibility, being able to adapt our production of grape skin extracts to our customers' needs.
                        <span className="parrafo">Furthermore, we are located in one of the world's main grape-producing areas, so access to the raw material is guaranteed. This proximity also allows us to process the raw material immediately, maintaining its properties and obtaining a pure product, of high quality.</span>
                        <span className="parrafo"></span>
                        <span className="parrafo"></span></p>
                    </div>
                    <div className='news-page-header-apli-carac-img-container'>
                        <div className='news-page-header-apli-carac-container'>
                            <div className='news-page-header-apli-container'>
                                <h2 className='news-page-h2'>What are grape skin extracts made by natural food colors manufacturers?</h2>
                                <p><b>Grape skin extracts, also known as enocyanin, is a 100% natural colouring, coming from the skin of the red grapes Vitis Vinifera.</b>  Through an aqueous extraction we obtain the main component of this product, which is anthocyanins, a substance belonging to the polyphenol family, responsible for providing the blue, purple and red shades. These pigments can be found on the approved additives and E numbers list under the reference E163 Anthocyanins. 
                                <span className="parrafo">The presence of anthocyanins highlights the power of grape skin extracts as these substances are well known for their multiple healthy properties. Therefore, the user of enocyanin is not only getting a natural colouring but also an important added value.</span>
                                </p>
                            </div>
                            <div className='news-page-header-carac-container'>
                                <h2 className='news-page-h2'>What are the applications of grape skin extracts made by natural food colors manufacturers?</h2>
                                <p>Grape skin extracts have a multitude of applications, but it is in the food and beverage industry where its use is most widespread. Grape skin extract is widely used in the formulation of liqueurs and beverages, providing the characteristic colour of red grapes. Its use is also very popular in the elaboration of ice creams, confectionery, pastries or even jams.
                                    <span className="parrafo">Vinumar offers grape skin extracts in both liquid format (VINUPER) and powder format (VINUCAP) in several forms of packaging.</span>
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
            <Head pageTitle='Natural food colors manufacturers - Vinumar' description='At Vinumar we are natural food colors manufacturers with more than 60 years of experience. Experts in natural food colors. Contact us.' />
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