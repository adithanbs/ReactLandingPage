import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChartLine,faSmile,faNewspaper,faSun,} from "@fortawesome/free-solid-svg-icons"

function Features() {
    return (
        <>
    <div className="container-fluid mx-1  mx-xl-5 px-xl-5 mb-xl-5">
        <div className="row">
            <div className="col-xl-9">
                <h1 className="mb-4 p2-top-text"><strong>Features that help you<br></br> 
                Tweet smarter.</strong></h1>
            </div>
        </div>
        <div className="row mx-0">
            <div className="col-12 col-xl-5 border mb-3 px-auto py-3 rounded mx-auto mx-xl-3 ">
                <div><FontAwesomeIcon icon={faChartLine} /></div>
                <h6>Analytics</h6>
                <p>We constantly monitor your audience as it grows-- so you can Tweet when your followers are
                    most
                    likely to be online and ready to engage with your content.</p>
            </div>
            <div className="col-12 col-xl-5 border mb-3 px-3 py-3 rounded mx-auto  mx-xl-5">
                <div><FontAwesomeIcon icon={faSmile} /></div>
                <h6>Smart Analyzer</h6>
                <p>Chirp automatically recognizes your followers' most active times and automatically sends you
                    notifications if you're missing out on an opportunity.</p>
            </div>
        </div>
        <div className="row mx-0">
            <div className="col-12 col-xl-5 border mb-3 px-3 py-3 rounded mx-auto  mx-xl-3">
                <FontAwesomeIcon icon={faNewspaper} />
                <h6>Scheduled Your Tweets</h6>
                <p>Quality tweets drive tons of engagement. With CHirp, you can write tweets in an advance and
                    schedule
                    them when your audience is most likely to read. </p>
            </div>
            <div className="col-12 col-xl-5 border mb-3 px-3 py-3 rounded mx-auto  mx-xl-5">
               <FontAwesomeIcon icon={faSun} />
                <h6>Dark Mode</h6>
                <p>Friendly on your eyes, no matter what time you write your Tweets. All colors are chosen to
                    make
                    sure
                    your eyes are at wase at all times.</p>
            </div>
        </div>
    </div>
</>
    )
}

export default Features


