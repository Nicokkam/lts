import React, { Component } from 'react';
// import { AppBar, Tabs, Tab, Paper } from '@material-ui/core';
import { Button, Paper } from '@material-ui/core';
import TorqueToolTable from '../../components/TorqueToolTable/TorqueToolTable';
import TorqueToolForm from '../../components/TorqueToolForm/TorqueToolForm';

const equipTypes = [
    { id: 0, component: TorqueToolTable },
    { id: 1, component: TorqueToolTable },
    { id: 2, component: TorqueToolTable },
    { id: 3, component: TorqueToolTable }
]

export default class StationContainer extends Component {

    state = {
        selectedType: 0,
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
                    <select  onChange={this.handleTableChange} >
                        {equipTypes.map((e, i) => <option key={i} value={e.id} >{e.id}</option>)}
                    </select>
                    {/* {selectedType === 0 && <TorqueToolTable equipType={selectedType} />} */}
                    {/* {selectedType === 1 && <TorqueToolTable equipType={selectedType} />} */}
                    {selectedType === 0 && <TorqueToolForm equipType={selectedType} />}
                    {selectedType === 1 && <TorqueToolForm equipType={selectedType} />}
                    {/* FAZER UM CASE DE ACORDO COM O EQUIPTYPE SELECIONADO */}
                    {/* CRIAR UMA VIEW ESPECIFICA PARA CADA TIPO DE TABELA */}
                </Paper>
            </div>
        )
    }
}
