// TODO: Criar confirmação quando o usuário terminar de inserir todos os campos
// TODO: Validar se todos os campos foram preenchidos, caso não, exibir janela de confirmação
// TODO: Utilizar o ID do POST para complementar o objeto TorqueTool

import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
// import { MenuItem } from '@material-ui/core';

import AddressArea from '../../models/AdressArea';
import ProfinetConfig from '../../models/ProfinetConfig';
import AddressAreaForm from '../AddressArea/AddressArea';

import { withStyles, Button, Dialog, DialogActions, DialogContent, DialogTitle } from '@material-ui/core';

import ProfinetConfigService from '../../api/profinetConfig';

const byteAreas = [
    'wR_IDENTIFIER',
    'wR_ABORT_JOB',
    'wR_RESET_IDENTIFIER',
    'wR_JOB_OFF',
    'wR_INCREMENT',
    'wR_DECREMENT',
    'wR_BY_PASS_PSET',
    'rD_BATCH_REMAINING',
    'rD_BATCH_COMPLETED',
    'rD_JOB_OK',
    'rD_JOB_RUNNING',
    'rD_IDENTIFIED',
    'rD_ABORTED',
    'rD_JOB_OFF',
    'rD_TIMESTAMP',
    'rD_JOB_ID'
];

const styles = {
    root: {
        display: 'flex',
        width: 'fit-content'
    },
    formRow: {
        display: 'flex',
    }

}



class ProfinetConfigDialog extends Component {

    _profinetConfigService = new ProfinetConfigService();

    state = {
        profinetConfig: new ProfinetConfig(),
        addressAreas: []
    }

    save = () => {
        const model = {
            profinetConfig: this.state.profinetConfig,
            addressArea: this.state.addressAreas
        }

        this._profinetConfigService.create(model).then(config => {
            const { profinetConfig } = this.state;
            profinetConfig['id'] = config.id;
            this.setState({ profinetConfig });
            this.props.handleClose(profinetConfig);
        }).catch(e => e);
            

    }

    componentDidMount() {
        const arr = []
        byteAreas.map(a => arr.push({ [a]: new AddressArea() }))
        this.setState({ addressAreas: [...arr] })
    }

    handleChange = (e) => {
        const { profinetConfig } = this.state;
        profinetConfig[e.target.name] = e.target.value;
        this.setState({ profinetConfig });
    }

    handleAreaUpdate = (areas) => {
        this.setState({ addressAreas: [...areas] })
    }

    render() {
        const { classes } = this.props;
        const { profinetConfig } = this.state;
        return (
            <Dialog
                open={this.props.open}
                className={classes.root}
                maxWidth="lg"
                aria-labelledby="dialog-title"
            >
                <DialogTitle id="dialog-title">CONFIGURAÇÃO PROFINET</DialogTitle>

                <DialogContent>

                    {/* Descobrir como pegar os profinet IDs, ou como abastecer posteriormente */}
                    <div className={classes.formRow}>
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
                    </div>

                    <AddressAreaForm byteAreas={byteAreas} onChange={this.handleAreaUpdate} />


                </DialogContent>
                <DialogActions>
                    <Button onClick={this.props.handleClose} color="primary">
                        Cancel
                    </Button>
                    <Button onClick={this.save} color="primary">
                        SALVAR
                    </Button>
                </DialogActions>

            </Dialog>
        )
    }
}

export default withStyles(styles)(ProfinetConfigDialog);