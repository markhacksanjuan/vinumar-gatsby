import opc from '../images/NEWS/Imagen 1.jpg'
import enocianina from '../images/NEWS/Imagen 3.jpg'
import extractoPiel from '../images/NEWS/Imagen 6.jpg'
import antocianinos from '../images/NEWS/Imagen 7.jpg'
import concentrado from '../images/NEWS/Imagen 9.jpg'
import polifenoles from '../images/NEWS/Imagen 12.jpg'
import taninos from '../images/NEWS/Imagen 13.jpg'
import redWine from '../images/NEWS/Imagen 17.jpg'
import redWinePow from '../images/NEWS/Imagen 10.jpg'
import whiteWine from '../images/NEWS/Imagen 16.jpg'

export function createNews(lang) { 
    const noticias = [
        {
            title: '¿Qué es el OPC de uva?',
            text: 'El OPC (procianidinas oligoméricas) es como comúnmente se conocen a los extractos de semillas de uva, los cuales son compuestos fenólicos que se encuentran en las semillas de las uvas blancas (Vitis Vinifera).',
            image: opc,
            link: '/opc-uva'
        },
        {
            title: '¿Qué son los antocianos?',
            text: 'Los antocianos (o antocianinas) son sustancias naturales que se encuentran en determinados vegetales de la naturaleza.',
            image: antocianinos,
            link: '/antocianos'
        },
        // {
        //     title: '¿Qué es el concentrado de vino?',
        //     text: 'El concentrado de vino es una sustancia natural que se obtiene de la concentración de vinos tintos y blancos',
        //     image: concentrado,
        //     link:'/concentrado-de-vino'
        // },
        {
            title: '¿Qué colorante es el E-163?',
            text: 'E-163 es el código que identifica a las “Antocianinas” dentro del listado de aditivos alimentarios.',
            image: enocianina,
            link: '/e-163'
        },
        {
            title: '¿Qué es la enocianina?',
            text: 'La enocianina se trata de un colorante 100% natural procedente de la uva Vitis Vinifera, concretamente de la piel de las uvas tintas.',
            image: enocianina,
            link: '/enocianina',
            style: {
                objectFit: 'none',
                objectPosition: 'center'
            },
            className: 'object-fit-none object-position-center'
        },
        {
            title: '¿Qué es el extracto de uva?',
            text: 'Los extractos de semillas de uva son compuestos fenólicos que se encuentran en las semillas de las uvas blancas (Vitis Vinifera).',
            image: opc,
            link: '/extracto-de-uva',
            style: {
                objectFit: 'none',

            },
            className: 'object-fit-none'
        },
        {
            title: '¿Qué es el extracto de piel de uva?',
            text: 'El extracto de piel de uva se trata de un colorante 100% natural procedente de la uva Vitis Vinifera, concretamente de la piel de las uvas tintas.',
            image: extractoPiel,
            link: '/extracto-de-piel-de-uva'
        },
        {
            title: '¿Qué es el extracto de semilla de uva?',
            text: 'Los extractos de semillas de uva son compuestos fenólicos que se encuentran en las semillas de las uvas blancas (Vitis Vinifera).',
            image: opc,
            link: '/extracto-de-semilla-de-uva',
            style: {
                objectFit: 'none',
                objectPosition: 'left'
            },
            className: 'object-fit-none object-position-left'
        },
        {
            title: '¿Qué son los polifenoles de uva?',
            text: 'Los polifenoles de uva son sustancias antioxidantes que se encuentran en la composición de los distintos vegetales, existiendo miles de compuestos fenólicos diferentes en la naturaleza.',
            image: polifenoles,
            link: '/polifenoles-de-uva',
            style: {
                objectPosition: 'right'
            },
            className: 'object-position-right'
        },
        {
            title: '¿Qué son los productos derivados de la uva?',
            text: 'Los productos derivados de la uva son aquellos subproductos que resultan del procesamiento del fruto',
            image: polifenoles,
            link: '/productos-derivados-de-uva',
            style: {
                objectPosition: '0% 0%'
            },
            className: 'object-position-0-0'
        },
        {
            title: '¿Qué es el extracto de semilla de uva?',
            text: 'Los extractos de semillas de uva son compuestos fenólicos que se encuentran en las semillas de las uvas blancas (Vitis Vinifera).',
            image: opc,
            link: '/semilla-uva',
            style: {
                objectFit: 'none',
                objectPosition: 'top'
            },
            className: 'object-fit-none object-position-top'
        },
        {
            title: '¿Qué son los taninos de uva?',
            text: 'En general, los taninos son compuestos fenólicos naturales presentes en los árboles y las plantas, así como en sus frutos.',
            image: taninos,
            link: '/taninos-uva'
        }
    ]

    const news = [
        {
            title: 'What is enocyanin?',
            text: 'Enocyanin, also known as grape skin extract, is a 100% natural colouring, coming from the skin of the red grapes Vitis Vinifera.',
            image: enocianina,
            link: '/en/enocyanin'
        },
        {
            title: 'What are anthocyanins?',
            text: 'Anthocyanins are natural substances found in certain plants in nature.',
            image: antocianinos,
            link: '/en/grape-anthocyanins',
        },
        {
            title: 'Vinumar: the importance of experience in grape extract suppliers. ',
            text: 'Vinumar is one of the world\'s leading suppliers of grape extract. We are specialists in the production of grape seed extract or OPC.',
            image: opc,
            link: '/en/grape-seed-extract-suppliers',
        },
        {
            title: 'What are grape skin extracts?',
            text: 'Grape skin extracts, also known as enocyanin, is a 100% natural colouring, coming from the skin of the red grapes Vitis Vinifera.',
            image: extractoPiel,
            link: '/en/grape-skin-extracts',
        },
        {
            title: 'What are grape tannins?',
            text: 'Specifically, grape tannins are natural phenolic compounds found in different parts of the vine and its fruit.',
            image: taninos,
            link: '/en/grape-tannins',
        },
        {
            title: 'Vinumar: the importance of experience in natural food colors manufacturers.',
            text: 'Vinumar stands out in the production of grape skin extract E163 among natural food colors manufacturers.',
            image: enocianina,
            link: '/en/natural-food-colors-manufacturers',
            style:{
                objectFit: 'none',
                objectPosition: '-550px -244px'
            }
        },
        {
            title: 'Vinumar: the importance of experience in polyphenols suppliers.',
            text: 'Vinumar is one of the world\'s leading suppliers of grape polyphenols. We are specialists in the extraction of grape polyphenols.',
            image: polifenoles,
            link: '/en/polyphenols-suppliers',
        },
        {
            title: 'Vinumar: the importance of experience in proanthocyanidins suppliers.',
            text: 'Vinumar is one of the world\'s leading suppliers of oligomeric proanthocyanidins (also known by the acronym OPC).',
            image: opc,
            link: '/en/proanthocyanidins-suppliers',
            style: {
                objectFit: 'none'
            }
        },
        // {
        //     title: 'What is red wine concentrate?',
        //     text: 'Red wine concentrate is a natural substance obtained from the concentration of red wines previously selected and conveniently dealcoholised.',
        //     image: redWine,
        //     link: '/en/red-wine-concentrate',
        // },
        // {
        //     title: 'What is red wine extract?',
        //     text: 'Red wine extract is a natural substance obtained from the concentration of red wines previously selected and conveniently dealcoholised.',
        //     image: redWine,
        //     link: '/en/red-wine-extracts',
        //     style: {
        //         objectFit: 'none',
        //         objectPosition: '-552px -244px'
        //     }
        // },
        // {
        //     title: 'What is red wine extract powder?',
        //     text: 'Red wine extract powder is a natural substance obtained by dealcoholisation, vacuum concentration, filtration and spray drying of selected red wines.',
        //     image: redWinePow,
        //     link: '/en/red-wine-extract-powder',
        // },
        // {
        //     title: 'What is white wine concentrate?',
        //     text: 'White wine concentrate is a natural substance obtained from the concentration of white wines previously selected and conveniently dealcoholised.',
        //     image: whiteWine,
        //     link: '/en/white-wine-concentrate',
        // },
        // {
        //     title: 'What is wine concentrate?',
        //     text: 'Wine concentrate is a natural substance obtained from the concentration of red and white wines previously selected and conveniently dealcoholised.',
        //     image: whiteWine,
        //     link: '/en/wine-concentrate',
        //     style: {
        //         objectFit: 'none',
        //         objectPosition: '-310px -88px'
        //     }
        // },
        // {
        //     title: 'What is wine extracts?',
        //     text: 'Wine extracts are natural substances obtained from the concentration of red and white wines previously selected and conveniently dealcoholised.',
        //     image: concentrado,
        //     link: '/en/wine-extracts',
        // }
    ]

    const newsObj = {
        es: noticias,
        en: news
    }
    return newsObj[lang]
}