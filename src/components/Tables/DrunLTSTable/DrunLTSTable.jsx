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
    return (<a href={url}  >{popid}</a>);
  }
  return (

    <MuiDataTable
      title="POPIDS"
      data={data.map(d => {
        return [
          tdUrl(d.popid),
          d.sequence,
          d.ltQuantity,
          d.ltOk,
          d.processId,
          d.shift,
          d.timestamp.slice(11,19)
        ]
      })}
      columns={columns}
      options={options}

    />

  )
}
