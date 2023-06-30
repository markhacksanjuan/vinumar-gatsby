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
                        <h1 className='news-page-h1'>Vinumar: the importance of experience in polyphenols suppliers.</h1>
                        <p><b>Vinumar is one of the world's leading suppliers of grape polyphenols. We are specialists in the extraction of grape polyphenols.</b>
                        Vinumar is one of the world's leading suppliers of grape polyphenols. We are specialists in the extraction of grape polyphenols. Our experience, together with our strong investment in high performance equipment, allows us to offer great flexibility, being able to adapt our production of polyphenols to our customers' needs.
                        <span className="parrafo">Furthermore, we are located in one of the world's main grape-producing areas, so access to the raw material is guaranteed. This proximity also allows us to process the raw material immediately, maintaining its properties and obtaining a pure product, of high quality.</span>
                        <span className="parrafo"></span>
                        <span className="parrafo"></span></p>
                    </div>
                    <div className='news-page-header-apli-carac-img-container'>
                        <div className='news-page-header-apli-carac-container'>
                            <div className='news-page-header-apli-container'>
                                <h2 className='news-page-h2'>What are grape polyphenols?</h2>
                                <p><b>Polyphenols are antioxidant substances found in the composition of plants. There are thousands of different phenolic compounds in nature, and they can be classified into two main groups: flavonoids and non-flavonoids.</b>
                                Polyphenols are antioxidant substances found in the composition of plants. There are thousands of different phenolic compounds in nature, and they can be classified into two main groups: flavonoids and non-flavonoids. Within the flavonoid group, there are several subgroups, such as anthocyanins, flavones, flavonols and chalcones. The non-flavonoid group includes other phenolic compounds such as phenolic acids, stilbenes (resveratrol) and lignins. There is also another group of polyphenols consisting of three or more phenolic subunits called tannins.
                                <span className="parrafo">Grape polyphenols are mainly found in the solid parts of the grape, with a high concentration in the skin and seeds of grapes. Procyanidins and anthocyanins are probably the most important grape polyphenols. Procyanidins are oligomeric compounds present in grape seeds, and anthocyanins are only located in the skin of red grapes, and they are responsible for providing the red pigment characteristic of red wines.</span>
                                <span className="parrafo">Grape polyphenols from Vitis Vinifera are one of the most powerful natural antioxidants in existence. Due to their effectiveness in combating the molecules responsible for damaging human metabolism (the so-called free radicals), these phenolic compounds are increasingly in demand in different industries as they offer a significant added value for their consumers, whether in human or animal nutrition.</span>
                                </p>
                            </div>
                            <div className='news-page-header-carac-container'>
                                <h2 className='news-page-h2'>Grape polyphenols manufactured by Vinumar and their applications.</h2>
                                <p>Our purpose is to obtain the maximum quality from an exceptional fruit: the grape. We use the knowledge acquired in our more than 60 years of experience, carrying out different production techniques that allow us to extract the polyphenols existing in the grape to produce 100% natural ingredients. Below you can find a summary of the grape polyphenol products offered by Vinumar.
                                    <span className="parrafo">
                                        <ul>
                                            <li><b>Grape skin extract E-163:</b> Grape skin extracts, also known as enocyanin, is a 100% natural colouring, coming from the skin of the red grapes Vitis Vinifera.  Through an aqueous extraction we obtain the main component of this product, which is anthocyanins, a substance belonging to the polyphenol family, responsible for providing the blue, purple and red shades. These pigments can be found on the approved additives and E numbers list under the reference E163 Anthocyanins. Grape skin extract is widely used in the formulation of liqueurs and beverages, providing the characteristic colour of red grapes. Its use is also very popular in the elaboration of ice creams, confectionery, pastries or even jams.</li>
                                            <li><b>Grape seed extract:</b> Grape seed extract is a phenolic compound found in the seeds of white grapes (Vitis Vinifera). Oligomeric proanthocyanidins (also known by the acronym OPC), are one of the main compounds found in grape seed extract. They are polyphenols belonging to the flavonoids family and they are one of the most powerful natural antioxidants in existence, combating the molecules responsible for damaging human metabolism (the so-called free radicals). This is the reason why they are used in the food and nutraceutical industry as an ingredient in the production of functional foods and beverages and food supplements.</li>
                                            <li><b>Grape tannins:</b>Grape tannins: Grape tannins are natural phenolic compounds found in different parts of the vine and its fruit. A particular importance is given to those tannins concentrated in the skin and seeds of the grape Vitis Vinifera. These polyphenols are obtained through aqueous extraction of the skin and seeds of white grapes. Grape tannins have an oenological use, reinforcing the characteristics and preservation of a wine, providing the natural polyphenols necessary to give it different organoleptic qualities during vinification, acting on its colour, structure, astringency and bitterness.</li>
                                            <li><b>Wine extracts:</b>Wine extracts: Wine extracts are natural substances obtained from the concentration of red and white wines previously selected and conveniently dealcoholised. Due to their organoleptic qualities, they are widely used as culinary bases in the preparation of sauces, marinades, or ready meals, offering a high added gastronomic value. They are also used in the formulation of beverages.</li>
                                            <li><b>Polyphenols for animal nutrition:</b>Polyphenols for animal nutrition: Grape extracts with a guaranteed content in polyphenols. They are used in the feed industry for their high antioxidant power, which makes them a perfect substitute for vitamin E.</li>
                                        </ul>
                                    </span>
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
            <Head pageTitle='Polyphenols suppliers - Vinumar' description='At Vinumar we are polyphenols suppliers with more than 60 years of experience. Experts in polyphenols. Contact us.' />
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