import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

import ContactPageImg from '../../../static/assets/images/auth/login-img.jpg'

export default function() {
    return(
        <div className="content-page-wrapper">

            <div
                className="image-column"
                style={{
                    backgroundImage: `url(${ContactPageImg})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center"
                }}
            />

            <div className="content-column">
                <div className="contact-bullet-points">
                    <div className="bullet-point-group">
                        <FontAwesomeIcon className="fa-icon" icon={['far', 'envelope-square']} />
                        <div className="text">jed.flynn.09@gmail.com</div>
                    </div>

                    <div className="bullet-point-group">
                        <FontAwesomeIcon className="fa-icon" icon={['fab', 'linkedin']} />
                        <div className="text">jedflynn</div>
                    </div>

                    <div className="bullet-point-group">
                        <FontAwesomeIcon className="fa-icon" icon={['fab', 'github-square']} />
                        <div className="text">psych09</div>
                    </div>

                    <div className="bullet-point-group">
                        <FontAwesomeIcon className="fa-icon" icon={['fab', 'facebook-square']} />
                        <div className="text">jed-flynn</div>
                    </div>

                    <div className="bullet-point-group">
                        <FontAwesomeIcon className="fa-icon" icon={['fab', 'instagram']} />
                        <div className="text">jedflynn</div>
                    </div>

                    <div className="bullet-point-group">
                        <FontAwesomeIcon className="fa-icon" icon={['fas', 'map-marked-alt']} />
                        <div className="text">Stansbury Park, UT</div>
                    </div>

                </div>

            </div>

        </div>
    )
}




