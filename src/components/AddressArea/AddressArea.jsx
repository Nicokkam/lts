// TODO: Permitir que bits sejam permitidos apenas de 0 a 7
// TODO: Prever DBS e Bytes proibidos

import React, { Component } from 'react';
import { Paper, TextField } from '@material-ui/core';
// import AddressArea from '../../models/AdressArea';

const areas = [
    { id: 1, name: 'INPUT', value: '81' },
    { id: 2, name: 'OUTPUT', value: '82' },
    { id: 3, name: 'MEMORY', value: '83' },
    { id: 4, name: 'DB', value: '84' },
]

areas.push()

export default class AddressAreaForm extends Component {

    render() {
        // const addressArea = new AddressArea();
        const { addressArea } = this.props;
        const keys = Object.keys(addressArea);
        return (
            <div className="address-area">
                <Paper>
                    <div>{this.props.areaName}</div>
                    {
                        keys.map((k, i) =>
                            <TextField
                                key={i}
                                name={k}
                                id={'outlined-' + k}
                                label={k}
                                value={this.props.addressArea[k]}
                                margin="normal"
                                variant="outlined"
                                onChange={(e) => this.props.handleChange(e, this.props.areaName, this.props.addressArea)}
                            />
                        )
                    }
                </Paper>
            </div>
        )
    }
}
