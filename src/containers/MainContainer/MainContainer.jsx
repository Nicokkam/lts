import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

function TabContainer(props) {
  return (
    <Typography component="div" style={{ padding: 8 * 3 }}>
      {props.children}
    </Typography>
  );
}

TabContainer.propTypes = {
  children: PropTypes.node.isRequired,
};

const styles = theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
});

class SimpleTabs extends React.Component {
  state = {
    value: 0,
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  render() {
    const { classes } = this.props;
    const { value } = this.state;

    return (
      <div className={classes.root}>
        <AppBar style={{ backgroundColor: '#393840' }} position="static">
          <Tabs  value={value} onChange={this.handleChange}>
            <Tab label="E " />
            <Tab label="D" />
            <Tab label="A" />
            <Tab label="R" />
            <Tab label="T" />
          </Tabs>
        </AppBar>
        {value === 0 && <TabContainer><Paper style={{height: '300px'}}>PAGINA 1</Paper></TabContainer>}
        {value === 1 && <TabContainer>TORQUIMETROS</TabContainer>}
        {value === 2 && <TabContainer>ROTEADORES</TabContainer>}
        {value === 3 && <TabContainer>ROTEADORES</TabContainer>}
        {value === 4 && <TabContainer>ROTEADORES</TabContainer>}
      </div>
    );
  }
}

SimpleTabs.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleTabs);