import React from 'react';
import MuiDataTable from 'mui-datatables';

import { columns } from './columns';

const options = {
  rowsPerPage: 20,
  filterType: 'textField',
  selectableRows: false,  
  onRowClick: (r) => {
    let url;
    if (r[5] <= 2) {
      url = 'http://chassis/TorqueData/AssemblyResults?popIdFilter='
    } else {
      url = 'http://10.8.66.4/TDSBUS/AssemblyResults?popIdFilter='
    }
    window.open(url + r[0], '_blank');    
  }
}

export default function DrunLTSTable(props) {

  const { data } = props;
    
  let renderData;

  if (!data) {
    renderData = [];
  } else {
    renderData = [] && data.map(d => {
      return [
        // tdUrl(d.popid),
        d.popid,
        d.sequence,
        (d.ltOk / d.ltQuantity * 100).toFixed(2),
        d.ltQuantity,
        d.ltOk,        
        d.processId,
        d.shift,
        d.timestamp.slice(11, 19)
      ]
    });
  }

  return (

    <MuiDataTable
      title="POPIDS"
      data={renderData}
      columns={columns}
      options={options}
    />

  )
}
