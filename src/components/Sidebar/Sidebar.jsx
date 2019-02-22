import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import {
  CssBaseline, Toolbar, AppBar, IconButton, Typography
  , Drawer, Divider, List, ListItem, ListItemIcon, ListItemText
  , Button, TextField
} from '@material-ui/core';

import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';

import LoginService from '../../api/login';

import routes from '../../routes';

import { styles } from './styles'
import './Sidebar.css';

class Sidebar extends Component {

  state = {
    open: false,
    login: {
      user: '',
      pass: ''
    }
  }

  componentWillReceiveProps(props) {

  }

  handleDrawerOpen = () => {
    this.setState({ open: true });
  };

  handleDrawerClose = () => {
    this.setState({ open: false });
  };

  handleInputChange = name => $e => {
    const login = Object.assign({}, this.state.login);
    login[name] = $e.target.value;
    this.setState({ login });

  }

  onLogin = (loginTrigger) => {
    const _login = new LoginService();
    if (loginTrigger === 'login') {
      _login.auth({ user: 'ssbhpe', pass: 'Scaniascania2' }).then(user => {
        if (user) {
          this.props.handleLogin(user);
        }
      });
    } else {
      _login.logoff();
      this.props.handleLogin(null);
    }
    // Abrir alguma coisa para o usuario colocar o user e a senha
    // ou deixar dois campos para que ele insira
    // Utilizar o usuario na raiz do projeto
    // Enviar para pagina inicial após logar, terminar sessao ao fechar o browser
  }


  render() {
    const { classes, user } = this.props;

    return (
      <React.Fragment>
        <CssBaseline />
        <AppBar
          position="fixed"
          className={classNames(classes.appBar, { [classes.appBarShift]: this.state.open })}
        >
          <Toolbar disableGutters={!this.state.open} className={classes.toolbar}>
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
            <Typography className={classes.title} variant="h6" color="inherit">
              LIVE TRUCK STANDARD
            </Typography>
            <div className={classes.loginContainer}>
              {
                user.logged
                  ? <div>
                    <div>BEM VINDO, {user.ssb.toUpperCase()}</div>
                    <Button variant="contained" className={classes.logoffButton} onClick={() => this.onLogin('logoff')} >LOGOFF</Button>
                  </div>
                  :
                  <div className={classes.loginInput}>
                    <TextField
                      id="user"
                      label="Usuario"
                      className={classes.textField}
                      value={this.state.login.user}
                      onChange={this.handleInputChange('user')}
                      margin="normal"
                      variant="filled"
                    />
                    <TextField
                      id="pass"
                      type="password"
                      label="Senha"
                      className={classes.textField}
                      value={this.state.login.pass}
                      onChange={this.handleInputChange('pass')}
                      margin="normal"
                      variant="filled"
                      

                    />
                    <div className={classes.loginButtonContainer}>
                      <Button variant="contained" className={classes.loginButton} onClick={() => this.onLogin('login')} >LOGIN</Button>
                    </div>
                  </div>

              }

            </div>
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
                    <Link to={r.path} style={{ textDecoration: 'none' }}>
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
