

import React, { Component } from 'react';
import { withStyles } from '@material-ui/core';
// import { AppBar, Tabs, Tab, Paper } from '@material-ui/core';

import { Paper, Tab, Tabs, AppBar, Typography } from '@material-ui/core';

import TorqueToolTable from '../../components/Tables/TorqueToolTable/TorqueToolTable';
// import TorqueToolForm from '../../components/TorqueToolForm/TorqueToolForm';

import WorkplaceService from '../../api/workplace';


const styles = {

}


class StationContainer extends Component {

    a = new WorkplaceService();

    state = {
        selectedType: 1,
        value: 0,
        componentRender: <TorqueToolTable />,
        selectedTab: 0
    }

    handleTableChange = (e) => {
        this.setState({
            selectedType: +e.target.value
        })
    }

    handleTabChange = (e, value) => {
        this.setState({ selectedTab: value })
    }

    componentDidMount() {
        // this.a.getByParameter().then(a => console.log(a))
    }


    render() {
        // const { selectedType } = this.state;
        return (

            <Paper>
                <Typography variant="headline" align="center"  gutterBottom >
                STATUS DOS POSTOS
              </Typography>
                <AppBar position="static" color="default">
                    <Tabs
                        value={this.state.selectedTab}
                        indicatorColor="primary"
                        textColor="primary"
                        fullWidth
                        onChange={this.handleTabChange}
                    >
                        <Tab value={0} label="EQUIPAMENTOS" />
                        <Tab value={1} label="PESSOAS" />

                    </Tabs>
                </AppBar>
            </Paper>         
         
        )
    }
}

export default withStyles(styles)(StationContainer);