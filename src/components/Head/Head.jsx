import React from 'react'
import { Helmet } from 'react-helmet'
import { useSiteMetadata } from '../../hook/useSiteMetadata'

const Head = ({ title, description, pathname, children, pageTitle }) => {
    const {
        title: defaultTitle,
        description: defaultDescription,
        siteUrl
    } = useSiteMetadata()
    const seo = {
        title: title || defaultTitle,
        description: description || defaultDescription
    }

    const renderTitle = () => {
        console.log(pageTitle)
        console.log(seo.title)
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

    return (
        <>
            <Helmet>
                {/* {renderTitle()} */}
                {pageTitle ? <title>{seo.title} - {pageTitle}</title> : <title>{seo.title}</title>}
                <meta name='description' content={seo.description} />
            </Helmet>
        </>
    )

}
export default Head