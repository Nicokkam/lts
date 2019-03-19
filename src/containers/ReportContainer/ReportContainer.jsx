import React, { Component } from 'react';
import { Paper, Select, MenuItem, FormControl, FormHelperText } from '@material-ui/core';
import { MuiPickersUtilsProvider } from 'material-ui-pickers';
import { DatePicker } from 'material-ui-pickers';
import DateFnsUtils from '@date-io/date-fns';
import DrunLTSTable from '../../components/Tables/DrunLTSTable';
import DrunLTSApi from '../../api/drunlts.js';
import { Kpi } from '../../components/Report';
import { LTSKpi } from '../../components/Report';

import Typography from '@material-ui/core/Typography';

import './ReportContainer.css';

const intervalTime = 60000;
const defaultValues = {
  directRunGeral: 0,
  directRunChassis: 0,
  objective: 0,
  produced: 0,
  stopTime: "00:00:00",
  shift: 0
};

export default class ReportContainer extends Component {

  state = {

    filter: {
      date: new Date(),
      line: 'truck'
    },
    dailyResult: {
      truck: defaultValues,
      bus: defaultValues
    },
    result: {
      bus: {
        total: 0,
        ok: 0,
        percentage: 0
      },
      truck: {
        total: 0,
        ok: 0,
        percentage: 0
      }
    },
    drunLts: {
      truck: [],
      bus: []
    }


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
      const dailyResult = Object.assign({}, this.state.dailyResult);
      dailyResult.bus = d.data.dailyResult.filter(x => x.processId === 3)[0] || defaultValues;
      dailyResult.truck = d.data.dailyResult.filter(x => x.processId === 2)[0] || defaultValues;
      const drunLts = { ...d.data.drunLts };
      drunLts.truck = d.data.drunLts.filter(x => x.processId <= 2) || [];
      drunLts.bus = d.data.drunLts.filter(x => x.processId === 3) || [];
      this.setState({ dailyResult });
      this.setState({ drunLts });
      this.calculatePercentage(drunLts.truck, 'truck');
      this.calculatePercentage(drunLts.bus, 'bus');
    }).catch(e => {
      console.error(e);
    });
  }

  calculatePercentage(data, line) {
    const { result } = { ...this.state };

    if (!data || !data.length) {
      result[line].total = 0;
      result[line].ok = 0;
      result[line].percentage = 0;
      this.setState({ result });
      return;
    }

    const total = data.map(d => d.ltQuantity).reduce((a, b) => a + b);
    const ok = data.map(d => d.ltOk).reduce((a, b) => a + b);
    result[line].total = total;
    result[line].ok = ok;
    result[line].percentage = ((ok / total) * 100).toFixed(2);
    this.setState({ result });
  }

  handleSelectLine = (e) => {
    const { value } = e.target;
    const filter = { ...this.state.filter };
    filter.line = value;
    this.setState({ filter });
  }

  handleDateChange = (e) => {
    const filter = { ...this.state.filter };
    filter.date = e;
    this.setState({ filter }, this.updateData(filter.date));
  }

  render() {

    const { drunLts, dailyResult, result, filter } = this.state;
    const table = drunLts[filter.line];
    const res = result[filter.line];
    const dr = dailyResult[filter.line];

    return (

      <Paper>

        <div className='report-header'>
          <Typography variant="headline" align="center" gutterBottom> RELATÓRIO </Typography>
        </div>

        <div className='report-filters'>

          <FormControl variant="outlined" className="filter-line">
            <Select
              value={filter.line}
              onChange={this.handleSelectLine}
            >
              <MenuItem value="truck">Caminhões</MenuItem>
              <MenuItem value="bus">Ônibus</MenuItem>
            </Select>
            <FormHelperText>Selecione uma linha</FormHelperText>
          </FormControl>

          <MuiPickersUtilsProvider utils={DateFnsUtils}  >
            <DatePicker
              className="filter-date"
              autoOk
              keyboard
              clearable
              format="dd/MM/yyyy"
              helperText="Selecione uma data"
              value={filter.date}
              onChange={this.handleDateChange} />
          </MuiPickersUtilsProvider>

        </div>

        <div className='report-kpis'>
          <Kpi kpi={dr} />
          <LTSKpi result={res} />
        </div>
        
        <div className='report-lts-table'>
          <DrunLTSTable data={table} />
        </div>

      </Paper>

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

  STATUS
                case 0:
                    statusTxt = "Initial";
                case 1:
                    statusTxt = "Active";
                case 2:
                    statusTxt = "Job OK";
                case 3:
                    statusTxt = "Job NOK";
                case 4:
                    statusTxt = "ByPassed";
                case 5:
                    statusTxt = "Disabled";
                case 6:
                    statusTxt = "Error";

*/
