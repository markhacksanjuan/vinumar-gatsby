import React, { useContext, useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import Layout from '../Layout/Layout'
import Gmap from '../gmap/Gmap'
import Button from '../button/Button'
import Head from '../Head/Head'
import Loading from '../Loading/Loading'

import '../../styles/pages/contacto.css'
import '../../styles/pages/mediaQueries/contacto-media.css'

import { LangStateContext, LangDispatchContext } from '../GlobalContextProvider/GlobalContextProvider'
import { langText } from '../../lang'
import { historyState } from '../../helpers/historyState'
import { usePrefix } from '../../hook/usePathname'
import { useLang } from '../../hook/useLang'

const ContactoPage = ({
    // lang,
    location
}) => {
    // const { lang } = useContext(LangStateContext)
    const dispatch = useContext(LangDispatchContext)
    const [open, setOpen] = useState(false)
    const [error, setError] = useState(false)
    const [loading, setLoading] = useState(false)
    const lang = useLang(location)

    const { handleSubmit, register, reset } = useForm({})

    useEffect(() =>{
        historyState(window.location.state, dispatch)
    }, [])

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
                if(response.status === 200) {
                    typeof window !== 'undefined' && window.gtag('event', 'formulario_contacto', {
                        title: 'web_vinumar'
                    })
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
                    <p>{langText.contact.form.title[lang]}</p>
                    <input required {...register('name')} type="text" name='name' placeholder={langText.contact.form.name[lang]} />
                    <input required {...register('email')} type="email" name='email' placeholder={langText.contact.form.email[lang]} />
                    <div>
                        <textarea required {...register('message')} name="message" id="mensaje" cols="48" rows="15" placeholder={langText.contact.form.message[lang]}></textarea>
                    </div>
                    <div id='checkbox' >
                        <div className='send-div'>
                            <input {...register('rgpd')} className='input-checkbox' type="checkbox" name='rgpd' />
                            <label for="rgpd">{langText.contact.form.accept[lang]}</label>
                        </div>
                        <Button type='submit' style='send-button'>{langText.contact.form.send[lang]}</Button>
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
                        <h4>{langText.contact.title[lang]}</h4>
                        {renderForm()}
                    </div>
                    <div >
                        <div className='contact-info'>
                            <p>ctra. Munera, 5<br/>02600 Villarrobledo Albacete, {langText.common.country[lang]}</p>
                            <p>T +34 967141500<br/> F +34 967144111</p>
                            <p>vinumar@vinumar.es</p>
                        </div>
                            <Gmap />

                    </div>

                </div>
            </>
        )
    }
    return(
        <>
            <Head pageTitle={langText.contact.title[lang]}/>
            <Layout pageLocation={location}>
                {loading && renderLoading()}
                {open && renderAlert()}
                {error && renderError()}
                {renderContent()}
            </Layout>
        </>
    )
}
export default ContactoPage