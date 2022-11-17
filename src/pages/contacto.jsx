import React, { useContext, useEffect, useState } from 'react'
import { navigate } from 'gatsby'
import { useForm } from 'react-hook-form'
import Navbar from '../components/navbarIndex/NavbarIndex'
import Footer from '../components/footer/Footer'
import Layout from '../components/Layout/Layout'
import Gmap from '../components/gmap/Gmap'
import Button from '../components/button/Button'
import Head from '../components/Head/Head'

import '../styles/pages/contacto.css'
import '../styles/pages/mediaQueries/contacto-media.css'

import { LangStateContext, LangDispatchContext } from '../components/GlobalContextProvider/GlobalContextProvider'
import { langText } from '../lang'
import { historyState } from '../helpers/historyState'

const ContactoPage = (props) => {
    const { lang } = useContext(LangStateContext)
    const dispatch = useContext(LangDispatchContext)
    const [open, setOpen] = useState(false)
    const [error, setError] = useState(false)

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
                    <div className='alert-container'>
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
        console.log('onSubmit')
        console.log(data)
        if(data.rgpd){
            // try{
            //     const response = await fetch('https://angry-mccarthy.217-160-209-206.plesk.page/contact', {
            //         method: 'POST',
            //         mode: 'cors',
            //         headers: {
            //             'Access-Control-Allow-Origin': '*'
            //         },
            //         body: new URLSearchParams(data)
            //     })
            //     console.log(response)
            //     if(response.status === 200) {
                setOpen(true)
            //     }
            // }catch(err) {
            //     console.error(err)
            // }
        }else {
            setError(true)
        }
        reset()
        // navigate('/')
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
                            <p>ctra. Munera, 5<br/>02600 Villarrobledo Albacete, {langText.contact.spain[lang]}</p>
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
            <Head pageTitle={langText.head.contact[lang]}/>
            <Layout>
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