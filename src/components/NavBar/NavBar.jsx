import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import List from '@material-ui/core/List';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ArrowBackSharp from '@material-ui/icons/ArrowBackSharp';
import Typography from '@material-ui/core/Typography';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import StationContainer from '../../containers/StationContainer';

const menus = [
    'DASHBOARD',
    'POSTOS',
    'EQUIPAMENTOS',
    'RELATÓRIOS',
    'ACESSO',
    'BUSCAR LT',
    'ORGANIZAÇÃO',
    'AJUDA'
]
export default class NavBar extends Component {

    state = {
        open: false
    }

    handleOpen = () => {

    }

    handleClose = () => {

    }

    handleDrawer = () => {
        const open = !this.state.open;
        this.setState({ open });
    }

    render() {
        return (
            <div className="navbar-container">
                <AppBar style={{ background: '#3f51b5' }} position="static">
                    <Toolbar>
                        <IconButton onClick={this.handleDrawer} className="" color="inherit" aria-label="Menu">
                            <MenuIcon />
                        </IconButton>
                        <Typography variant="h6" color="inherit" className="">
                            LIVE TRUCK STANDARD
                        </Typography>
                        <Button variant="contained" component="span" style={{ color: 'white', background: '#39ce5e' }} >LOGIN</Button>
                    </Toolbar>
                </AppBar>
                <SwipeableDrawer
                    variant="persistent"
                    anchor="left"
                    open={this.state.open}
                    onClose={this.handleClose}
                    onOpen={this.handleOpen}
                >
                    {/* Listar topicos importantes */}
                    {/* DIVIDIR AS ABAS ENTRE BUS E TRUCK */}

                    <List>
                        {
                            menus.map((m, i) => {
                                return (
                                    <React.Fragment key={i}>
                                        <ListItem button>
                                            <ListItemText primary={m} />
                                        </ListItem>
                                        <Divider />
                                    </React.Fragment>
                                )
                            })
                        }
                    </List>

                    <Button variant="contained" onClick={this.handleDrawer} >FECHAR </Button>

                    <ArrowBackSharp />

                </SwipeableDrawer >
            </div>
        )
    }
}