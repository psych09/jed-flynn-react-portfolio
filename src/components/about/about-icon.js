import React, { Component } from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

export default class AboutIcon extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return(
            <div className="about-icon-wrapper"
                onMouseEnter={() => {this.props.handleMouseEnter(this.props.tooltip)}}
                onMouseLeave={() => {this.props.handleMouseLeave()}}
            >
                <FontAwesomeIcon className="fa-icon" icon={this.props.icon} />
            </div>
        )
    }
}