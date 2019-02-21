import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { Route, Switch } from "react-router-dom";
import { ToastContainer } from 'react-toastify';

import routes from './routes';
import Sidebar from './components/Sidebar/Sidebar';

import 'react-toastify/dist/ReactToastify.css';


const styles = theme => ({
  root: {
    display: 'flex',
  },
  toolbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: '0 8px',
    ...theme.mixins.toolbar,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing.unit * 3,
  }
});


class App extends React.Component {

  state = {
    user: {
      ssb: '',
      logged: false
    }
  }

  handleLogin = (ssb) => {
    const defaultUser = {user: '', logged: false}
    const user = Object.assign({}, this.state.user);
    if (ssb) {
      user.ssb = ssb;
      user.logged = true;
      this.setState({user});
    } else {
      this.setState({user: defaultUser});
    }
  }

  render() {

    const { classes } = this.props;

    return (

      <div className={classes.root}>

        <Sidebar user={this.state.user} handleLogin={this.handleLogin} />
        <ToastContainer />

        {this.state.user.ssb}

        <main className={classes.content}>
          <div className={classes.toolbar} />
          <Switch>
            {
              routes.map((r, i) => (<Route key={i} exact path={r.path} component={r.component} />))
            }
          </Switch>

        </main>

      </div>


    );
  }
}

App.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(App);