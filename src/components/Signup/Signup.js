import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import Button from 'material-ui/Button';
import Grid from 'material-ui/Grid';
import Checkbox from 'material-ui/Checkbox';
import Radio, { RadioGroup } from 'material-ui/Radio';
import { FormLabel, FormControl, FormControlLabel } from 'material-ui/Form';
import { withStyles } from 'material-ui/styles';
import { NavLink } from 'react-router-dom';
import pink from 'material-ui/colors/red';
import Typography from 'material-ui/Typography';
import Header from '../Header/Header';
import LoginAvatar from '../Avatar/LoginAvatar';
import Aux from '../../hoc/Aux';

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
        marginTop: '7px'
    },
    rowdisplay: {
        flexDirection: 'row'
    },
    anchorstyle: {
        color: 'inherit'
    },
    typographyStyle: {
        marginTop: '10px',
        marginBottom: '50px',
        color: pink[500],
        textAlign: 'center'
    },
    hintStyle: {
        textAlign: 'center',
        fontStyle: 'italic',
        color:'#eee'
    }
});


class Signup extends Component {

    state = {
        firstname: '',
        lastname: '',
        email: '',
        gender: 'female',
        phone: '',
        password: '',
        confirmpassword: '',
        terms: false,
        err: ''
    };

    handleChange = name => event => {
        this.setState({[name]: event.target.value});
    }

    handleTermsChange = event => {
        this.setState({ terms: event.target.checked });
    };

    signupHandler = () => {
        if(this.state.firstname === ''
            || this.state.lastname === ''
            || this.state.email === ''
            || this.state.phone === ''
            || this.state.password === ''
            || this.state.confirmpassword === ''
            || !this.state.terms){
            this.setState({err: 'All fields are mandatory'})
            return;
        }

        if(!/\S+@\S+\.\S+/.test(this.state.email)){
            this.setState({err: 'Email is incorrect format'})
            return;
        }

        if(this.state.password !== this.state.confirmpassword){
            this.setState({err: 'Password not matching'})
            return;
        }

        localStorage.setItem('EMAIL', this.state.email);
        localStorage.setItem('PASSWORD', this.state.password);
        this.setState({err: 'Successfully registered, please sign in'})

    }

    render() {
        return (
            <Aux>
                <Header />
                <LoginAvatar />
                <Grid container justify='center' spacing={0}>
                    <Grid item xs={10} sm={4} >
                        <form noValidate autoComplete="off">
                            <TextField
                                InputProps={{
                                    className: this.props.classes.textField
                                }}
                                id="firstname"
                                label="First Name"
                                type="text"
                                margin="normal"
                                required
                                value={this.state.firstname}
                                onChange={this.handleChange('firstname')}
                                fullWidth
                                error
                            />
                            <TextField
                                InputProps={{
                                    className: this.props.classes.textField
                                }}
                                id="lasttname"
                                label="Last Name"
                                type="text"
                                margin="normal"
                                required
                                value={this.state.lastname}
                                onChange={this.handleChange('lastname')}
                                fullWidth
                                error
                            />
                            <TextField
                                InputProps={{
                                    className: this.props.classes.textField
                                }}
                                id="email"
                                label="Email"
                                type="email"
                                margin="normal"
                                required
                                value={this.state.email}
                                onChange={this.handleChange('email')}
                                fullWidth
                                error
                            />
                            <FormControl component="fieldset" required error margin="normal">
                                <FormLabel component="legend">Gender</FormLabel>
                                <RadioGroup
                                    className={this.props.classes.rowdisplay}
                                    aria-label="gender"
                                    name="gender1"
                                    value={this.state.gender}
                                    onChange={this.handleChange('gender')}>
                                    <FormControlLabel value="female"
                                        classes={{
                                            label: this.props.classes.root,
                                        }}
                                        control={<Radio classes={{
                                            root: this.props.classes.root,
                                            checked: this.props.classes.checked,
                                        }} />} label="Female" />
                                    <FormControlLabel
                                        classes={{
                                            label: this.props.classes.root,
                                        }}
                                        value="male" control={<Radio classes={{
                                            root: this.props.classes.root,
                                            checked: this.props.classes.checked,
                                        }} />} label="Male" />
                                    <FormControlLabel
                                        classes={{
                                            label: this.props.classes.root,
                                        }}
                                        value="other" control={<Radio classes={{
                                            root: this.props.classes.root,
                                            checked: this.props.classes.checked,
                                        }} />} label="Other" />
                                </RadioGroup>
                            </FormControl>
                            <TextField
                                InputProps={{
                                    className: this.props.classes.textField
                                }}
                                id="phone"
                                label="Phone"
                                type="text"
                                required
                                value={this.state.phone}
                                onChange={this.handleChange('phone')}
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
                                required
                                value={this.state.password}
                                onChange={this.handleChange('password')}
                                fullWidth
                                error
                            />
                            <TextField
                                InputProps={{
                                    className: this.props.classes.textField
                                }}
                                id="confirmpassword"
                                label="Confirm Password"
                                type="password"
                                margin="normal"
                                required
                                value={this.state.confirmpassword}
                                onChange={this.handleChange('confirmpassword')}
                                fullWidth
                                error
                            />
                            <FormControlLabel
                                control={
                                    <Checkbox
                                        checked={this.state.terms}
                                        onChange={this.handleTermsChange}
                                        value="terms"
                                        classes={{
                                            root: this.props.classes.root,
                                            checked: this.props.classes.checked,
                                        }}
                                    />
                                }
                                classes={{
                                    label: this.props.classes.root,
                                }}
                                label="I agree to the Terms of Use"
                            />
                            <Typography variant="caption" component="p" className={this.props.classes.hintStyle}>
                                {this.state.err}
                            </Typography>
                            <Button
                                className={this.props.classes.buttons}
                                variant="raised"
                                onClick = {this.signupHandler}
                                fullWidth
                                color="secondary">
                                Sign Up
                            </Button>
                            <Typography component="p" className={this.props.classes.typographyStyle}>
                                Already a member?<br />
                                <NavLink to='/' exact className={this.props.classes.anchorstyle}>
                                    Sign In
                            </NavLink>
                            </Typography>
                        </form>
                    </Grid>
                </Grid>
            </Aux>
        );
    }
}

export default (withStyles(styles)(Signup));