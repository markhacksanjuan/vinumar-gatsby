export const usePrefix = (location) => {
    const { pathname } = location
    const pathArr = pathname.split('/')

    return pathArr[1]
}