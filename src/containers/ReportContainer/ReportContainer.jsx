import React, { Component } from 'react';
import { Paper, Select, FormControl, MenuItem, FormHelperText } from '@material-ui/core';
import { MuiPickersUtilsProvider } from 'material-ui-pickers';
import { DatePicker } from 'material-ui-pickers';
import DateFnsUtils from '@date-io/date-fns';
import Typography from '@material-ui/core/Typography';

export default class ReportContainer extends Component {

  state = {
    filter: {
      selectedDate: ''
    }
  }

  handleDateChange = (e) => {
    const filter = {...this.state.filter};
    filter.selectedDate = e;
    this.setState({filter});
  }

  render() {
    return (
      <div className="report-container">
        <Paper>
          <div className='report-header'>
            <Typography variant="headline" align="center" gutterBottom>
              RELATÓRIO
              </Typography>
          </div>

          <div className='report-filters'>

            <MuiPickersUtilsProvider utils={DateFnsUtils}  >
              <DatePicker 
              
                value={this.state.filter.selectedDate}
                onChange={this.handleDateChange} />
            </MuiPickersUtilsProvider>

            <FormControl className="">
              <Select
                value="{this.state.age}"
                onChange={null}
                displayEmpty
                name=""
                className=""
              >
                {
                  // Fazer loop pelos processos e funcoes
                }
              </Select>
              <FormHelperText>Without label</FormHelperText>
            </FormControl>
          </div>

          <div className='report-kpis'>
            <div>
              PRODUÇÃO DO DIA: X
            </div>
            <div>
              SALDO DO DIA: X
            </div>
            <div>
              DIRECT RUN CHASSIS:
            </div>
            <div>
              DIRECT RUN GERAL:
            </div>
            <div>
              DIRECT RUN BUS:
            </div>
            <div>
              DIRECT RUN BUS GERAL:
            </div>
            <div>
              LTS DIRECT RUN
            </div>
          </div>

          <div className='report-lts-table'>

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
