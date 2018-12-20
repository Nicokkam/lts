import React, { Component } from 'react'
import { withStyles } from '@material-ui/core';

import { Paper, AppBar, Tabs, Tab, TextField, MenuItem } from '@material-ui/core';
import TorqueToolForm from '../../components/TorqueToolForm/TorqueToolForm';

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

const equipTypes = [
  { id: 1, name: 'Profinet', table: '', form: TorqueToolForm },
  { id: 2, name: 'OpenProtocol', table: '', form: TorqueToolForm }
]

class EquipmentsContainer extends Component {

  state = {
    selectedTab: 1,
    equipType: equipTypes[0],
    equipTypes: equipTypes // Buscar do serviço
  }

  handleTabChange = (e, value) => {
    this.setState({ selectedTab: value })
  }

  handleEquipTypeChange = (e, value) => {    
    const et = equipTypes.find(x => x.id === e.target.value);
    this.setState({equipType: et});    
  }

  render() {
    const { classes } = this.props;
    const { selectedTab, equipType } = this.state;
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
              this.state.equipTypes.map((e, i) => (<MenuItem key={i} value={e.id}>{e.id} - {e.name}</MenuItem>))
            }
          </TextField>

          {/* TODO: Render tables or forms */}
          { 
            (selectedTab === 1) && <equipType.form equipType={equipType} />
            // (selectedTab === 0) && <equipType.table equipType={equipType} />            
          }



        </Paper>
      </div>
    )
  }
}

export default withStyles(styles, { withTheme: true })(EquipmentsContainer);
