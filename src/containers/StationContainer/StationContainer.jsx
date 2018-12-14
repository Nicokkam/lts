import React, { Component } from 'react';
// import { AppBar, Tabs, Tab, Paper } from '@material-ui/core';
import { Button, TextField, MenuItem, Paper } from '@material-ui/core';

import TorqueToolTable from '../../components/TorqueToolTable/TorqueToolTable';
import TorqueToolForm from '../../components/TorqueToolForm/TorqueToolForm';

const equipTypes = [
    { id: 1, name: 'Profinet', component: TorqueToolTable },
    { id: 2, name: 'Open Protocol', component: TorqueToolTable },
    { id: 3, component: TorqueToolTable },
    { id: 4, component: TorqueToolTable }
]

const protocols = [
    { id: 1, name: 'Profinet' },
    { id: 2, name: 'Open Protocol' }
]

export default class StationContainer extends Component {

    state = {
        selectedType: 1,
        value: 0,
        componentRender: <TorqueToolTable />
    }

    handleTableChange = (e) => {
        this.setState({
            selectedType: +e.target.value
        })
    }


    render() {
        const { selectedType } = this.state;
        return (
            <div className="station-container">
                <Button size="large" variant="contained" color="primary">EQUIPAMENTOS</Button>
                <Button size="large" variant="contained" color="primary">POSTOS</Button>
                <Paper>
                    <TextField
                        select
                        style={{width: '200px'}}
                        name="equipType"
                        id="outlined-equipType"
                        label="TIPO DE EQUIPAMENTO"
                        value={selectedType}
                        margin="dense"
                        variant="outlined"
                        onChange={this.handleTableChange} >
                        {equipTypes.map((e, i) => {
                            return (
                                <MenuItem key={i} value={e.id}>{e.id} - {e.name}</MenuItem>
                            );
                        }) }
                    </TextField>
                {/* {selectedType === 0 && <TorqueToolTable equipType={selectedType} />} */}
                {/* {selectedType === 1 && <TorqueToolTable equipType={selectedType} />} */}
                {selectedType === 1 && <TorqueToolForm equipType={selectedType} />}
                {selectedType === 2 && <TorqueToolForm equipType={selectedType} />}
                {/* FAZER UM CASE DE ACORDO COM O EQUIPTYPE SELECIONADO */}
                {/* CRIAR UMA VIEW ESPECIFICA PARA CADA TIPO DE TABELA */}
                </Paper>
            </div >
        )
    }
}
