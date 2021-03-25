import React, { Component } from "react"
import { Link } from 'react-router-dom'

export default class PortfolioItem extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        const {
            id,
            name,
            description,
            thumb_image_url,
            logo_url
        } = this.props.item
        
        return(
            <Link to={`/portfolio/${id}`}>
                <div className="portfolio-item-wrapper">
                    <div 
                        className="portfolio-img-background"
                        style={{
                            backgroundImage: `url("${thumb_image_url}")`
                        }}
                    />

                    <div className="img-text-wrapper">
                        <div className="logo-wrapper">
                            <img src={logo_url} />
                        </div>

                        <div className="subtitle">{name}</div>
                    </div>
                </div>
            </Link>
        )
    }
}