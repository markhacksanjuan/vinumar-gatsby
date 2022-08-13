export const navigateTo = (pathname, navigate) => {
    if(pathname === '/where-we-are'){
        navigate('/donde-estamos')
      }
    if(pathname === '/sustainability'){
    navigate('/sostenibilidad')
    }
    if(pathname === '/contact'){
    navigate('/contacto')
    }
    if(pathname === '/product/grape-skin-extract'){
    navigate('/producto/extracto-piel-uva')
    }
    if(pathname === '/product/wine-extract'){
    navigate('/producto/extracto-vino')
    }
    if(pathname === '/product/grape-tannins'){
    navigate('/producto/taninos-uva')
    }
    if(pathname === '/product/alcohol'){
    navigate('/producto/alcoholes')
    }
    if(pathname === '/product/grape-seed'){
    navigate('/producto/pepita-de-uva')
    }
    if(pathname === '/about-us/resources'){
    navigate('/sobre-nosotros/instalaciones')
    }
    if(pathname === '/about-us/our-history'){
    navigate('/sobre-nosotros/nuestra-historia')
    }
    if(pathname === '/about-us/values'){
    navigate('/sobre-nosotros/valores')
    }
}