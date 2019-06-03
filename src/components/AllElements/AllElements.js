import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import Button from 'material-ui/Button';
import Grid from 'material-ui/Grid';
import Checkbox from 'material-ui/Checkbox';
import Select from 'material-ui/Select';
import Radio, { RadioGroup } from 'material-ui/Radio';
import { InputLabel } from 'material-ui/Input';
import { FormControl, FormControlLabel } from 'material-ui/Form';
import { withStyles } from 'material-ui/styles';
import pink from 'material-ui/colors/red';
import Header from '../Header/Header';
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
        color: '#eee'
    }
});


class AllElements extends Component {

    state = {
        textinput: '',
        radio: 'option1',
        number:'Ten',
        terms:false
    };

    handleChange = name => event => {
        this.setState({ [name]: event.target.value });
    }

    handleTermsChange = event => {
        this.setState({ terms: event.target.checked });
    };

    signupHandler = () => {
        alert('You clicked on button');
    }

    render() {
        return (
            <Aux>
                <Header />
                <Grid container justify='center' spacing={0}>
                    <Grid item xs={10} sm={4} >
                        <form noValidate autoComplete="off">
                            <TextField
                                InputProps={{
                                    className: this.props.classes.textField
                                }}
                                id="textinput"
                                label="Text Input"
                                type="text"
                                margin="normal"
                                required
                                value={this.state.textinput}
                                onChange={this.handleChange('textinput')}
                                fullWidth
                                error
                            />
                            <FormControl component="fieldset" required error margin="normal">
                                <RadioGroup
                                    className={this.props.classes.rowdisplay}
                                    aria-label="radio"
                                    name="option1"
                                    value={this.state.radio}
                                    onChange={this.handleChange('radio')}>
                                    <FormControlLabel value="option1"
                                        classes={{
                                            label: this.props.classes.root,
                                        }}
                                        control={<Radio classes={{
                                            root: this.props.classes.root,
                                            checked: this.props.classes.checked,
                                        }} />} label="Option One" />
                                    <FormControlLabel
                                        classes={{
                                            label: this.props.classes.root,
                                        }}
                                        value="option2" control={<Radio classes={{
                                            root: this.props.classes.root,
                                            checked: this.props.classes.checked,
                                        }} />} label="Option Two" />
                                </RadioGroup>
                            </FormControl>
                            <br />
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
                                label="Checkbox"
                            />
                            <br/>
                            <FormControl component="fieldset" required error margin="normal">
                            <InputLabel htmlFor="number-native-simple">Number</InputLabel>
                                <Select
                                    native
                                    value={this.state.number}
                                    onChange={this.handleChange('number')}
                                    inputProps={{
                                        name: 'number',
                                        id: 'number-native-simple',
                                    }}
                                    className={this.props.classes.textField}
                                >
                                    <option value={0}>Zero</option>
                                    <option value={10}>Ten</option>
                                    <option value={20}>Twenty</option>
                                    <option value={30}>Thirty</option>
                                </Select>
                            </FormControl>
                            <Button
                                className={this.props.classes.buttons}
                                variant="raised"
                                onClick={this.signupHandler}
                                fullWidth
                                color="secondary">
                                Button
                            </Button>
                        </form>
                    </Grid>
                </Grid>
            </Aux>
        );
    }
}

export default (withStyles(styles)(AllElements));