//libraries
import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Amplify from 'aws-amplify';

//Authenticated Components
import Navigation from './components/Authenticated/Navigation/Navigation';
import BecomeFreelancer from './components/Authenticated/BecomeFreelancer/BecomeFreelancer';
import BrowseJob from './components/Authenticated/BrowseJob/BrowseJob';
import Setting from './components/Authenticated/Setting/Setting';
import Dashboard from './components/Authenticated/Dashboard/Dashboard';
import Contact from './components/Authenticated/Contact/Contact';

//NotAuthenticated Components

import NotAuthenticatedNavigation from './components/NotAuthenticated/Navigation/Navigation';
import Landing from './components/NotAuthenticated/Landing/Landing';
import Login from './components/NotAuthenticated/Registration/Login';
import Register from './components/NotAuthenticated/Registration/Register';
import ForgotPassword from './components/NotAuthenticated/Registration/ForgotPassword';
import NotFound from './components/Shared/404NotFound';
import Payment from './components/Authenticated/Payment/Payment';

//AdminComponents

//Configurations
// import config from './aws-config';

//configures aws
// Amplify.configure({
//     Auth: {
//         region: config.cognito.REGION,
//         userPoolId: config.cognito.USER_POOL_ID,
//         userPoolWebClientId: config.cognito.APP_CLIENT_ID,
//         identityPoolId: config.cognito.IDENTITY_POOL_ID
//     },
//     Storage: {
//         AWSS3: {
//             region: config.cognito.REGION,
//             bucket: config.cognito.BUCKET
//         }
//     }
// });

class App extends Component {
    constructor() {
        super();
        this.state = {
            isAuthenticated: true,
            navigator: null
        };
    }

    componentDidMount() {
        if (this.state.isAuthenticated) {
            this.setState({
                navigator: (
                    <Navigation>
                        <Switch>
                            <Route exact path="/" component={Dashboard} />
                            <Route
                                exact
                                path="/become/freelancer"
                                component={BecomeFreelancer}
                            />
                            <Route
                                exact
                                path="/browse/jobs"
                                component={BrowseJob}
                            />
                            <Route exact path="/contact" component={Contact} />
                            <Route exact path="/payment" component={Payment} />
                            <Route exact path="/setting" component={Setting} />
                            <Route component={NotFound} />
                        </Switch>
                    </Navigation>
                )
            });
        } else {
            this.setState({
                navigator: (
                    <NotAuthenticatedNavigation>
                        <Switch>
                            <Route exact path="/" component={Landing} />
                            <Route exact path="/login" component={Login} />
                            <Route
                                exact
                                path="/register"
                                component={Register}
                            />
                            <Route
                                exact
                                path="/forgotPassword"
                                component={ForgotPassword}
                            />
                            <Route component={NotFound} />
                        </Switch>
                    </NotAuthenticatedNavigation>
                )
            });
        }
    }

    render() {
        return <div className="gray">{this.state.navigator}</div>;
    }
}

export default App;
