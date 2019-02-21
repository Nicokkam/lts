import React, { Component } from 'react';
import { Paper } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';

export default class ReportContainer extends Component {
  render() {
    return (
      <div className="report-container">
        <Paper>
            <div>
              <Typography variant="headline"  gutterBottom>
                RELATORIO
              </Typography>
            </div>
        </Paper>
      </div>
    )
  }
}

/*

  -- RELATORIO --

    Seleção do dia
    Seleção da função

    Produção do Dia
    Stop Time do Dia
    DirectRun
    LTS DirectRun (numero de LTS do dia / LTS bypassadas)
    
    Tabela com postos not ok
    | FUNCAO | POSTO | POSICAO | POPID | LT BYPASSADA |

  ----------------

  -- TODO: --

    Pegar todos os POPIDs que sairam / entraram na linha
    Somar o total de todas as lts destes popids
    Buscar as lts destes popids que foram bypassados
    Como buscar o stop time e produção do dia anterior
    
  -----------

*/
