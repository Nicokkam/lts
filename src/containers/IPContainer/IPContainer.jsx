import React, { Component } from 'react';
import {Paper} from '@material-ui/core';
import IPTable from '../../components/Tables/IPTable';

export default class IPContainer extends Component {

  state = {
    data : []
  }

  componentDidMount() {
    // Buscar list de IPs
  }
  

  render() {
    const {data} = this.state;
    return (
      <Paper>
        <IPTable data={data}/>
      </Paper>
    )
  }
}
