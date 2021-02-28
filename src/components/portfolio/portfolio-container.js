import React, { Component } from "react"
import axios from 'axios'


import PortfolioItem from './portfolio-item'

export default class PortfolioContainer extends Component {
    constructor() {
        super()

        this.state = {
            isLoading: false,
            data: []   
        }
    
        this.handleFilter = this.handleFilter.bind(this)
    }

    componentDidMount() {
        this.getPortfolioItems()
    }

    getPortfolioItems(filter = null) {
        axios.get('https://jedflynn.devcamp.space/portfolio/portfolio_items')
        .then(res => {
            if(filter) {
                this.setState({
                    data: res.data.portfolio_items.filter(item => {
                        return item.category === filter
                    })
                })
            } else {
                this.setState({
                    data: res.data.portfolio_items
                })
            }
        })
        .catch(err => {
            console.log(err);
        })
    }

    handleFilter(filter) {
        if (filter === "CLEAR_FILTERS") {
            this.getPortfolioItems()
        } else {
            this.getPortfolioItems(filter)
        }
    }

    render() {
        const portfolioItems = this.state.data.map(item => {
            return <PortfolioItem key={item.id} item={item} />
        })

        if (this.state.isLoading) {
            return <div>Loading...</div>
        }

        return(
            <div className="homepage-wrapper">
                <div className="filter-links">
                    <button className="btn" onClick={() => this.handleFilter('Portfolio')}>Portfolio</button>
                    <button className="btn" onClick={() => this.handleFilter('Scheduling')}>Scheduling</button>
                    <button className="btn" onClick={() => this.handleFilter('Enterprise')}>Enterprise</button>
                    <button className="btn" onClick={() => this.handleFilter('CLEAR_FILTERS')}>All</button>
                </div>
                <div className="portfolio-items-wrapper">
                    {portfolioItems}
                </div>
            </div>
        )
    }
}