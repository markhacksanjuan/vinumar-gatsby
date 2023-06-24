import opc from '../images/DEF/BL8A4185.jpg'


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
            image: opc,
            link: '/antocianinos'
        },
        {
            title: '¿Qué es el concentrado de vino?',
            text: 'El concentrado de vino es una sustancia natural que se obtiene de la concentración de vinos tintos y blancos',
            image: opc,
            link:'/concentrado-de-vino'
        },
        {
            title: '¿Qué colorante es el E-163?',
            text: 'E-163 es el código que identifica a las “Antocianinas” dentro del listado de aditivos alimentarios.',
            image: opc,
            link: '/e-163'
        },
        {
            title: '¿Qué es la enocianina?',
            text: 'La enocianina se trata de un colorante 100% natural procedente de la uva Vitis Vinifera, concretamente de la piel de las uvas tintas.',
            image: opc,
            link: '/enocianina'
        },
        {
            title: '¿Qué es el extracto de uva?',
            text: 'Los extractos de semillas de uva son compuestos fenólicos que se encuentran en las semillas de las uvas blancas (Vitis Vinifera).',
            image: opc,
            link: '/extracto-de-uva'
        },
        {
            title: '¿Qué es el extracto de piel de uva?',
            text: 'El extracto de piel de uva se trata de un colorante 100% natural procedente de la uva Vitis Vinifera, concretamente de la piel de las uvas tintas.',
            image: opc,
            link: '/extracto-de-piel-de-uva'
        },
        {
            title: '¿Qué es el extracto de semilla de uva?',
            text: 'Los extractos de semillas de uva son compuestos fenólicos que se encuentran en las semillas de las uvas blancas (Vitis Vinifera).',
            image: opc,
            link: '/extracto-de-semilla-de-uva'
        },
        {
            title: '¿Qué son los polifenoles de uva?',
            text: 'Los polifenoles de uva son sustancias antioxidantes que se encuentran en la composición de los distintos vegetales, existiendo miles de compuestos fenólicos diferentes en la naturaleza.',
            image: opc,
            link: '/polifenoles-de-uva'
        },
        {
            title: '¿Qué son los productos derivados de la uva?',
            text: 'Los productos derivados de la uva son aquellos subproductos que resultan del procesamiento del fruto',
            image: opc,
            link: '/productos-derivados-de-uva'
        },
        {
            title: '¿Qué es el extracto de semilla de uva?',
            text: 'Los extractos de semillas de uva son compuestos fenólicos que se encuentran en las semillas de las uvas blancas (Vitis Vinifera).',
            image: opc,
            link: '/semilla-uva'
        },
        {
            title: '¿Qué son los taninos de uva?',
            text: 'En general, los taninos son compuestos fenólicos naturales presentes en los árboles y las plantas, así como en sus frutos.',
            image: opc,
            link: '/taninos-uva'
        }
    ]

    const newsObj = {
        es: noticias
    }
    return newsObj[lang]
}