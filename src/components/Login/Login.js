import React, {Component} from 'react';
import TextField from 'material-ui/TextField';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';
import Grid from 'material-ui/Grid';
import Checkbox from 'material-ui/Checkbox';
import {FormControlLabel} from 'material-ui/Form';
import {withStyles} from 'material-ui/styles';
import {NavLink} from 'react-router-dom';
import pink from 'material-ui/colors/red';
import Aux from '../../hoc/Aux';
import Header from '../Header/Header';
import LoginAvatar from '../Avatar/LoginAvatar';

const styles = theme => ({
    root: {
        color: pink[500],
        '&$checked': {
            color: pink[500],
        },
    },
    checked: {},
    textField: {
        color: 'white',
    },
    buttons: {
        marginTop: '25px',
    },
    link: {
        textTransform: 'none',
        marginTop: '7px',
        color: pink[500]
    },
    anchorstyle: {
        textDecoration: 'none'
    },
    hintStyle: {
        textAlign: 'center',
        fontStyle: 'italic',
        color: '#eee'
    }
});

class Login extends Component {

    state = {
        email: '',
        password: '',
        defaultemail: 'test@test.com',
        defaultpass: 'Test@123',
        err: ''
    }

    forgotPasswordHandler = () => {

    }

    signinHandler = () => {
        if ((this.state.email === this.state.defaultemail
            && this.state.password === this.state.defaultpass)
            || (this.state.email === localStorage.getItem('EMAIL')
            && this.state.password === localStorage.getItem('PASSWORD'))) {
            localStorage.setItem('AUTH', 'true');
            this.props.history.push('/profile');

        } else {
            this.setState({err: 'Enter valid email and password!'})
        }
    }

    emailChangeHandler = (event) => {
        this.setState({email: event.target.value});
        this.setState({err: ''});
    }

    passwordChangeHandler = (event) => {
        this.setState({password: event.target.value});
        this.setState({err: ''});
    }

    render() {
        return (
            <Aux>
                <Header />
                <LoginAvatar />
                <Grid container justify='center' spacing={0}>
                    <Grid item xs={10} sm={4}>
                        <form noValidate autoComplete="off">
                            <TextField
                                InputProps={{
                                    className: this.props.classes.textField
                                }}
                                id="email"
                                label="Email"
                                type="email"
                                margin="normal"
                                value={this.state.email}
                                onChange={this.emailChangeHandler}
                                required
                                fullWidth
                                error
                            />
                            <TextField
                                InputProps={{
                                    className: this.props.classes.textField
                                }}
                                id="password"
                                label="Password"
                                type="password"
                                margin="normal"
                                value={this.state.password}
                                onChange={this.passwordChangeHandler}
                                required
                                fullWidth
                                error
                            />

                            <Typography variant="caption" component="p" className={this.props.classes.hintStyle}>
                                {this.state.err}
                            </Typography>

                            <Grid container spacing={24}>
                                <Grid item xs={12} sm={6}>
                                    <Button
                                        onClick={this.signinHandler}
                                        className={this.props.classes.buttons}
                                        variant="raised"
                                        fullWidth
                                        color="secondary">
                                        Login
                                    </Button>
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <NavLink to='/sign-up' className={this.props.classes.anchorstyle} exact>
                                        <Button
                                            className={this.props.classes.buttons}
                                            variant="raised"
                                            fullWidth
                                            color="secondary">
                                            SIGN UP
                                        </Button>
                                    </NavLink>
                                </Grid>
                            </Grid>
                            <Grid container spacing={0} justify='center'>
                                <Grid item xs={6} sm={6}>
                                    <FormControlLabel
                                        control={
                                            <Checkbox
                                                value="checkedG"
                                                classes={{
                                                    root: this.props.classes.root,
                                                    checked: this.props.classes.checked,
                                                }}
                                            />
                                        }
                                        classes={{
                                            label: this.props.classes.root,
                                        }}
                                        label="Remember me"
                                    />
                                </Grid>
                                <Grid item xs={6} sm={6}>
                                    <Button
                                        onClick={this.forgotPasswordHandler}
                                        className={this.props.classes.link}>
                                        Forgot Password?
                                    </Button>
                                </Grid>
                                <Typography variant="caption" component="p" color="error"
                                            className={this.props.classes.hintStyle}>
                                    *Note: Use email : {this.state.defaultemail} and password: {this.state.defaultpass}
                                    <br />
                                    Or <br /> Sign up to use own credentials
                                </Typography>
                            </Grid>
                        </form>
                    </Grid>
                </Grid>
            </Aux>

        );
    }
}

export default (withStyles(styles)(Login));
