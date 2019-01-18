// TODO: Buscar IPs disponíveis
// TODO: Criar botão para abrir dialog de configuração do Profinet
// TODO: Apagar profinetID quando trocar de Profinet para Open Protocol

import React, { Component } from 'react';
import classNames from 'classnames';
import {
    withStyles, Button, MenuItem
    , Switch, FormControlLabel, TextField

} from '@material-ui/core';
import TorqueTool from '../../../models/TorqueTool';
// import ProfinetConfig from '../..//models/ProfinetConfig';

import ProfinetConfigDialog from '../../ProfinetConfigDialog/ProfinetConfigDialog';

import TorqueToolService from '../../../api/torquetools';
import IPService from '../../../api/ip';

const manufac = [
    { id: 1, name: 'Atlas Copco' },
    { id: 2, name: 'Desoutter' },
    { id: 3, name: 'Cleco' },
    { id: 4, name: 'Bosch' },
]

const models = [1, 2, 3, 4];

const styles = {
    root: {
        display: 'flex',
        flexWrap: 'wrap',

    },
    formRow: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        width: '70%',
        margin: 'auto',
        marginTop: '1.5%',
    },
    formRowButton: {
        display: 'flex',
        width: '100%',
        flexWrap: 'wrap',
        justifyContent: 'center',
        marginTop: '2%',
        marginBottom: '2%'

    },
    hidden: {
        display: 'none'
    }
};
class TorqueToolForm extends Component {

    _torqueToolService = new TorqueToolService();
    _ipService = new IPService();

    state = {
        equipType: this.props.equipType,
        equipName: "",
        torqueTool: new TorqueTool(),
        // profinetConfig: new ProfinetConfig(),
        dialogStatus: false
    }

    componentDidMount() {

    }

    componentWillReceiveProps(a, b) {
        
    }

    handleIPChange = (e) => {
        this._ipService.get({ address: e.target.value }).then(a => console.log(a[0]))
        // Realizar validações e colorir a borda do target caso esteja OK
        // Exibir uma lista com os IPs disponiveis
    }


    handleChange = (e) => {
        const { name, value } = e.target;
        const { torqueTool } = this.state;
        torqueTool[name] = value;
        this.setState({ torqueTool });
    }

    handleToggle = (e, checked) => {
        const { name } = e.target;
        const { torqueTool } = this.state;
        torqueTool[name] = checked;
        this.setState({ torqueTool });
        console.log(torqueTool);
    }

    handleDialog = (profinetConfig) => {
        const { torqueTool } = this.state;
        torqueTool.profinetConfigId = profinetConfig.id;
        this.setState({ dialogStatus: false, torqueTool })
    }

    openProfinetConfig = () => {
        // Busca o proximo ID disponivel e abre modal
        this.setState({ dialogStatus: true })

    }

    save = () => {
        const { torqueTool } = this.state.torqueTool;
        torqueTool.protocol = this.state.equipType;
        this._torqueToolService.create(torqueTool)
            .then(data => console.log(data));
    }

    render() {
        const { torqueTool } = this.state;
        const { classes } = this.props;
        return (
            <div className={classes.root}>

                <ProfinetConfigDialog
                    open={this.state.dialogStatus}
                    handleClose={this.handleDialog}
                />

                <div hidden>MENSAGEM DE ERRO</div>

                <div className={classes.formRow}>
                    <TextField
                        id="outlined-uncontrolled"
                        label="SSB"
                        InputLabelProps={{
                            shrink: true,
                        }}
                        margin="normal"
                        variant="outlined"
                        onChange={this.handleChange}
                    />
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
                        SelectProps={{
                            MenuProps: {
                                className: classes.menu,
                            },
                        }}

                    >
                        {models.map((m, i) => <MenuItem key={i} value={m} >{m}</MenuItem>)}
                    </TextField>



                    <FormControlLabel
                        labelPlacement="top"
                        label="COLETAR RESULTADOS"
                        control={
                            <Switch
                                name="collectResults"
                                value={+torqueTool.collectResults}
                                onChange={this.handleToggle}
                            />
                        }
                    >

                    </FormControlLabel>

                </div>

                <div className={classes.formRow}>
                    <TextField
                        id="outlined-uncontrolled"
                        label="DESCRIÇÃO"
                        margin="normal"
                        fullWidth
                        style={{ margin: 8 }}
                        variant="outlined"
                        onChange={this.handleChange}
                        InputLabelProps={{
                            shrink: true,
                        }}

                    />
                </div>

                <div className={classes.formRow}>
                    <TextField
                        id="outlined-uncontrolled"
                        label="IP ETHERNET"
                        defaultValue="192.27." // Validar para ver se começa com este prefixo, depois validar se já existe algum equipamento com esse ip
                        // className={classes.textField}
                        margin="normal"
                        variant="outlined"
                        onChange={this.handleIPChange}

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
                        disabled={this.props.equipType !== 1}
                        id="outlined-uncontrolled"
                        label="IP PROFINET"
                        defaultValue="192.27."
                        // className={classes.textField}
                        margin="normal"
                        variant="outlined"
                        onChange={this.handleChange}

                    />
                </div>

                {/* BOTÃO PARA ABRIR A JANELA DE CONFIGURAÇÃO PROFINET */}
                <div className={classNames(classes.formRow,
                    { [classes.hidden]: this.props.equipType !== 1 })}>
                    <TextField
                        disabled
                        id="outlined-uncontrolled"
                        label="PROFINET CONFIG"
                        value={torqueTool.profinetConfigId}
                        // className={classes.textField}
                        margin="normal"
                        variant="outlined"
                        onChange={this.handleChange}
                    />
                    {/* SE HOUVER UM NUMERO DIFERENTE DE 0, APAGAR TODOS OS IDS DO AREA TABLE, DEPOIS APAGAR O PROFINET ID CONFIG */}
                    <Button
                        onClick={this.openProfinetConfig}
                        variant="outlined"
                        color="secondary">
                        CONFIGURAR
                    </Button>
                </div>


                <div className={classes.formRow}>
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
                </div>

                <div className={classNames(classes.formRowButton, 
                { [classes.hidden] :  this.props.hideButton})}>
                    <Button size="large" variant="contained" color="primary" onClick={this.save} >SALVAR</Button>
                </div>

            </div>
        )
    }
}

export default withStyles(styles)(TorqueToolForm);