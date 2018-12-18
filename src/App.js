import React, { Component } from 'react';
import MainContainer from './containers/MainContainer';
import NavBar from './components/NavBar/NavBar';
import { createMuiTheme } from '@material-ui/core/styles';
import purple from '@material-ui/core/colors/purple';
import StationContainer from './containers/StationContainer/StationContainer';


const theme = createMuiTheme({
  typography: {
    useNextVariants: true,
  },
  palette: {
    primary: purple
  }
});



class App extends Component {
  render() {
    return (
      <div className="main-container">
        <NavBar />                   
        {/* <MainContainer /> */}
      </div>
    );
  }
}

export default App;
