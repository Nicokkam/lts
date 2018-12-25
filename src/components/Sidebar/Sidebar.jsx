import React, { Component } from 'react';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import {
  CssBaseline, Toolbar, AppBar, IconButton, Typography
  , Drawer, Divider, List, ListItem, ListItemIcon, ListItemText
  ,Button
} from '@material-ui/core';

import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import { Link } from 'react-router-dom';

import routes from '../../routes';

import { styles } from './styles'

class Sidebar extends Component {

  state = {
    open: false
  }

  handleDrawerOpen = () => {
    this.setState({ open: true });
  };

  handleDrawerClose = () => {
    this.setState({ open: false });
  };

  openLogin = () => {
    // Abrir alguma coisa para o usuario colocar o user e a senha
    // ou deixar dois campos para que ele insira
    // Utilizar o usuario na raiz do projeto
    // Enviar para pagina inicial após logar, terminar sessao ao fechar o browser
  }


  render() {
    const { classes } = this.props;
    return (
      <React.Fragment>
        <CssBaseline />
        <AppBar
          position="fixed"
          className={classNames(classes.appBar, {
            [classes.appBarShift]: this.state.open
          })}
        >
          <Toolbar disableGutters={!this.state.open}>
            <IconButton
              color="inherit"
              aria-label="Open drawer"
              onClick={this.handleDrawerOpen}
              className={classNames(classes.menuButton, {
                [classes.hide]: this.state.open,
              })}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" color="inherit" noWrap>
              LIVE TRUCK STANDARD
            </Typography>
            <Button variant="contained" className={classes.loginButton} onClick={this.openLogin} >LOGIN</Button>
          </Toolbar>
        </AppBar>

        <Drawer
          variant="permanent"
          className={classNames(classes.drawer, {
            [classes.drawerOpen]: this.state.open,
            [classes.drawerClose]: !this.state.open,
          })}
          classes={{
            paper: classNames({
              [classes.drawerOpen]: this.state.open,
              [classes.drawerClose]: !this.state.open,
            }),
          }}
          open={this.state.open}
        >
          <div className={classes.toolbar}>
            <IconButton onClick={this.handleDrawerClose}>
              <ChevronLeftIcon />
            </IconButton>
          </div>
          <Divider />
          <List>
            {
              routes.map((r, i) => {
                return (
                  <React.Fragment key={i}>
                    <Link to={r.path} style={{textDecoration: 'none'}}>
                      <ListItem button>
                        <ListItemIcon>
                          <r.icon />
                        </ListItemIcon>
                        <ListItemText primary={r.navbarName} />
                      </ListItem>                      
                    </Link>
                    <Divider />
                  </React.Fragment>
                )
              })
            }
          </List>

        </Drawer>

      </React.Fragment>
    )
  }
}

export default withStyles(styles, { withTheme: true })(Sidebar);
