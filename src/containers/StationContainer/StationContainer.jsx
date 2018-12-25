

import React, { Component } from 'react';
import {withStyles} from '@material-ui/core';
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
        this.a.getByParameter().then(a => console.log(a))
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
                        <Tab value={0} label="Active" />                        
                        <Tab value={1} label="Active" />
                    </Tabs>
                </AppBar>                
            </Paper>

            // <div>                
            //     <Paper>
            //     {/* <Button size="large" variant="contained" color="primary">EQUIPAMENTOS</Button>
            //     <Button size="large" variant="contained" color="primary">POSTOS</Button> */}
            //         <TextField
            //             select
            //             style={{width: '200px'}}
            //             name="equipType"
            //             id="outlined-equipType"
            //             label="TIPO DE EQUIPAMENTO"
            //             value={selectedType}
            //             margin="dense"
            //             variant="outlined"
            //             onChange={this.handleTableChange} >
            //             {equipTypes.map((e, i) => {
            //                 return (
            //                     <MenuItem key={i} value={e.id}>{e.id} - {e.name}</MenuItem>
            //                 );
            //             }) }
            //         </TextField>
            //     {/* {selectedType === 0 && <TorqueToolTable equipType={selectedType} />} */}
            //     {/* {selectedType === 1 && <TorqueToolTable equipType={selectedType} />} */}
            //     {selectedType === 1 && <TorqueToolForm equipType={selectedType} />}
            //     {selectedType === 2 && <TorqueToolForm equipType={selectedType} />}
            //     {/* FAZER UM CASE DE ACORDO COM O EQUIPTYPE SELECIONADO */}
            //     {/* CRIAR UMA VIEW ESPECIFICA PARA CADA TIPO DE TABELA */}
            //     </Paper>
            // </div >
        )
    }
}

export default withStyles(styles)(StationContainer);