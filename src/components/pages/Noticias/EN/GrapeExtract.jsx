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
                        <h1 className='news-page-h1'>Vinumar: the importance of experience in grape extract suppliers.</h1>
                        <p><b>Vinumar is one of the world's leading suppliers of grape extract. We are specialists in the production of grape seed extract or OPC.</b>
                        Our experience, together with our strong investment in high performance equipment, allow us to offer great flexibility, being able to adapt our production of grape seed extract to our customers' needs.
                        <span className="parrafo">Furthermore, we are located in one of the world's main grape-producing areas, so access to the raw material is guaranteed. This proximity also allows us to process the raw material immediately, maintaining its properties and obtaining a pure product, of high quality.</span>
                        <span className="parrafo"></span>
                        <span className="parrafo"></span></p>
                    </div>
                    <div className='news-page-header-apli-carac-img-container'>
                        <div className='news-page-header-apli-carac-container'>
                            <div className='news-page-header-apli-container'>
                                <h2 className='news-page-h2'>What is grape seed extract?</h2>
                                <p><b>Grape seed extract is a phenolic compound found in the seeds of white grapes (Vitis Vinifera).</b> Oligomeric proanthocyanidins (also known by the acronym OPC), are one of the main compounds found in grape seed extract, and they are one of the most powerful natural antioxidants in existence.
                                <span className="parrafo">Proanthocyanidins are polyphenols belonging to the flavonoids family. Due to their effectiveness in combating the molecules responsible for damaging human metabolism (the so-called free radicals), these phenolic compounds are increasingly in demand in different industries as they offer a significant added value for their consumers, whether in human or animal nutrition.</span>
                                <span className="parrafo">These polyphenols, obtained through the aqueous extraction of selected white grape seeds, make grape seed extract a natural ingredient which is currently highly valued for its health-promoting properties.</span>
                                </p>
                            </div>
                            <div className='news-page-header-carac-container'>
                                <h2 className='news-page-h2'>What are the applications of grape seed extract?</h2>
                                <p>The efficacy of polyphenols in grape seed extract has been demonstrated in several scientific studies, having a high antioxidant power. For this reason, the main application of grape seed extract is in the food and nutraceutical industry as an ingredient in the production of functional foods and beverages and food supplements.
                                    <span className="parrafo">Vinumar offers grape seed extract in powder format (VINUOPC) packed in vacuum sealed aluminium bags of 25 Kg.</span>
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
            <Head pageTitle='Grape seed extract suppliers - Vinumar' description='At Vinumar we are grape seed extract suppliers with more than 60 years of experience. Experts in grape seed extracts. Contact us.' />
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