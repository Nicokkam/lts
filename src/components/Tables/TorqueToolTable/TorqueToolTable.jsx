// TODO: Validar se há ID para as configurações de: Ethernet, ProfinetIP, e Profinet Hardware
// TODO: Para configuração de IP, exibir apenas o IP do equipamento
// TODO: Para configuração profinet, exibir um botão que abra um diolog exibindo as demais configurações
// TODO: Criar botão para ver o restante das informações da tabela,
// TODO: Criar botao de editar e botao para excluir 

import React, { Component } from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import { Paper, withStyles, Button, IconButton, Icon } from '@material-ui/core';
import MuiDataTable from 'mui-datatables';

import Edit from '@material-ui/icons/Edit';
import Delete from '@material-ui/icons/Delete';

import TorqueToolService from '../../../api/torquetools';

import {columns} from './columns';
import TorqueToolDialog from '../../Dialogs/TorqueToolDialog';

const fakeData = [
    ["Joe James", "Test Corp", "Yonkers", "NY", 'a', 'b',],
    ["John Walsh", "Test Corp", "Hartford", "CT", 'a', 'b',],
    ["Bob Herm", "Test Corp", "Tampa", "FL", 'a', 'b', ],
    ["James Houston", "Test Corp", "Dallas", "TX", 'a', 'b', ],
];

const iconButton = (prop) => (<IconButton><Icon>remove_red_eye</Icon></IconButton>);

fakeData.map((i,j) => i.push(iconButton(i[4])))

const tableOptions = {
    selectableRows: false,
    rowsPerPage: 50,    
    filterType: 'dropdown',    
}



const styles = {
    'header-id': {

    }
}

class TorqueToolTable extends Component {

    _torqueToolService = new TorqueToolService();

    state = {
        equipType: this.props.equipType,
        torqueToolList: [],
        dialog: false
    }

    componentDidMount() {
        // TODO: Fazer a requisição dos equipamentos aqui
        // this._torqueToolService.get()
        const torqueToolList = [
            
        ]
        this.setState({ torqueToolList })
    }

    handleRowClick = (rowData, rowMeta) => {
        console.log(rowData)
        console.log(rowMeta)
    }

    handleOpenDialog = () => {
        const {dialog} = this.state;
        this.setState({dialog: !dialog})
    }

    handleDialog = (action) => {
        if (action === 'close') {
            this.setState({dialog: false});
            return;
        }        
    }

    render() {
        const { classes } = this.props;
        // const headers = columns.map((c, i) => (<TableCell className={classes['header-' + c]} key={i}>{c.toUpperCase()}</TableCell>));
        const { torqueToolList, dialog } = this.state;
        const { equipType } = this.props;
        return (

            <Paper>                  

            <TorqueToolDialog 
                open={dialog} 
                equipType={equipType} 
                handleDialog={this.handleDialog}
                // data={data}
            />
            <Button onClick={this.handleOpenDialog}>TESTE</Button>

                <MuiDataTable
                    title="TORQUE TOOLS"
                    data={fakeData}
                    columns={columns}
                    options={tableOptions}
                    onRowClick={this.handleRowClick}
                />               
            </Paper>

        )
    }
}

export default withStyles(styles)(TorqueToolTable);

// http://jira-sla.scania.com/secure/Dashboard.jspa?selectPageId=13442