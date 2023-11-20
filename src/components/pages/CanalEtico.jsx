import React, { useContext, useEffect, useState} from 'react'
import Layout from '../Layout/Layout'
import Head from '../Head/Head'

import '../../styles/pages/ethic.css'

import { LangDispatchContext, LangStateContext} from '../GlobalContextProvider/GlobalContextProvider'
import { langText } from '../../lang'
import { historyState } from '../../helpers/historyState'

import { useLang } from '../../hook/useLang'


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
                                <a className='ethic-link' target='_blank' href="https://www.sofidya.com/aceitesvinosyalcoholessa/canal-denuncias-internas">{langText.ethic.link[lang]}</a>

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