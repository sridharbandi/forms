import React, {Component} from 'react';
import Login from './components/Login/Login';
import Profile from './components/Profile/Profile';
import Signup from './components/Signup/Signup';
import Aux from './hoc/Aux';
import {BrowserRouter} from 'react-router-dom';
import {Route} from 'react-router-dom';

class App extends Component {
    render() {
        return (
            <BrowserRouter basename={process.env.PUBLIC_URL}>
                <Aux>
                    <Route path='/' exact component={Login}/>
                    <Route path='/sign-up' exact component={Signup}/>
                    <Route path='/profile' exact component={Profile}/>
                </Aux>
            </BrowserRouter>
        );
    }
}

export default App;
