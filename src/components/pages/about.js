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