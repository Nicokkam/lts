import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import { MenuItem } from '@material-ui/core';
import TorqueTool from '../..//models/TorqueTool';
import AddressArea from '../..//models/AdressArea';
import ProfinetConfig from '../..//models/ProfinetConfig';

export default class ProfinetConfigForm extends Component {

    state = {
        addressAreas: []
    }

    render() {
        return (
            <div className="profinetconfig-form">
                <TextField
                    select
                    name="manufacturerId"
                    id="outlined-uncontrolled"
                    label="FABRICANTE"
                    value={torqueTool.manufacturerId}
                    margin="normal"
                    variant="outlined"
                    onChange={this.handleChange}
                ></TextField>
                ProfinetId;
       ProfinetName;
       HardwareDeviceId;
       HardwareId;
       WR_IDENTIFIER;
       WR_ABORT_JOB;
       WR_RESET_IDENTIFIER;
       WR_JOB_OFF;
       WR_INCREMENT;
       WR_DECREMENT;
       WR_BY_PASS_PSET;
       RD_BATCH_REMAINING;
       RD_BATCH_COMPLETED;
       RD_JOB_OK;
       RD_JOB_RUNNING;
       RD_IDENTIFIED;
       RD_ABORTED;
       RD_JOB_OFF;
       RD_TIMESTAMP;
       RD_JOB_ID;
            </div>
        )
    }
}
