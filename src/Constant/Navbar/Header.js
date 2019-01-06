import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

import { MDBIcon, MDBBtn } from "mdbreact";
import './index.css';
import SubHeader from './SubHeader'
const styles = {
  root: {
    flexGrow: 1,
  },
  mailIcon: {
    marginRight: '.3%',
    cursor: 'pointer',
  },
  mail: {
    display: 'inline',
    padding: '7px 0px',
    lineHeight: '15px',
  },
  bg: {
    backgroundColor: '#424242',
    padding: '0px 5%',
    width: '100%'
  },
  searchBar: {
    backgroundColor: '#424242',
    color: 'white',
    border: 'black',
    height: '8%',
    padding: '13px 10px',
    border: '1px solid #222',
  },
  searchIcon: {
    // marginLeft: '.4%',
    cursor: 'pointer',
    backgroundColor: '#222',
    padding: '11px 10px 10px 10px',
    border: '1px solid #222',

  },
};

function DenseAppBar(props) {
  const { classes } = props;
  return (
    <div style={{position: 'static'}} >
      <AppBar position="static">
        <div className="root"  style={styles.bg}>
          <Typography color="inherit" style={styles.mail}>
            <MDBIcon icon="envelope-o" />
            muhammadsarim@gmail.com
          </Typography>
          <div
            className="float">
            <div className="search" style={{display: 'inline-block'}}>
              <input type="search" className="searchBar" placeholder="search" style={styles.searchBar} />
              <div style={styles.searchIcon}>
              <MDBIcon icon="search" />
            </div>
            </div>
           
            <br className="br"/>
              <div style={{ border: 'black' }} className="account">
                <MDBBtn className="cartBtn">
                <MDBIcon icon="user" /> Account</MDBBtn>
              </div>
              <div style={{ border: 'black' }} className="account">
                <MDBBtn className="cartBtn"  color="deep-orange" >
                <MDBIcon icon="shopping-cart" /> My Cart </MDBBtn>
              </div>
          </div>
        </div>
      </AppBar>
     
    </div>
  );
}

DenseAppBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(DenseAppBar);