import React, { useEffect, useState } from 'react'
import { navigate } from 'gatsby'
import Layout from '../../Layout/Layout'
import Head from '../../Head/Head'

// STYLES
import '../../../styles/index.css'
import '../../../styles/pages/index-page.css'
import '../../../styles/pages/mediaQueries/index-page-media.css'
import '../../../styles/pages/news/news-index.css'

import { langText } from '../../../lang'
import { useLang } from '../../../hook/useLang'

import antocianina from '../../../images/DEF/BL8A4185.jpg'
import extract from '../../../images/DEF/BL8A9509_2.jpg'

import { createNews } from '../../../helpers/createNews'


const NoticiasIndex = ({
    location
}) => {
    const lang = useLang(location)
    const [news, setNews] = useState()

    useEffect(( )=> {
        console.log(lang)
        setNews(createNews(lang))

    }, [])

    const onClick = link => {
        navigate(link)
    }

    const renderHeader = () => {
        return (
            <>
                <div className='index-container-header opacity-100 news-index-container-header'>
                    <div className='index-container-header-h2 opacity-100'>
                        <h1 className='index-h2 opacity-100'>{langText.news.index[lang]}</h1>
                    </div>
                </div>
            </>
        )
    }

    const ProductoCard = ({ title, text, image, link }) => {
        return (
            <>
                <div className='news-index-container-text-card opacity-100 box-shadow' onClick={() => onClick(link)}>
                    <div>
                        <p className='news-index-title'><b><a className='index-link' href={link}>{title}</a></b></p>
                        <p className='news-index-desc'>{text}</p>
                    </div>
                    <img className='index-card-img opacity-100' src={image} alt={title} />
                </div>
            </>
        )
    }
    const renderProductos = () => {
        return (
            <>
                <div id='productos' className='news-index-container-products opacity-100'>
                    <h1>Noticias</h1>
                        <div className='news-index-card opacity-100'>
                            {/* <ProductoCard 
                                title='¿Qué es el OPC de uva?'
                                text='El OPC (procianidinas oligoméricas) es como comúnmente se conocen a los extractos de semillas de uva, los cuales son compuestos fenólicos que se encuentran en las semillas de las uvas blancas (Vitis Vinifera). '
                                image={antocianina}
                            /> */}
                            {news && news.map(item => {
                                return (
                                    <>
                                        <ProductoCard 
                                            title={item.title}
                                            text={item.text}
                                            image={item.image}
                                            link={item.link}
                                        />
                                    </>
                                )
                            })}
                            {/* <ProductoCard 
                                title='¿Qué es el extracto de uva?'
                                text='Los extractos de semillas de uva son compuestos fenólicos que se encuentran en las semillas de las uvas blancas (Vitis Vinifera).'
                                image={extract}
                            /> */}
                        </div>
                </div>
            </>
        )
    }
    return (
        <>
            <Head />
            <Layout pageLocation={location}>
                <div className='index-container opacity-100'>
                    {renderHeader()}
                    {renderProductos()}
                </div>
            </Layout>
        </>
    )
}
export default NoticiasIndex