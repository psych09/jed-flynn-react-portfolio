import React from 'react'

const PortfolioSidebarList = props => {

    const portfolioList = props.data.map(item => {
        return (
            <div key={item.id} className="portfolio-item-thumb">
                <div className="portfolio-thumb-img">
                    <img src={item.thumb_image_url} />
                </div>
                <h1 className="title">{item.name}</h1>
                <h2>{item.id}</h2>
            </div>
        )
    })

    return (
        <div className="portfolio-sidebar-list-wrapper">
            {portfolioList}
        </div>
    )
}

export default PortfolioSidebarList