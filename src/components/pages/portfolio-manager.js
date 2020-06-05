import React, { Component } from 'react'
import axios from 'axios'

import PortfolioSidebarList from '../portfolio/portfolio-sidebar-list'
import PortfolioForm from '../portfolio/portfolio-form'

export default class PortfolioManager extends Component {
    constructor() {
        super()

        this.state = {
            portfolioItems: []
        }

        this.handleSuccessfulFormSubmission = this.handleSuccessfulFormSubmission.bind(this)
        this.handleFormSubmissionError = this.handleFormSubmissionError.bind(this)
    }

    handleSuccessfulFormSubmission(portfolioItem) {
       this.setState({
           portfolioItems: [portfolioItem].concat(this.state.portfolioItems)
       })
    }

    handleFormSubmissionError(error) {
        console.log("handleFOrmSubmissionError error: ", error)
    }

    getPortfolioItems() {
        axios.get("https://jedflynn.devcamp.space/portfolio/portfolio_items?order_by=created_at&direction=desc", {
            withCredentials: true 
        })
        .then(res => {
            this.setState({
                portfolioItems: [...res.data.portfolio_items]
            })
        })
        .catch(err => {
            console.log("API Error: ", err)
        })
    }

    componentDidMount() {
        this.getPortfolioItems()
    }

    render() {
        return(
            <div className="portfolio-manager-wrapper">
                <div className="left-column">
                    <PortfolioForm 
                        handleSuccessfulFormSubmission={this.handleSuccessfulFormSubmission}
                        handleFormSubmissionError={this.handleFormSubmissionError}
                    />
                </div>

                <div className="right-column">
                    <PortfolioSidebarList data={this.state.portfolioItems} />
                </div>
            </div>
        )
    }
}