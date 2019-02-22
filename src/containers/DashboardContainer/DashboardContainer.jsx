import React, { Component } from 'react';
import { Paper } from '@material-ui/core';

export default class DashboardContainer extends Component {
  render() {
    return (
      <div>
        <Paper>
          <div>EQUIPAMENTOS CADASTRADOS (BUS/TRUCK) </div>
          <div>EQUIPAMENTOS LIGADOS/DESLIGADOS (Gráfico)</div>
          <div>APERTADEIRAS LIGADOS/DESLIGADOS (Gráfico)</div>
          <div>TORQUIMETROS LIGADOS/DESLIGADOS (Gráfico)</div>
          <div>POKAYOKES LIGADOS/DESLIGADOS (Gráfico)</div>
          <div>MAQUINAS POR TIPO</div>
          <div>MAQUINAS POR FABRICANTE</div>
          <div>CHAMADAS DE ANDON</div>
          <div>PEDIDOS DE AJUDA (LTS/MANUTENÇÃO)</div>
        </Paper>
      </div>
    )
  }
}
