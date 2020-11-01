import React from 'react'
import { MenuItem, ListItemText } from '@material-ui/core';
import { CSVLink, CSVDownload } from "react-csv";


const headers = [
    { header: 'Name', key: 'name', width: 10 },
    { header: 'Capital', key: 'capital', width: 10 },
    { header: 'Region', key: 'region', width: 10 },
]


export const ExportCSV = ({ country }) => {

    let columns = []
    let row = []
    for (let header of headers) {
        columns.push(header.header)
        row.push(country[header.key])
    }

    let csv = [
        columns,
        row
    ]

    return (
        <MenuItem>
            {/* <ListItemText primary="Export as CSV" /> */}
            <CSVLink data={csv} filename="pais.csv">
                Export as CSV
            </CSVLink>
        </MenuItem>
    )
}