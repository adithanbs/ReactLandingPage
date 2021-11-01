import React from 'react'
import dataChart from '../../Assets/Hero Image (Desktop View).png';
import tabletView from '../../Assets/Hero Image (Tablet View).png';
// import Twitter from '../../Assets/Twitter.svg'
import Tweet from '../../Assets/Twitter.svg';
import avatar1 from '../../Assets/userAvatar01.svg';
import avatar2 from '../../Assets/userAvatar02.svg';
import avatar3 from '../../Assets/userAvatar03.svg';
import avatar4 from '../../Assets/userAvatar04.svg';
import avatar5 from '../../Assets/userAvatar05.svg';
import avatar6 from '../../Assets/userAvatar06.svg';
import avatar7 from '../../Assets/userAvatar07.svg';
import avatar8 from '../../Assets/userAvatar08.svg';
import avatar9 from '../../Assets/userAvatar09.svg';
import HamburgerIcon from '../../Assets/Hamburger Menu.svg';


function Analytics() {
    return (
        <>
       <div className="container-fluid page1 mb-5 px-md-3 px-xl-5">
       <nav className="row py-4 justify-content-between">
            <h4 className="text-primary col-3 col-xl-5">Chirp.</h4>
            <div className="col-6 col-xl-5 text-end px-xl-5">
                <img className="d-md-none" src={HamburgerIcon} alt=""/>
                <div className="d-none  d-md-flex  justify-content-between">
                    <p>Home</p>
                    <p>Pricing</p>
                    <p>FAQ</p>
                    <button type="button" className=" w-50  btn btn-primary">
                        <img src={Tweet} />
                        Sign in with twitter
                    </button>
                </div>
            </div>

        </nav>

      <div className="row">
            <div class="col-xl-5   order-xl-2 ">
                <img className="img-fluid d-md-none d-xl-block mb-4" src= {dataChart} />
                <img className="img-fluid d-none d-sm-none d-md-block d-xl-none" src={tabletView}/>
            </div>

            <div className="order-xl-1 col-xl-7">
                <h1><strong>Twitter analytics taken to a whole new level.</strong> </h1>
                <p>Chirp is a suite of Twitter analytics that will help you better understand your audience, which
                    tweets
                    they
                    like, and most importantly, when they are the most active on Twitter.</p>
                <div>
                    <div class="d-md-inline">
                        <button type="button" className="modified btn btn-primary d-md-inline my-md-3">
                            <img src={Tweet } />
                            Sign in with twitter
                        </button>

                        <div className="text-center my-2 d-md-inline mx-md-2">
                            <a href="#"><strong>Learn more &rarr;</strong> </a>
                        </div>
                    </div>

                    <div class="thumb-images my-2">
                        <img className="img-fluid" src={avatar1} />
                        <img className="img-fluid" src={avatar2} />
                        <img className="img-fluid" src={avatar3} />
                        <img className="img-fluid" src={avatar4} />
                        <img className="img-fluid" src={avatar5} />
                        <img className="img-fluid" src={avatar6} />
                        <img className="img-fluid" src={avatar7} />
                        <img className="img-fluid" src={avatar8} />
                        <img className="img-fluid" src={avatar9} />
                    </div>
                    <div class="p1-last-text">
                        <p>Join <span className="text-primary"><strong>195</strong></span> others who have analyzed
                            their followers
                            and
                            scheduled
                            <span className="text-primary"><strong>1342</strong></span> tweets!
                        </p>
                    </div>
                </div>
        </div>
        </div>
        </div>
</>
        
    )
}

export default Analytics
