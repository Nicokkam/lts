import React from 'react';
import MuiDataTable from 'mui-datatables';

const columns = []
const options = {}

export default function StationToolTable(props) {
    const { data } = this.props;
    return (
        <MuiDataTable
            title="EQUIPAMENTOS POR POSTO"
            colums={columns}
            options={options}
            data={data}
        />
    )
}
