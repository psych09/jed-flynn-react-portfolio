import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import axios from 'axios'

import Home from './pages/home'
import Blog from './pages/blog'
import BlogDetail from './pages/blog-detail'
import About from './pages/about'
import Contact from './pages/contact'
import NavigationContainer from "./navigation/navigation-container"
import PortfolioDetail from "./portfolio/portfolio-detail"
import PortfolioManager from "./pages/portfolio-manager"
import Auth from "./pages/auth"
import NoMatch from "./pages/no-match"
import Icons from '../helpers/icons'


export default class App extends Component {
    constructor(props) {
        super(props)

        Icons()

        this.state = {
            loggedInStatus: "NOT_LOGGED_IN"
        }

        this.handleSuccessfulLogin = this.handleSuccessfulLogin.bind(this)
        this.handleUnsuccessfulLogin = this.handleUnsuccessfulLogin.bind(this)
        this.handleSuccessfulLogout = this.handleSuccessfulLogout.bind(this)
    }

    handleSuccessfulLogin() {
        this.setState({
            loggedInStatus: "LOGGED_IN"
        })
    }

    handleUnsuccessfulLogin() {
        this.setState({
            loggedInStatus: "NOT_LOGGED_IN"
        })
    }

    handleSuccessfulLogout() {
        this.setState({
            loggedInStatus: "NOT_LOGGED_IN"
        })
    }

    checkLoginStatus() {
        return axios.get("https://api.devcamp.space/logged_in", { 
            withCredentials: true 
        })
        .then(res => {
            const loggedIn = res.data.logged_in
            const loggedInStatus = this.state.loggedInStatus

            if (loggedIn && loggedInStatus === "LOGGED_IN") {
                return loggedIn
            } else if (loggedIn && loggedInStatus === "NOT_LOGGED_IN") {
                this.setState({
                    loggedInStatus: "LOGGED_IN"
                })
            } else if (!loggedIn && loggedInStatus === "LOGGED_IN") {
                this.setState({
                    loggedInStatus: "NOT_LOGGED_IN"
                })
            }
        })
        .catch(err => {
            console.log("Error:", err)
        })
    }

    componentDidMount() {
        this.checkLoginStatus()
    }

    authorizedPages() {
        return [
            <Route key="portfolio-manager" path="/portfolio-manager" component={PortfolioManager} />
        ]
    }

    render() {
        return (
            <div className="container">
        
                <Router>
                    <div>
                        <NavigationContainer
                            loggedInStatus={this.state.loggedInStatus}
                            handleSuccessfulLogout={this.handleSuccessfulLogout}
                        />

                        <Switch>
                            <Route exact path="/" component={Home} />
                            <Route 
                                path="/auth" 
                                render={props => (
                                    <Auth
                                        {...props}
                                        handleSuccessfulLogin={this.handleSuccessfulLogin}
                                        handleUnsuccessfulLogin={this.handleUnsuccessfulLogin}
                                    />
                                )}                            
                            />
                            <Route path="/about" component={About} />
                            <Route path="/contact" component={Contact} />
                            <Route
                                path="/blog"
                                render={props => (
                                    <Blog {...props} loggedInStatus={this.state.loggedInStatus} />
                                )}
                            />
                            <Route path="/b/:slug" component={BlogDetail} />
                            <Route path="/portfolio/:slug" component={PortfolioDetail} />
                            {this.state.loggedInStatus === "LOGGED_IN" ? this.authorizedPages() : null}
                            <Route component={NoMatch} />
                        </Switch>
                    </div>
                </Router>
            </div>
        );
    }
}
