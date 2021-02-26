import React, { Component } from 'react'
import axios from 'axios'

export default class PortfolioDetail extends Component {
    constructor(props) {
        super(props)

        this.state = {
            currentId: this.props.match.params.slug,
            portfolioItem: {},
        }
    }

    getPortfolioItem() {
        axios.get(
            `https://jedflynn.devcamp.space/portfolio/portfolio_items/${this.state.currentId}, { withCredentials: true }`
        )
        .then(response => {
            this.setState({
                portfolioItem: response.data.portfolio_item
            })
        })
        .catch(error => {
            console.log("getPortfolioItem error", error)
        })
    }

    componentDidMount() {
        this.getPortfolioItem()
    }

    render() {
        const {
            name,
            description,
            url,
            category,
            thumb_image_url,
            banner_image_url,
            logo_url
        } = this.state.portfolioItem

        return (
            <div>
                <h2>{name}</h2>
                <p>{description}</p>
            </div>
        )
    }
}