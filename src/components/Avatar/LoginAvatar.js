import React from 'react';
import Icon from 'material-ui/Icon';
import Grid from 'material-ui/Grid';

const useravatar = (props) => (
    <Grid container justify='center' spacing={0} style={{marginTop: 50}}>
        <Icon color="secondary" style={{ fontSize: 80 }} >account_circle</Icon>
    </Grid>
);

export default useravatar;