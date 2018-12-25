// TODO: Validar se há ID para as configurações de: Ethernet, ProfinetIP, e Profinet Hardware
// TODO: Para configuração de IP, exibir apenas o IP do equipamento
// TODO: Para configuração profinet, exibir um botão que abra um diolog exibindo as demais configurações


import React, { Component } from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import { Paper, withStyles } from '@material-ui/core';
import MuiDataTable from 'mui-datatables';

import Edit from '@material-ui/icons/Edit';
import Delete from '@material-ui/icons/Delete';

import TorqueToolService from '../../../api/torquetools';

const columns = [
    'id', 'ssb', 'manufacturer', 'ethernetIPId', 'description', 'collectResults'
];

const fakeData = [
    ["Joe James", "Test Corp", "Yonkers", "NY", 'a', 'b'],
    ["John Walsh", "Test Corp", "Hartford", "CT",'a', 'b'],
    ["Bob Herm", "Test Corp", "Tampa", "FL",'a', 'b'],
    ["James Houston", "Test Corp", "Dallas", "TX", 'a', 'b'],
];

const styles = {
    'header-id': {

    }
}

class TorqueToolTable extends Component {

    _torqueToolService = new TorqueToolService();

    state = {
        equipType: this.props.equipType,
        torqueToolList: []
    }

    componentDidMount() {
        // TODO: Fazer a requisição dos equipamentos aqui
        const torqueToolList = [
            { 'id': 1, 'ssb': 1, 'manufacturer': 1, 'ethernetIPId': 1, 'description': 1, 'collectResults': 1 },
            { 'id': 1, 'ssb': 1, 'manufacturer': 1, 'ethernetIPId': 1, 'description': 1, 'collectResults': 1 },
            { 'id': 1, 'ssb': 1, 'manufacturer': 1, 'ethernetIPId': 1, 'description': 1, 'collectResults': 1 },
            { 'id': 1, 'ssb': 1, 'manufacturer': 1, 'ethernetIPId': 1, 'description': 1, 'collectResults': 1 },
            { 'id': 1, 'ssb': 1, 'manufacturer': 1, 'ethernetIPId': 1, 'description': 1, 'collectResults': 1 },
            { 'id': 1, 'ssb': 1, 'manufacturer': 1, 'ethernetIPId': 1, 'description': 1, 'collectResults': 1 },
        ]
        this.setState({ torqueToolList })
    }

    render() {
        const { classes } = this.props;
        const headers = columns.map((c, i) => (<TableCell className={classes['header-' + c]} key={i}>{c.toUpperCase()}</TableCell>));
        const { torqueToolList } = this.state;
        return (

            <Paper>
            <MuiDataTable
                title={'TESTE'}
                data={fakeData}
                columns={columns}
                options={{filterType: 'checkbox'}}
             />
                {/* <Table>
                    <TableHead>
                        <TableRow>
                            {headers}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {
                            torqueToolList.map((t, i) => {
                                return (
                                    <TableRow key={i}>
                                        {columns.map((c, i2) => (<TableCell key={i2}>{t[c]}</TableCell>))}
                                        <TableCell> <Edit /> </TableCell>
                                        <TableCell> <Delete /> </TableCell>

                                    </TableRow>
                                )
                            })
                        }
                    </TableBody>
                </Table> */}
            </Paper>

        )
    }
}

export default withStyles(styles)(TorqueToolTable);

// http://jira-sla.scania.com/secure/Dashboard.jspa?selectPageId=13442