

import React, { Component } from 'react';
import { withStyles } from '@material-ui/core';
// import { AppBar, Tabs, Tab, Paper } from '@material-ui/core';

import { Paper, Tab, Tabs, AppBar } from '@material-ui/core';

import TorqueToolTable from '../../components/Tables/TorqueToolTable/TorqueToolTable';
// import TorqueToolForm from '../../components/TorqueToolForm/TorqueToolForm';


import WorkplaceService from '../../api/workplace';

// const equipTypes = [
//     { id: 1, name: 'Profinet', component: TorqueToolTable },
//     { id: 2, name: 'Open Protocol', component: TorqueToolTable },
//     { id: 3, component: TorqueToolTable },
//     { id: 4, component: TorqueToolTable }
// ]

// const protocols = [
//     { id: 1, name: 'Profinet' },
//     { id: 2, name: 'Open Protocol' }
// ]

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