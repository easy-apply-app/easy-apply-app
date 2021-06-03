import React, {Component} from 'react';

import axios from 'axios';
import { Redirect } from 'react-router';

export default class Login extends Component {
    state = {}

    handleSubmit = e => {
        e.preventDefault();

        const data = {
            email: this.email,
            password: this.password
        };

        axios.post('login', data)
        .then(res => {
            localStorage.setItem('token', res.data.token);
            this.setState({
                loggedIn: true
            });
            this.props.setUser(res.data.user);
        })
        .catch(err => {
            console.log(err)
        })
    }
    render() {
        if (this.state.loggedIn) {
            return <Redirect to={'/'}/>;
        }

        return (
          
            <form onSubmit={this.handleSubmit}>
                <h3>Login</h3>

                <div className="form-group">
                    <label>Email</label>
                    <input type="email" className="form-control" placeholder="Password"
                       onChange={e => this.email = e.target.value}/>
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" placeholder="Password"
                       onChange={e => this.password = e.target.value}/>
                </div>
            </form>
        )
    }
}