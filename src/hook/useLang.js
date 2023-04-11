export const useLang = location => {
    const { pathname } = location
    const pathArr = pathname.split('/')
    if(pathArr[1] === 'en') {
        return 'en'
    } else {
        return 'es'
    }
}