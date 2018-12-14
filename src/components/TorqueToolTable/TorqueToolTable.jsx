// TODO

// Validar se há ID para as configurações de: Ethernet, ProfinetIP, e Profinet Hardware
// Para configuração de IP, exibir apenas o IP do equipamento
// Para configuração profinet, exibir um botão que abra um diolog exibindo as demais configurações


import React, { Component } from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TorqueToolService from '../../api/torquetools';

export default class TorqueToolTable extends Component {

    columns = [
        'id', 'ssb', 'protocol', 'manufacturer', 'modelId', 'ethernetIPId', 'port', 'profinetIPId', 'profinetConfigId', 'description'
        , 'collectResults', 'hasController', 'controllerSSB', 'toolSerial', 'firmware', 'isWireless'
    ]    

    state = {
        equipType: this.props.equipType
    }

    componentDidMount() {
        // Fazer a requisição dos equipamentos aqui

    }

    render() {
        return (
            <div className="torquetool-table">
                {this.state.equipType}
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>A</TableCell>
                            <TableCell>B</TableCell>
                            <TableCell>C</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>

                    </TableBody>
                </Table>
            </div>
        )
    }
}
