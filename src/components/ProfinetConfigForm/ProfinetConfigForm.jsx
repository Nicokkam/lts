// TODO: Criar confirmação quando o usuário terminar de inserir todos os campos
// TODO: Validar se todos os campos foram preenchidos, caso não, exibir janela de confirmação
// TODO: Utilizar o ID do POST para complementar o objeto TorqueTool


import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import { MenuItem } from '@material-ui/core';
import TorqueTool from '../..//models/TorqueTool';
import AddressArea from '../..//models/AdressArea';
import ProfinetConfig from '../..//models/ProfinetConfig';
import AddressAreaForm from '../AddressArea/AddressArea';

const byteAreas = [
    'WR_IDENTIFIER',
    'WR_ABORT_JOB',
    'WR_RESET_IDENTIFIER',
    'WR_JOB_OFF',
    'WR_INCREMENT',
    'WR_DECREMENT',
    'WR_BY_PASS_PSET',
    'RD_BATCH_REMAINING',
    'RD_BATCH_COMPLETED',
    'RD_JOB_OK',
    'RD_JOB_RUNNING',
    'RD_IDENTIFIED',
    'RD_ABORTED',
    'RD_JOB_OFF',
    'RD_TIMESTAMP',
    'RD_JOB_ID'
];



export default class ProfinetConfigForm extends Component {


    state = {
        profinetConfig: new ProfinetConfig()
    }

    handleChange = (e) => {
        const { profinetConfig } = this.state;
        profinetConfig[e.target.name] = e.target.value;
        this.setState({ profinetConfig });
    }

    updateArea = (event, property) => {
        const { profinetConfig } = this.state;
        profinetConfig[property][event.target.name] = event.target.value;
        this.setState({ profinetConfig });
        console.log(profinetConfig);
    }

    render() {
        const { profinetConfig } = this.state;
        return (
            <div className="profinetconfig-form">

                {/* Descobrir como pegar os profinet IDs, ou como abastecer posteriormente */}
                <TextField
                    name="profinetId"
                    id="outlined-uncontrolprofinetIdled"
                    label="profinetId"
                    value={profinetConfig.profinetId}
                    margin="normal"
                    type="number"
                    variant="outlined"
                    onChange={this.handleChange}
                />
                <TextField
                    name="profinetName"
                    id="outlined-profinetName"
                    label="profinetName"
                    value={profinetConfig.profinetName}
                    margin="normal"
                    variant="outlined"
                    onChange={this.handleChange}
                />

                <TextField
                    name="hardwareDeviceId"
                    id="outlined-hardwareDeviceId"
                    label="hardwareDeviceId"
                    value={profinetConfig.hardwareDeviceId}
                    margin="normal"
                    type="number"
                    variant="outlined"
                    onChange={this.handleChange}
                >
                </TextField>
                <TextField
                    name="hardwareId"
                    id="outlined-hardwareId"
                    label="hardwareId"
                    value={profinetConfig.hardwareId}
                    margin="normal"
                    type="number"
                    variant="outlined"
                    onChange={this.handleChange}
                >
                </TextField>
                {
                    byteAreas.map((b, i) => {
                        return (
                            <AddressAreaForm
                                key={i}
                                addressArea={this.state.profinetConfig[b]}
                                areaName={b}
                                handleChange={this.updateArea}
                            />
                        )
                    })
                }


            </div>
        )
    }
}
