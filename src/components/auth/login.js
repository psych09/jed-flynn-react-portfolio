import React, { Component } from 'react'
import axios from 'axios'

export default class Login extends Component {
    constructor(props) {
        super(props)

        this.state = {
            email: "",
            password: "",
            errorText: ""
        },

        this.handleChange = this.handleChange.bind(this),
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value,
            errorText: ""
        })
    }

    handleSubmit(event) {
        axios.post(
            "https://api.devcamp.space/sessions",
            {
                client: {
                    email: this.state.email,
                    password: this.state.password
                },
            },
            { withCredentials: true }
        ).then(res => {
            if (res.data.status === 'created') {
                this.props.handleSuccessfulAuth()
            } else {
                this.setState({
                    errorText: "Wrong email or password"
                })
                this.props.handleUnsuccessfulAuth()
            }
        }).catch(err => {
            this.setState({
                errorText: "An error occurred"
            })
            console.log(err)
            this.props.handleUnsuccessfulAuth()
        })
        event.preventDefault()
    }

    render() {
        return(
            <div>
                <h2>LOGIN TO ACCESS YOUR DASHBOARD</h2>

                <div>{this.state.errorText}</div>

                <form onSubmit={this.handleSubmit}>
                    <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        value={this.state.email}
                        onChange={this.handleChange}
                    />

                    <input
                        type="password"
                        name="password"
                        placeholder="Password"
                        value={this.state.password}
                        onChange={this.handleChange}
                    />

                    <button type="submit">Login</button>
                </form>
            </div>
        )
    }
}