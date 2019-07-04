//libraries
import React, { Component } from 'react';
import Auth from '@aws-amplify/auth';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

class SecureHome extends Component {
    constructor(props) {
        super(props);
        this.state = {
            redirect: '',
            admin: false
        };
    }

    async componentDidMount() {
        const user = await this.getUser();

        //Checks if user is authenticated by aws, if not redirect to /login,
        //If user is admin, redirect to admin dashboard.
        //If user is not admin, but is a user and don't have any information on file,
        //redirect to basic info collect.
        //Redirect to dashboard, otherwise.
        if (user === 'not authenticated') {
            this.setState({ redirect: 'login' });
        } else if (
            user.signInUserSession.accessToken.payload['cognito:groups'] !== undefined &&
            user.signInUserSession.accessToken.payload['cognito:groups'] !== null &&
            user.signInUserSession.accessToken.payload['cognito:groups'].includes('admin')
        ) {
            this.setState({ admin: true });
        } else {
            this.setState({ redirect: '/' });
        }
    }

    //get current user information
    async getUser() {
        try {
            const user = await Auth.currentAuthenticatedUser({
                bypassCache: true
            });
            return user;
        } catch (error) {
            return error;
        }
    }

    render() {
        if (this.state.admin) {
            return <Redirect push to="/admin/dashboard" />;
        } else if (this.state.redirect === 'login') {
            return <Redirect push to="/login" />;
        } else if (this.state.redirect === '/') {
            return <Redirect push to="/" />;
        } else {
            return <p>redirecting...</p>;
        }
    }
}

function mapStateToProps(state) {
    const { user } = state.users;

    return {
        user
    };
}

export default connect(mapStateToProps)(SecureHome);
