import React, { useState } from 'react'
import { MenuItem, ListItemText } from '@material-ui/core';
import { CSVLink, CSVDownload } from "react-csv";


const headers = [
    { header: 'Name', key: 'name', width: 10 },
    { header: 'Capital', key: 'capital', width: 10 },
    { header: 'Region', key: 'region', width: 10 },
]


let csv = []

export const ExportCSV = ({ country }) => {


    const [csvData, setCsvData] = useState([])

    const onClick = (event, done) => {
        let columns = []
        let row = []
        for (let header of headers) {
            columns.push(header.header)
            row.push(country[header.key])
        }

        csv = [
            columns,
            row
        ]
        setCsvData(csv)
    }

    return (
        <MenuItem>
            {/* <ListItemText primary="Export as CSV" /> */}
            <CSVLink data={csvData} filename="pais.csv" asyncOnClick={true} onClick={(event, done) => onClick(event, done)}>
                Export as CSV
            </CSVLink>
        </MenuItem>
    )
}