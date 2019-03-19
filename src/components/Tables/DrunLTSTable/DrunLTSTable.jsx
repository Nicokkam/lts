import React from 'react';
import MuiDataTable from 'mui-datatables';

import { columns } from './columns';

const options = {
  rowsPerPage: 100,
  selectableRows: false,
  responsive: 'stacked'
}

export default function DrunLTSTable(props) {

  const { data } = props;

  const tdUrl = (popid) => {
    const url = 'http://chassis/TorqueData/AssemblyResults?popIdFilter=' + popid;
    return (<a href={url} target="_blank" rel="noopener noreferrer" > {popid} </a>);
  }

  let renderData;

  if (!data) {
    renderData = [];
  } else {
    renderData = [] && data.map(d => {
      return [
        tdUrl(d.popid),
        d.sequence,
        d.ltQuantity,
        d.ltOk,
        (d.ltOk / d.ltQuantity * 100).toFixed(2),
        // d.processId,
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
