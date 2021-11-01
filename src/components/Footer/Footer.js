import React from 'react'
import TwitterBlack from '../../Assets/Twitter (Black).svg'

function Footer() {
    return (
        <div>
               <div className="container-fluid px-0 bg-info">
        <div className="row footer align-items-center px-xl-5">
            <div className="col-12 px-3 py-3 col-md-6 col-xl-6">
                <p><span className="text-primary"><strong>Chirp.</strong></span></p>    {/*<Strong></Strong> */} 
            </div>
            <div className="col col-md-auto col-xl-1">
                <img src={TwitterBlack} />
            </div>
            <div className="col-5 col-md-auto col-xl-2">
                <p><strong>Privacy policy</strong> </p>
            </div>
            <div className="col-5 col-md-auto col-xl-2">
                <p><strong>Terms of Use</strong> </p>
            </div>
        </div>
    </div>

        </div>
    )
}

export default Footer
