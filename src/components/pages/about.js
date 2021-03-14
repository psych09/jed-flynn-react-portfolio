import React, { Component } from 'react'

import AboutIcon from '../about/about-icon'
import AboutImg from '../../../static/assets/images/about/profile-img.jpg'

export default class About extends Component {
    constructor() {
        super()

        this.state = {
            tooltip: ""
        }

        this.handleMouseEnter = this.handleMouseEnter.bind(this)
        this.handleMouseLeave = this.handleMouseLeave.bind(this)
    }

    handleMouseEnter(tooltip) {
        this.setState({ tooltip: tooltip })
    }

    handleMouseLeave() {
        this.setState({ tooltip: "" })
    }

    render() {
        return(
            <div className="content-page-wrapper">

                <div className="content-column">

                    <h2>Hi, I'm Jed</h2>

                    <h3>My Mission:</h3>
                    <p>I seek to utilize and expand my programming skills by developing business solutions that improve processes and mitigate operational risk.</p>

                    <h3>Experience:</h3>
                    <ul>
                        <li>Maintained an ETL built in Java using Spring Boot for the past 2 years. This ETL has run consistently with little to no downtime during this period.</li>
                        <li>Built an application for business unit at Discover that identifies needed disciplinary action and notifies management. Also tracks disciplinary escalation. This application accounts for employee attendance, performance, and behavioral disciplinary needs. This application gained lots of traction and was adopted company-wide.</li>
                        <li>Successfully migrated several applications from Cold Fusion to a microservice architecture using React and Spring Boot.</li>
                        <li>Successfully updated applications from on-premises to cloud-based databases.</li>
                    </ul>

                    <div className="about-icons">

                        <AboutIcon
                             icon={['fab', 'html5']}
                             tooltip='HTML5'
                             handleMouseEnter={this.handleMouseEnter}
                             handleMouseLeave={this.handleMouseLeave}
                        />

                        <AboutIcon
                            icon={['fab', 'css3-alt']}
                            tooltip='CSS3'
                            handleMouseEnter={this.handleMouseEnter}
                            handleMouseLeave={this.handleMouseLeave}
                        />

                        <AboutIcon
                            icon={['fab', 'js']}
                            tooltip='JavaScript'
                            handleMouseEnter={this.handleMouseEnter}
                            handleMouseLeave={this.handleMouseLeave}
                        />

                        <AboutIcon
                            icon={['fab', 'react']}
                            tooltip='React'
                            handleMouseEnter={this.handleMouseEnter}
                            handleMouseLeave={this.handleMouseLeave}
                        />

                        <AboutIcon
                            icon={['fab', 'python']}
                            tooltip='Python'
                            handleMouseEnter={this.handleMouseEnter}
                            handleMouseLeave={this.handleMouseLeave}
                        />

                        <AboutIcon
                            icon={['fab', 'git-alt']}
                            tooltip='Git'
                            handleMouseEnter={this.handleMouseEnter}
                            handleMouseLeave={this.handleMouseLeave}
                        />

                        <AboutIcon
                            icon={['fas', 'database']}
                            tooltip='SQL Relational Databases'
                            handleMouseEnter={this.handleMouseEnter}
                            handleMouseLeave={this.handleMouseLeave}
                        />

                        <AboutIcon
                            icon={['fab', 'font-awesome-alt']}
                            tooltip='Font Awesome'
                            handleMouseEnter={this.handleMouseEnter}
                            handleMouseLeave={this.handleMouseLeave}
                        />

                        <AboutIcon
                            icon={['fab', 'invision']}
                            tooltip='Invision Studio'
                            handleMouseEnter={this.handleMouseEnter}
                            handleMouseLeave={this.handleMouseLeave}
                        />

                    </div>

                    <div className="about-icon-tooltip">
                        <p>{this.state.tooltip}</p>
                    </div>

                </div>

                <div
                    className="image-column"
                    style={{
                        backgroundImage: `url(${AboutImg})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center"
                    }}
                />

            </div>
        )
    }
}