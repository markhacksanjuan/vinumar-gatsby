import React, { useState, useEffect } from 'react'

const Gmap = () => {
    const [screenWidth, setScreenWidth] = useState(typeof window !== 'undefined' ? window.screen.width: 1920)

    useEffect(() => {
        if(typeof window !== 'undefined') {
            window.addEventListener('resize', e => {
                setScreenWidth(window.screen.width)
            })
        }
    }, [])
    return(
        <>
            <div class="mapouter">
                <div class="gmap_canvas">
                    <iframe width={screenWidth > 800 ? '688' : `${screenWidth - 50}`} height="520" id="gmap_canvas" src="https://maps.google.com/maps?q=carretera%20munera%205,%20villarrobledo&t=&z=17&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>
                    {/* <a href="https://123movies-to.org">123movies</a> */}
                    <br/>
                    <style>{`.mapouter{text-align:right;height:600px;width:688px;}`}</style>
                    {/* <a href="https://www.embedgooglemap.net">how to put google maps on website</a> */}
                    <style>{`.gmap_canvas {overflow:hidden;background:none!important;height:600px;width:688px;}`}</style>
                </div>
            </div>
        </>
    )
}
export default Gmap

// return(
//     <>
//         <div class="mapouter">
//             <div class="gmap_canvas">
//                 <iframe width="688" height="520" id="gmap_canvas" src="https://maps.google.com/maps?q=carretera%20munera%205,%20villarrobledo&t=&z=17&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>
//                 <a href="https://123movies-to.org">123movies</a>
//                 <br/>
//                 <style>{`.mapouter{position:relative;text-align:right;height:600px;width:688px;}`}</style>
//                 <a href="https://www.embedgooglemap.net">how to put google maps on website</a>
//                 <style>{`.gmap_canvas {overflow:hidden;background:none!important;height:600px;width:688px;}`}</style>
//             </div>
//         </div>
//     </>
// )