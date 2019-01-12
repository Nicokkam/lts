import React, { Component } from 'react'
import { withStyles } from '@material-ui/core';

import { Paper, AppBar, Tabs, Tab, TextField, MenuItem } from '@material-ui/core';

import TorqueToolTable from '../../components/Tables/TorqueToolTable';
import TorqueWrenchTable from '../../components/Tables/TorqueWrenchTable';

import TorqueToolForm from '../../components/Forms/TorqueToolForm/TorqueToolForm';
import TorqueWrenchForm from '../../components/Forms/TorqueWrenchForm/TorqueWrenchForm';

const styles = theme => ({
  root: {

  },
  equipTypeSelect: {
    display: 'flex',
    width: '50%',
    alignContent: 'center',
    margin: '0 auto',
    marginTop: '1.76em',
    textAlign: 'center'
  }
})

const equipTypeList = [
  { id: 1, name: 'Profinet', table: TorqueToolTable, form: TorqueToolForm },
  { id: 2, name: 'OpenProtocol', table: TorqueToolTable, form: TorqueToolForm },
  { id: 4, name: 'Torquimetro', table: TorqueWrenchTable, form: TorqueWrenchForm }
]

class EquipmentsContainer extends Component {

  state = {
    selectedTab: 0,
    equipType: equipTypeList[0],
    equipTypeList: equipTypeList // Buscar do serviço
  }

  handleTabChange = (e, value) => {
    this.setState({ selectedTab: value })
  }

  handleEquipTypeChange = (e, value) => {
    const et = equipTypeList.find(x => x.id === e.target.value);
    this.setState({ equipType: et });
  }

  render() {
    const { classes } = this.props;
    const { selectedTab, equipType } = this.state;
    const component = selectedTab === 0
      ? <equipType.table equipType={equipType.id} />
      : <equipType.form equipType={equipType.id} />

    return (
      <div className={classes.root}>
        <Paper>
          <AppBar position="static" color="default">
            <Tabs
              value={this.state.selectedTab}
              indicatorColor="primary"
              textColor="primary"
              fullWidth
              onChange={this.handleTabChange}
            >
              <Tab value={0} label="CONSULTAR" />
              <Tab value={1} label="CADASTRAR" />
            </Tabs>
          </AppBar>

          <TextField
            select
            id="select-type"
            className={classes.equipTypeSelect}
            label="TIPO"
            name="equipType"
            value={equipType.id}
            margin="normal"
            variant="outlined"
            onChange={this.handleEquipTypeChange}>
            {
              this.state.equipTypeList.map((e, i) => (<MenuItem key={i} value={e.id}>{e.id} - {e.name}</MenuItem>))
            }
          </TextField>

          {component}

        </Paper>
      </div>
    )
  }
}

export default withStyles(styles, { withTheme: true })(EquipmentsContainer);
