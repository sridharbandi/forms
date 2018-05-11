import React, {Component} from 'react';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';
import Grid from 'material-ui/Grid';
import Aux from '../../hoc/Aux';
import Header from '../Header/Header';

class Profile extends Component {

    constructor(props) {
        super(props);
        if (localStorage.getItem('AUTH') === 'false') {
            this.props.history.push('/');
        }

    }

    signoutHandler = () => {
        localStorage.setItem('AUTH', 'false');
        this.props.history.push('/');
    }

    render() {
        return (
            <Aux>
                <Header/>
                <Grid container justify='center' spacing={0}>
                    <Grid item xs={10} sm={6}>
                        <br />
                        <br />
                        <Typography style={{color:'white',textAlign:'center'}} variant="headline" component="h3">
                            Welcome to <br />
                            <strong>Sample Web Application</strong><br />
                            This is free web application to practice Selenium
                        </Typography>
                        <br />
                        <Button
                            onClick={this.signoutHandler}
                            variant="raised"
                            fullWidth
                            color="secondary">
                            Logout
                        </Button>
                    </Grid>
                </Grid>

            </Aux>
        )
    }
}

export default Profile;