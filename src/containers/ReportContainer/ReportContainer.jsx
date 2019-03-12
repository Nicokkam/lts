import React, { Component } from 'react';
import { Paper, Select, FormControl, FormHelperText } from '@material-ui/core';
import { MuiPickersUtilsProvider } from 'material-ui-pickers';
import { DatePicker } from 'material-ui-pickers';
import DateFnsUtils from '@date-io/date-fns';
import DrunLTSTable from '../../components/Tables/DrunLTSTable';
import DrunLTSApi from '../../api/drunlts.js';

import Typography from '@material-ui/core/Typography';

import './ReportContainer.css';

const intervalTime = 10000;

// TODO: Atualizar de 1 em 1 minuto dados da API
export default class ReportContainer extends Component {

  state = {
    filter: {
      date: new Date(),
    },
    result: {
      total: 0,
      ok: 0
    },
    produced: 0,
    drun: {
      chassis: 0,
      chassisGeral: 0
    },
    data: [],
    percentage: 0
  }

  componentDidMount() {
    const { date } = this.state.filter;
    this.updateData(date);
    setInterval(() => {
      const d = this.state.filter.date;
      this.updateData(d);
    }, intervalTime);
  }

  updateData = (date) => {
    const api = new DrunLTSApi();
    api.getByDate(date).then(d => {
      this.setState({ data: d.data });
      this.calculatePercentage(d.data);
    });
  }

  calculatePercentage(data) {
    if (!data || !data.length)
      return;
    const total = data.map(d => d.ltQuantity).reduce((a, b) => a + b);
    const ok = data.map(d => d.ltOk).reduce((a, b) => a + b);
    const { result } = this.state;
    result.total = total;
    result.ok = ok;
    const percentage = ((ok / total) * 100).toFixed(2);
    this.setState({ result, percentage });
  }

  handleDateChange = (e) => {
    const filter = { ...this.state.filter };
    filter.date = e;
    this.setState({ filter }, this.updateData(filter.date));
  }

  render() {
    const { data, produced, drun } = this.state;
    return (
      <div className="report-container">
        <Paper>
          <div className='report-header'>

            <Typography variant="headline" align="center" gutterBottom>
              RELATÓRIO
              </Typography>
          </div>

          <div className='report-kpis'>

            <div className="report-kpis-head">
              <div className="report-prod-day">
                <div className="report-key"> PRODUÇÃO DO DIA: </div>
                <div className="report-value"> {produced} </div>
              </div>

              <div className="report-drun-chassis">
                <div className="report-key">DIRECT RUN CHASSIS: </div>
                <div className="report-value"> {drun.chassis} %</div>
              </div>

              <div className="report-drun-general">
                <div className="report-key">DIRECT RUN GERAL: </div>
                <div className="report-value">{drun.chassisGeral} %</div>
              </div>
            </div>

            {/* BUS IMPLEMENTATION
            <div>
              DIRECT RUN BUS:
            </div>

            <div>
              DIRECT RUN BUS GERAL:
            </div> 
            */}

            <div className="report-lts-container">

              <div className="report-lts-percentage">
                LTS DIRECT RUN {this.state.percentage} %
              </div>

              <div className="report-lts-sum">
                <div className="report-lts-total" >TOTAL: {this.state.result.total} </div>
                <div className="report-lts-ok"> OK: {this.state.result.ok} </div>
              </div>

            </div>

          </div>

          <div className='report-filters'>

            <MuiPickersUtilsProvider utils={DateFnsUtils}  >
              <DatePicker
                autoOk
                format="dd/MM/yyyy"
                helperText="Selecione uma data"
                value={this.state.filter.date}
                onChange={this.handleDateChange} />
            </MuiPickersUtilsProvider>

          </div>

          <div className='report-lts-table'>
            <DrunLTSTable data={data} />
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
