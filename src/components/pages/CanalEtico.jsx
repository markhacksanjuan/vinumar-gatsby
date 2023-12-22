import React, { useContext, useEffect, useState} from 'react'
import Layout from '../Layout/Layout'
import Head from '../Head/Head'

import '../../styles/pages/ethic.css'
import '../../styles/pages/mediaQueries/ethics-media.css'

import { LangDispatchContext, LangStateContext} from '../GlobalContextProvider/GlobalContextProvider'
import { langText } from '../../lang'
import { historyState } from '../../helpers/historyState'

import { useLang } from '../../hook/useLang'

import qrCode from '../../images/qrcode.png'


const CanalEtico = ({
    location
}) => {

    const lang = useLang(location)
    useEffect(() => {

    }, [])

    const renderHeader = () => {
        return(
            <>
                <div className="recursos-recursos-container">
                    <div>
                        <h4>{langText.ethic.title[lang]}</h4>
                        <div className='ethic-link-container'>
                            <p className='ethic-text'>
                                {langText.ethic.description[lang]}
                                <br/>
                            </p>
                            <a className='ethic-link' target='_blank' href="https://bfef6082fa25db8b9586.canal.h2c.app/form.html">{langText.ethic.link[lang]}</a>
                            <div className='qr-container'>
                                <img className='qr-code' src={qrCode} alt="QR Code" />
                                <iframe allowtransparency="true" style={{backgroundColor: 'transparent'}} name="form-complaint" src="https://bfef6082fa25db8b9586.canal.h2c.app/form.html" frameborder="0" border="0" width="100%" height='100%'></iframe>
                            </div>
                        </div>
                    </div>
                    <div className='recursos-recursos-tecnicos ethic-list-container'>
                        <p>{langText.ethic.also.title[lang]}</p>
                        <div className='ethic-list'>
                            <ul className='circle'>
                                <li>{langText.ethic.also.presencial[lang]}</li>
                                <li>{langText.ethic.also.phone[lang]}</li>
                                <li>{langText.ethic.also.mail[lang]}</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </>
        )
    }
    return (
        <>
            <Head pageTitle={langText.ethic.title[lang]} />
            <Layout pageLocation={location}>
                {renderHeader()}
            </Layout>
        </>
    )
}
export default CanalEtico