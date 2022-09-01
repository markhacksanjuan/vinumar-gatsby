import React from 'react'
import { useSiteMetadata } from '../../hook/useSiteMetadata'

const SEO = ({ title, description, pathname, children, pageTitle }) => {
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
            {renderTitle()}
            <meta name='description' content={seo.description} />
        </>
    )

}
export default SEO