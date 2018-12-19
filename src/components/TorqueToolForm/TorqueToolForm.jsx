// TODO: Buscar IPs disponíveis
// TODO: Criar botão para abrir dialog de configuração do Profinet

import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import { Button, MenuItem } from '@material-ui/core';
import TorqueTool from '../..//models/TorqueTool';
import ProfinetConfig from '../..//models/ProfinetConfig';

import TorqueToolService from '../../api/torquetools';
import ProfinetConfigForm from '../ProfinetConfigForm/ProfinetConfigForm';

const manufac = [
    { id: 1, name: 'Atlas Copco' },
    { id: 2, name: 'Desoutter' },
    { id: 3, name: 'Cleco' },
    { id: 4, name: 'Bosch' },
]

const models = [1, 2, 3, 4];

export default class TorqueToolForm extends Component {

    _torqueToolService = new TorqueToolService();

    state = {
        equipType: this.props.equipType,
        equipName: "",
        torqueTool: new TorqueTool(),
        profinetConfig: new ProfinetConfig()
    }

    componentDidMount() {
        const torqueTool = this.state.torqueTool;
        torqueTool.protocol = this.state.equipType;
        this.setState({ torqueTool });
    }

    handleChange = (e) => {
        const { name, value } = e.target;
        const { torqueTool } = this.state;
        torqueTool[name] = value;
        this.setState({ torqueTool });
        console.log(torqueTool);
    }

    save = () => {
        this._torqueToolService.create(this.state.torqueTool)
            .then(data => console.log(data));
    }

    render() {
        const { torqueTool } = this.state;
        return (
            <div className="torquetool-form">
                <TextField
                    id="outlined-uncontrolled"
                    label="SSB"
                    defaultValue="0"
                    margin="normal"
                    variant="outlined"
                    onChange={this.handleChange}
                />

                {/* <TextField
                    // select
                    disabled
                    name="protocol"
                    id="outlined-protocol"
                    label="PROTOCOLO"
                    value={0}
                    margin="normal"
                    variant="outlined"
                    onChange={this.handleChange}
                > */}
                {/* {protocols.map((p, i) => <MenuItem key={i} value={p.id}>{p.name}</MenuItem>)} */}
                {/* </TextField> */}
                <TextField
                    select
                    name="manufacturerId"
                    id="outlined-uncontrolled"
                    label="FABRICANTE"
                    value={torqueTool.manufacturerId}
                    margin="normal"
                    variant="outlined"
                    onChange={this.handleChange}
                >
                    {manufac.map((m, i) => <MenuItem key={i} value={m.id}>{m.name}</MenuItem>)}
                </TextField>
                <TextField
                    select
                    name="modelId"
                    id="outlined-uncontrolled"
                    label="MODELO"
                    margin="normal"
                    value={torqueTool.modelId}
                    variant="outlined"
                    onChange={this.handleChange}

                >
                    {models.map((m, i) => <MenuItem key={i} value={m} >{m}</MenuItem>)}
                </TextField>
                <TextField
                    id="outlined-uncontrolled"
                    label="IP ETHERNET"
                    defaultValue="192.27." // Validar para ver se começa com este prefixo, depois validar se já existe algum equipamento com esse ip
                    // className={classes.textField}
                    margin="normal"
                    variant="outlined"
                    onChange={this.handleChange}

                />
                <TextField
                    name="port"
                    id="outlined-uncontrolled"
                    label="PORTA"
                    margin="normal"
                    type="number"
                    value={torqueTool.port}
                    variant="outlined"
                    onChange={this.handleChange}
                />
                <TextField
                    disabled={torqueTool.protocol !== 1}
                    id="outlined-uncontrolled"
                    label="IP PROFINET"
                    defaultValue="192.27."
                    // className={classes.textField}
                    margin="normal"
                    variant="outlined"
                    onChange={this.handleChange}

                />
                {/* BOTÃO PARA ABRIR A JANELA DE CONFIGURAÇÃO PROFINET */}
                {/* <TextField
                    disabled={torqueTool.protocol !== 0}
                    id="outlined-uncontrolled"
                    label="PROFINET CONFIG"
                    defaultValue="foo"
                    // className={classes.textField}
                    margin="normal"
                    variant="outlined"
                    onChange={this.handleChange}

                /> */}
                <TextField
                    id="outlined-uncontrolled"
                    label="DESCRIÇÃO"
                    margin="normal"
                    variant="outlined"
                    onChange={this.handleChange}

                />
                <TextField
                    select
                    name="collectResults"
                    id="outlined-uncontrolled"
                    label="COLETA RESULTADOS?"
                    margin="normal"
                    value={torqueTool.collectResults}
                    variant="outlined"
                    onChange={this.handleChange}
                >
                    <MenuItem value={0}>NÃO</MenuItem>
                    <MenuItem value={1}>SIM</MenuItem>
                </TextField>


                <TextField
                    id="outlined-uncontrolled"
                    label="CONTROLADORA(SSB)"
                    defaultValue={0}
                    // className={classes.textField}
                    margin="normal"
                    variant="outlined"
                    onChange={this.handleChange}

                />
                <TextField
                    id="outlined-uncontrolled"
                    label="SERIAL (FERRAMENTA)"
                    defaultValue="0"
                    // className={classes.textField}
                    margin="normal"
                    variant="outlined"
                    onChange={this.handleChange}

                />
                <TextField
                    id="outlined-uncontrolled"
                    label="FIRMWARE"
                    defaultValue="0"
                    // className={classes.textField}
                    margin="normal"
                    variant="outlined"
                    onChange={this.handleChange}

                />
                <TextField
                    name="isWireless"
                    id="outlined-uncontrolled"
                    label="WIRELESS"
                    select
                    // defaultValue={0}
                    // className={classes.textField}
                    margin="normal"
                    value={torqueTool.isWireless}
                    variant="outlined"
                    onChange={this.handleChange}

                >
                    <MenuItem value={0}>NÃO</MenuItem>
                    <MenuItem value={1}>SIM</MenuItem>
                </TextField>
                <Button variant="contained" color="primary" onClick={this.save} >SALVAR</Button>

                <div>
                    <ProfinetConfigForm />
                </div>
            </div>
        )
    }
}
