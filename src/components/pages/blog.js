import React, { Component } from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import axios from 'axios'
import BlogItem from '../blog/blog-item'
import BlogModal from '../modals/blog-modal'

export default class Blog extends Component {
    constructor() {
        super()

        this.state = {
            blogItems: [],
            totalCount: 0,
            currentPage: 0,
            isLoading: true,
            blogModalIsOpen: false
        }

        this.getBlogItems = this.getBlogItems.bind(this)
        this.onScroll = this.onScroll.bind(this)
        window.addEventListener('scroll', this.onScroll, false)
        this.handleNewBlogClick = this.handleNewBlogClick.bind(this)
        this.handleModalClose = this.handleModalClose.bind(this)
        this.handleSuccessfulNewBlogSubmission = this.handleSuccessfulNewBlogSubmission.bind(this)
    }

    handleSuccessfulNewBlogSubmission(blog) {
        this.setState({
            blogModalIsOpen: false,
            blogItems: [blog].concat(this.state.blogItems)
        })
    }

    handleNewBlogClick() {
        this.setState({
            blogModalIsOpen: true
        })
    }

    handleModalClose() {
        this.setState({
            blogModalIsOpen: false
        })
    }

    onScroll() {
        if (this.state.isLoading || this.state.blogItems.length === this.state.totalCount) {
            return
        }

        if (window.innerHeight + document.documentElement.scrollTop === document.documentElement.offsetHeight) {
            this.getBlogItems()
        }
    }

    getBlogItems() {
        this.setState({
            currentPage: this.state.currentPage + 1
        })

        axios.get(
            `https://jedflynn.devcamp.space/portfolio/portfolio_blogs?page=${this.state.currentPage}`,
            { withCredentials: true }
        )
        .then(response => {
            this.setState({
                blogItems: this.state.blogItems.concat(response.data.portfolio_blogs),
                totalCount: response.data.meta.total_records,
                isLoading: false
            })
        })
        .catch(error => {
            console.log("getBlogItems error", error)
        })
    }

    componentDidMount() {
        this.getBlogItems()
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.onScroll, false)
    }

    render() {
        const blogRecords = this.state.blogItems.map(blogItem => {
            return <BlogItem key={blogItem.id} blogItem={blogItem} />
        })

        return (
            <div className="blog-container">
                <BlogModal
                    handleSuccessfulNewBlogSubmission={this.handleSuccessfulNewBlogSubmission}
                    blogModalIsOpen={this.state.blogModalIsOpen}
                    handleModalClose={this.handleModalClose}
                />

                {this.props.loggedInStatus === "LOGGED_IN" ? (
                    <div className="new-blog-link">
                        <a onClick={this.handleNewBlogClick}>
                            <FontAwesomeIcon icon={['far', 'plus-square']} />
                        </a>
                    </div>
                ) : null}

                <div className="content-container">
                    {blogRecords}
                </div>

                {this.state.isLoading ? (
                    <div className="content-loader">
                        <FontAwesomeIcon icon={['far', 'cog']} spin />
                    </div>
                ) : null}
            </div>
        )
    }
}