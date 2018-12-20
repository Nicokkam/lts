// TODO: Permitir que bits sejam permitidos apenas de 0 a 7
// TODO: Prever DBS e Bytes proibidos

import React, { Component } from 'react';
import { Paper, TextField, MenuItem, withStyles } from '@material-ui/core';
import AddressArea from '../../models/AdressArea';

const styles = {
    root: {

    }
}

const keys = Object.keys(new AddressArea());

const areas = [
    { id: 1, name: 'INPUT', value: 81 },
    { id: 2, name: 'OUTPUT', value: 82 },
    { id: 3, name: 'MEMORY', value: 83 },
    { id: 4, name: 'DB', value: 84 },
]

areas.push()

class AddressAreaForm extends Component {

    state = {
        addressAreas: this.props.byteAreas.map((b, i) => (new AddressArea()))
    }

    componentDidMount() {
        const { byteAreas } = this.props;
        const { addressAreas } = this.state;        
    }

    handleChange = (e, index, property) => {
        // this.props.handleChange(this.state.addressAreas)
        const { addressAreas } = this.state;
        addressAreas[index][property] = e.target.value;
        this.setState({addressAreas: [...addressAreas]});
        this.props.onChange(this.state.addressAreas);
    }

    render() {
        const { byteAreas } = this.props;
        const { addressAreas } = this.state;
        return (
            <Paper>
                {
                    byteAreas.map((b, i) => <AddressAreaFields key={i} name={b} index={i} addressArea={addressAreas[i]} onChange={this.handleChange} />)
                }
            </Paper>

        )
    }
}

const AddressAreaFields = (props) => {
      
    return (
        <div>
            <div>{props.name.toUpperCase()}</div>
            {
                keys.map((k, i) => {
                    return (
                        <TextField
                            key={i}
                            name={k + '-' + props.index}
                            label={k.toUpperCase()}
                            value={props[k]}
                            onChange={(e) => props.onChange(e, props.index, k)}
                        />
                    )
                })
            }
        </div>
    )
}


export default withStyles(styles)(AddressAreaForm)