import React, { useState } from 'react'
import { MenuItem } from '@material-ui/core';
import { CSVLink } from "react-csv";


const headers = [
    { header: 'Name', key: 'name', width: 10 },
    { header: 'Capital', key: 'capital', width: 10 },
    { header: 'Region', key: 'region', width: 10 },
    { header: 'Sub Region', key: 'subregion', width: 10 },
    { header: 'Population', key: 'population', width: 10 },
    { header: 'Area', key: 'area', width: 10 },
    { header: 'Timezones', key: 'timezones', width: 10 },
    { header: 'Native Name', key: 'nativeName', width: 10 },
    { header: 'Flag', key: 'flag', width: 10 }
]

export const ExportCSV = ({ country }) => {


    const [csvData, setCsvData] = useState([])

    const onClick = (event, done) => {
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
        setCsvData(csv)
        done();
    }

    return (
        <MenuItem>
            <CSVLink data={csvData} filename="pais.csv" asyncOnClick={true} onClick={(event, done) => onClick(event, done)} style={{ color: "black", textDecoration: "none" }}>
                Export as CSV
            </CSVLink>
        </MenuItem>
    )
}