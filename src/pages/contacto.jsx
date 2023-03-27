import React, { useContext, useEffect, useState } from 'react'
import { navigate, graphql } from 'gatsby'
import { useForm } from 'react-hook-form'
import Layout from '../components/Layout/Layout'
import Gmap from '../components/gmap/Gmap'
import Button from '../components/button/Button'
import Head from '../components/Head/Head'
import Loading from '../components/Loading/Loading'
import { useTranslation } from 'gatsby-plugin-react-i18next'

import '../styles/pages/contacto.css'
import '../styles/pages/mediaQueries/contacto-media.css'

import { LangStateContext, LangDispatchContext } from '../components/GlobalContextProvider/GlobalContextProvider'
import { langText } from '../lang'
import { historyState } from '../helpers/historyState'

// const Gmap = React.lazy(() => import('../components/gmap/Gmap'))

const ContactoPage = (props) => {
    const { t } = useTranslation()
    const { lang } = useContext(LangStateContext)
    const dispatch = useContext(LangDispatchContext)
    const [open, setOpen] = useState(false)
    const [error, setError] = useState(false)
    const [loading, setLoading] = useState(false)

    const { handleSubmit, register, reset } = useForm({})

    useEffect(() =>{
        historyState(window.location.state, dispatch)
    }, [])
    // useEffect(() => {
    //     if(typeof window !== 'undefined'){
    //         if(lang === 'en'){
    //             window.history.pushState({}, '', '/contact')
    //         }else {
    //             window.history.pushState({}, '', props.uri)
    //         }
    //     }
    // }, [lang])
    const renderLoading = () => {
        return (
            <>
                <div className='alert-background'>
                    <div className='alert-container loading-container'>
                        <Loading />
                    </div>
                </div>
            </>
        )
    }
    const renderAlert = () => {
        return (
            <>
                <div onClick={e => onClose(e)} className='alert-background'>
                    <div className='alert-container'>
                        <span onClick={e => onClose(e)} className='alert-close'>&times;</span>
                        <h4 className='alert-title'>{langText.alert.messageSuccess.title[lang]}</h4>
                        <p className='alert-message'>{langText.alert.messageSuccess.message[lang]}</p>
                    </div>
                </div>
            </>
        )
    }
    const renderError = () => {
        return (
            <>
                <div onClick={e => onClose(e)} className='alert-background'>
                    <div className='alert-container-error'>
                        <span onClick={e => onClose(e)} className='alert-close'>&times;</span>
                        <p className='alert-message'>{langText.alert.messageError[lang]}</p>
                    </div>
                </div>
            </>
        )
    }
    const onClose = (e) => {
        if(e.target.className === 'alert-background'){
            setOpen(false)
            setError(false)
        }else if(e.target.className === 'alert-close') {
            setOpen(false)
            setError(false)
        }
    }

    const onSubmit = async (data) => {
        setLoading(true)
        if(data.rgpd){
            try{
                const response = await fetch('https://angry-mccarthy.217-160-209-206.plesk.page/contact', {
                    method: 'POST',
                    mode: 'cors',
                    headers: {
                        'Access-Control-Allow-Origin': '*'
                    },
                    body: new URLSearchParams(data)
                })
                console.log(response)
                if(response.status === 200) {
                    setLoading(false)
                    setOpen(true)
                }
            }catch(err) {
                console.error(err)
            }
            reset()
        }else {
            setError(true)
            setLoading(false)
        }
    }

    const renderForm = () => {
        return(
            <>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <p>{t('formulario.titulo')}</p>
                    <input required {...register('name')} type="text" name='name' placeholder={t('formulario.nombre_apellidos')} />
                    <input required {...register('email')} type="email" name='email' placeholder={t('formulario.email')} />
                    <div>
                        <textarea required {...register('message')} name="message" id="mensaje" cols="48" rows="15" placeholder={t('formulario.mensaje')}></textarea>
                    </div>
                    <div id='checkbox' >
                        <div className='send-div'>
                            <input {...register('rgpd')} className='input-checkbox' type="checkbox" name='rgpd' />
                            <label for="rgpd">{t('formulario.acepto')}</label>
                        </div>
                        <Button type='submit' style='send-button'>{t('formulario.enviar')}</Button>
                    </div>
                </form>
            </>
        )
    }
    const renderContent = () => {
        return(
            <>
                <div className='contact-content-container'>
                    <div>
                        <h4>{t('titulo')}</h4>
                        {renderForm()}
                    </div>
                    <div >
                        <div className='contact-info'>
                            <p>ctra. Munera, 5<br/>02600 Villarrobledo Albacete, {t('pais')}</p>
                            <p>T +34 967141500<br/> F +34 967144111</p>
                            <p>vinumar@vinumar.es</p>
                        </div>
                        {/* <Suspense fallback={<Loading/>}> */}
                            <Gmap />
                        {/* </Suspense> */}

                    </div>

                </div>
            </>
        )
    }
    return(
        <>
            <Head pageTitle={langText.head.contact[lang]}/>
            <Layout>
                {loading && renderLoading()}
                {open && renderAlert()}
                {error && renderError()}
            {/* <Navbar width='214px' /> */}
                {renderContent()}
            </Layout>
            {/* <Footer /> */}
        </>
    )
}
export default ContactoPage

export const query = graphql`
    query ($language: String!) {
        locales: allLocale(filter: {ns: {in: ["common", "contacto"]}, language: {eq: $language}}) {
            edges {
                node {
                    ns
                    data
                    language
                }
            }
        }
    }
`