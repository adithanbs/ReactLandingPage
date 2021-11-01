import React from 'react'
import Twitter from '../../Assets/Twitter.svg'
function Navbar() {
    return (
        <>
        <div class="container-fluid page1 mb-5 px-md-3 px-xl-5">
              <nav className="row py-4 justify-content-between">
            <h4 className="text-primary col-3 col-xl-5">Chirp.</h4>
            <div className="col-6 col-xl-5 text-end px-xl-5">
                <img className="d-md-none" src="Assets/Hamburger Menu.svg" alt="Hamburger-icon"/>
                <div className="d-none  d-md-flex  justify-content-between">
                    <p>Home</p>
                    <p>Pricing</p>
                    <p>FAQ</p>
                    <button type="button" className=" w-50  btn btn-primary">
                        <img src={Twitter} />
                        Sign in with twitter
                    </button>
                </div>
            </div>

        </nav>
        </div>
        </>
    )
}

export default Navbar
