import React from 'react'
import customer1 from '../../Assets/userAvatar01.svg'
import customer2 from '../../Assets/userAvatar02.svg'
import customer3 from '../../Assets/userAvatar03.svg'

import twitterlogo from '../../Assets/Twitter (Blue).svg'
import likelogo from '../../Assets/Like.svg'
function Review() {
    return (
        <>
                <div className="container-fluid bg-info">
        <div className="row ">
            <div className="col-12 py-5 page3 mb-5 px-xl-5">
                <h1 className="mb-4"><strong>What our customers<br></br>say</strong> </h1>
              
                <div className="row">
                    <div className="col">
                        <div className="border  px-4 py-3 customer-box rounded mb-3 bg-white" >
                            <div className="t-top d-flex justify-content-between mb-3">
                                <div className="d-flex justify-content">
                                    <img className="img-fluid" src={customer1} alt=""/>
                                    <div className="mx-2">
                                        <h6 className="mb-0"><strong>Sara May</strong></h6>
                                        <p className="mb-0">@sara_may</p>
                                    </div>
                                </div>

                                <img src={twitterlogo} alt=""/>
                            </div>
                            <p>I just tried out @chirp and it's amazing, love all the alalytics I can see.</p>
                            <div className="t-bottom d-flex justify-content-between">
                                <div className="d-flex align-items-center">
                                    <img src={likelogo } alt=""/>
                                    <p className="mx-2 mb-0">2</p>
                                </div>
                                <p className="mb-0">March 2,2021</p>
                            </div>
                        </div>

                    </div>
                    <div className="col">
                        <div className=" border  px-4 py-3  customer-box rounded mb-3 bg-white">
                            <div className="t-top d-flex justify-content-between mb-3">
                                <div className="d-flex justify-content">
                                    <img className="img-fluid" src={customer2} alt=""/>
                                    <div className="mx-2">
                                        <h6 className="mb-0"><strong>Jack Scott</strong></h6>
                                        <p className="mb-0">@jackscott_</p>
                                    </div>
                                </div>

                                <img src={twitterlogo} alt=""/>
                            </div>
                            <p>I initially started using Chirp to support the co-founder as I personally knew him,
                                but
                                after
                                having tried it out for a few weeks,I can genuinely say this changed my Twitter
                                game.
                            </p>
                            <div className="t-bottom d-flex justify-content-between">
                                <div className="d-flex align-items-center">
                                    <img src={likelogo} alt=""/>
                                    <p className="mx-2 mb-0">32</p>
                                </div>
                                <p className="mb-0">March 2,2021</p>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="border px-4 py-3 customer-box rounded mb-3 bg-white">
                            <div className="t-top d-flex justify-content-between mb-3">
                                <div className="d-flex justify-content">
                                    <img className="img-fluid" src={customer3} alt=""/>
                                    <div className="mx-2">
                                        <h6 className="mb-0"><strong>Jessica May</strong></h6>
                                        <p className="mb-0">@jmay98</p>
                                    </div>
                                </div>
                                <img src={twitterlogo}alt=""/>
                            </div>
                            <p>Absolutely love everything about Chirp, from the design to how everything works
                                smoothly.
                            </p>
                            <div className="t-bottom d-flex justify-content-between">
                                <div className="d-flex align-items-center">
                                    <img src={likelogo} alt=""/>
                                    <p className="mx-2 mb-0">221</p>
                                </div>
                                <p className="mb-0">March 2,2021</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

        </>
    )
}

export default Review
