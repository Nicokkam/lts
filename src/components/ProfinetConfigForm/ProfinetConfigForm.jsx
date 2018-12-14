import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import { MenuItem } from '@material-ui/core';
import TorqueTool from '../..//models/TorqueTool';
import AddressArea from '../..//models/AdressArea';
import ProfinetConfig from '../..//models/ProfinetConfig';

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

    }

    render() {
        return (
            <div className="profinetconfig-form">

                {/* Descobrir como pegar os profinet IDs, ou como abastecer posteriormente */}
                <TextField
                    select
                    name="profinetId"
                    id="outlined-uncontrolprofinetIdled"
                    label="profinetId"
                    value=""
                    margin="normal"
                    variant="outlined"
                    onChange={this.handleChange}
                >
                </TextField>
                <TextField
                    select
                    name="profinetName"
                    id="outlined-profinetName"
                    label="profinetName"
                    value=""
                    margin="normal"
                    variant="outlined"
                    onChange={this.handleChange}
                >
                </TextField>
                <TextField
                    select
                    name="HardwareDeviceId"
                    id="outlined-profinetName"
                    label="HardwareDeviceId"
                    value=""
                    margin="normal"
                    variant="outlined"
                    onChange={this.handleChange}
                >
                </TextField>
                <TextField
                    select
                    name="HardwareId"
                    id="outlined-profinetName"
                    label="HardwareId"
                    value=""
                    margin="normal"
                    variant="outlined"
                    onChange={this.handleChange}
                >
                </TextField>
                {
                    byteAreas.map((b, i) => {
                        return (
                            <TextField>
                                <MenuItem></MenuItem>
                            </TextField>
                        );
                    })
                }


            </div>
        )
    }
}
