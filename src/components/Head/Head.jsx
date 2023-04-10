import React from 'react'
import { Helmet } from 'react-helmet'
import { useSiteMetadata } from '../../hook/useSiteMetadata'

import favicon from '../../images/favicon/favicon.ico'

const Head = ({ title, description, pathname, children, pageTitle, keywordsPage }) => {
    const {
        title: defaultTitle,
        // description: defaultDescription,
        siteUrl
    } = useSiteMetadata()
    const defaultDescription = 'Página oficial de VINUMAR, AVIALSA: Polifenoles, orujo de uva, compuestos fenólicos, extracto de uva, productos derivados de la uva - polyphenols, grapre marc, phenolic compounds, grape extract, products derived from grape'
    const seo = {
        title: title || defaultTitle,
        description: description || defaultDescription
    }

    const renderTitle = () => {
        if(pageTitle) {
            return (
                <>
                        <title>{seo.title} - {pageTitle}</title>
                </>
            )
        }else {
            <>
                    <title>{seo.title}</title>
            </>
        }
    }

    const keyword_esp = 'polifenoles, orujo de uva, vinumar, avialsa, compuestos fenolicos, productos derivados uva, extracto uva'
    const keyword_eng = 'polyphenols, grape marc, phenolic compounds, products derived from grape, grape extract'
    const keywords_general = keyword_esp + ', ' + keyword_eng

    let keywords
    if(keywordsPage) {
        keywords = keywords_general + ', ' + keywordsPage
    }else {
        keywords = keywords_general
    }

    return (
        <>
            <Helmet>
                {/* {renderTitle()} */}
                {pageTitle ? <title>{seo.title} - {pageTitle}</title> : <title>{seo.title}</title>}
                <meta name='description' content={seo.description} />
                <meta name='keywords' content={keywords} />
                <meta name='robots' content='index, follow' />
                <meta name='copyright' content='Vinumar' />
                <link rel='icon' href={favicon} />
                <link rel='canonical' href='https://vinumar.es' /> 
                <meta name='icon' href={favicon} />
            </Helmet>
        </>
    )

}
export default Head