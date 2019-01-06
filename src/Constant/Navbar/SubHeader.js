import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

const styles = {
    root: {
        flexGrow: 1,
    },
    grow: {
        flexGrow: 1,
        borderBottom: '1px solid darkgray',
    },
    bg: {
        backgroundColor: '#424242',
        // marginTop: '3.3%',
        height: '100px',
        paddingRight: '12%',
        paddingLeft: '10%',
    },
};

function ButtonAppBar(props) {
    const { classes } = props;
    return (
        <div className={classes.root}>
            <AppBar style={styles.bg} position="static">
                <Toolbar style={{ margin: '0px' }}>
                    <Typography variant="h6" color="inherit" className={classes.grow}>
                        Logo
                    </Typography>
                </Toolbar>
                <div style={{ paddingLeft: '3%' }}>
                    <a href="#" className="navLink">Home</a>
                    <a href="#" className="navLink">Shop</a>
                    <a href="#" className="navLink">Blog</a>
                    <a href="#" className="navLink">Contact</a>
                </div>
            </AppBar>



        </div>
    );
}

ButtonAppBar.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ButtonAppBar);