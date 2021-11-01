import React from 'react'
import Tweet from '../../Assets/Twitter.svg'
import checkmark from '../../Assets/Checkmark.svg'


function Planprice() {
    return (
        <>
            <div className="container-fluid ">

<div className="row ">
    <div className="col-12 px-5 mb-4">
        <h1 className="text-center"><strong>One simple price plan.</strong></h1>
        <p className="text-center">Start growing you Twitter account by analyzing your followers' patterns</p>
    </div>
</div>
<div className="row mx-2 justify-content-center">
    <div className="col-12 col-md-6 col-xl-4 price-box border-warning border border-1 rounded page4 py-3 px-3 mb-5 bg-light">
        <p className="mb-0">Monthly</p>
        <p><span className="fs-1"><strong>$9</strong></span>/mo</p>
        <hr></hr>

        <div className="d-flex">
            <img src={checkmark} alt=""/>
            <p className="mx-3 mb-0">Unlimited scheduled tweets and threads.</p>
        </div>
        <div className="d-flex">
            <img src={checkmark} alt=""/>
            <p className="mx-3 mb-0">Schedule up to 3 weeks in advance.</p>
        </div>
        <div className="d-flex">
            <img src={checkmark} alt=""/>
            <p className="mx-3 mb-0">Real-time audience analytics tracking up to 5k followers.</p>
        </div>
        <hr></hr>
        <button type="button" className="w-100 btn btn-primary">
            <img src={Tweet} alt=""/>
            Start Trial with twitter
        </button>
    </div>
</div>
</div>
        </>
    )
}

export default Planprice
