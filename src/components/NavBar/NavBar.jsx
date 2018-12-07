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
import Typography from '@material-ui/core/Typography';


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
                <AppBar style={{ backgroundColor: '#393840' }} position="static">
                    <Toolbar>
                        <IconButton onClick={this.handleDrawer} className="" color="inherit" aria-label="Menu">
                            <MenuIcon />
                        </IconButton>
                        <Typography variant="h6" color="inherit" className="">
                            LIVE TRUCK STANDARD
                        </Typography>
                        <Button variant="contained" component="span" style={{color: 'white', background: '#39ce5e'}} >LOGIN</Button>
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
                        <ListItem button>
                            <ListItemText primary="DASHBOARD" />
                        </ListItem>
                        <Divider />
                        <ListItem button>
                            <ListItemText primary="POSTOS" />
                        </ListItem>
                        <Divider />
                        <ListItem button>
                            <ListItemText primary="EQUIPAMENTOS" />
                        </ListItem>
                        <Divider />
                        <ListItem button>
                            <ListItemText primary="RELATÓRIOS" />
                        </ListItem>
                        <Divider />
                        <ListItem button>
                            <ListItemText primary="ACESSO" />
                        </ListItem>
                        <Divider />
                        <ListItem button>
                            <ListItemText primary="ORGANIZAÇÃO" />
                        </ListItem>
                        <Divider />
                        <ListItem button>
                            <ListItemText primary="AJUDA" />
                        </ListItem>
                        <Divider />
                    </List>                    
                    
                    <button onClick={this.handleDrawer} >CLOSE</button> {/* EXIBIR UM ICONE DE SETA PARA VOLTAR */}

                </SwipeableDrawer >
            </div>
        )
    }
}

        /*
        
        import React from 'react';
        import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
                
                import Button from '@material-ui/core/Button';
                
                
                
function ButtonAppBar(props) {
  const {classes} = props;
                return (
    <div className={classes.root}>
                    <AppBar position="static">
                        <Toolbar>
                            <IconButton className={classes.menuButton} color="inherit" aria-label="Menu">
                                <MenuIcon />
                            </IconButton>
                            <Typography variant="h6" color="inherit" className={classes.grow}>
                                News
          </Typography>
                            <Button color="inherit">Login</Button>
                        </Toolbar>
                    </AppBar>
                </div>
                );
              }
              
ButtonAppBar.propTypes = {
                    classes: PropTypes.object.isRequired,
              };
              
              export default withStyles(styles)(ButtonAppBar);
              
              
*/