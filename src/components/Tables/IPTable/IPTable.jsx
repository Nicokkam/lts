import React from 'react';
import MuiDataTable from 'mui-datatables';

const columns = [
    {
        name: 'Ethernet'
    },
    {
        name: 'MAC Address'
    },
    {
        name: 'Em Uso'
    }
]

const options = {
    selectableRows: false,
    rowsPerPage: 254,    
}

export default function IPTable(props) {
  return (
    <MuiDataTable 
        title="IP TABLE"
        columns={columns}
        options={options}
        data={props.data}        
    />
  )
}
