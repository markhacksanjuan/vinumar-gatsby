export const navigateTo = (pathname, navigate) => {
    if(pathname === '/where-we-are'){
        navigate('/donde-estamos')
        return true
      }
    if(pathname === '/sustainability'){
    navigate('/sostenibilidad')
    return true
    }
    if(pathname === '/contact'){
    navigate('/contacto')
    return true
    }
    if(pathname === '/product/grape-skin-extract'){
    navigate('/producto/extracto-piel-uva')
    return true
    }
    if(pathname === '/product/wine-extract'){
    navigate('/producto/extracto-vino')
    return true
    }
    if(pathname === '/product/grape-tannins'){
    navigate('/producto/taninos-uva')
    return true
    }
    if(pathname === '/product/alcohol'){
    navigate('/producto/alcoholes')
    return true
    }
    if(pathname === '/product/grape-seed'){
    navigate('/producto/pepita-de-uva')
    return true
    }
    if(pathname === '/about-us/resources'){
    navigate('/sobre-nosotros/instalaciones')
    return true
    }
    if(pathname === '/about-us/our-history'){
    navigate('/sobre-nosotros/nuestra-historia')
    return true
    }
    if(pathname === '/about-us/values'){
    navigate('/sobre-nosotros/valores')
    return true
    }
}