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
                    <a href="mailto:jed.flynn.09@gmail.com?subject=Portfolio Inquiry" target="_blank" className="bullet-point-group">
                        <div className="icon-wrapper">
                            <FontAwesomeIcon className="fa-icon" icon={['far', 'envelope-square']} />
                        </div>
                        <div className="text">jed.flynn.09@gmail.com</div>
                    </a>

                    <a href="https://www.linkedin.com/in/jed-flynn/" target="_blank" className="bullet-point-group">
                        <div className="icon-wrapper">
                            <FontAwesomeIcon className="fa-icon" icon={['fab', 'linkedin']} />
                        </div>
                        <div className="text">jed-flynn</div>
                    </a>

                    <a href="https://github.com/psych09" target="_blank" className="bullet-point-group">
                        <div className="icon-wrapper">
                            <div className="icon-wrapper"> 
                                <FontAwesomeIcon className="fa-icon" icon={['fab', 'github-square']} />
                            </div>
                        </div>
                        <div className="text">psych09</div>
                    </a>

                    <a href="https://www.facebook.com/jed.flynn.09" target="_blank" className="bullet-point-group">
                        <div className="icon-wrapper">
                            <FontAwesomeIcon className="fa-icon" icon={['fab', 'facebook-square']} />
                        </div>
                        <div className="text">jed.flynn.09</div>
                    </a>

                    <a href="https://www.instagram.com/jed.flynn.09/" target="_blank" className="bullet-point-group">
                        <div className="icon-wrapper">
                            <FontAwesomeIcon className="fa-icon" icon={['fab', 'instagram']} />
                        </div>
                        <div className="text">jed.flynn.09</div>
                    </a>

                    <div className="bullet-point-group">
                        <div className="icon-wrapper">
                            <FontAwesomeIcon className="fa-icon" icon={['fas', 'map-marker-alt']} />
                        </div>
                        <div className="text">Stansbury Park, UT</div>
                    </div>

                </div>

            </div>

        </div>
    )
}




