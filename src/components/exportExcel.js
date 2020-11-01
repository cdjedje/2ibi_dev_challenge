import React from 'react'
import { MenuItem, ListItemText } from '@material-ui/core';
import Excel from 'exceljs'
import { saveAs } from 'file-saver'


const headers = [
    { header: 'Name', key: 'name', width: 10 },
    { header: 'Capital', key: 'capital', width: 10 },
    { header: 'Region', key: 'region', width: 10 },
]



export const ExportExcel = ({ country }) => {


    const onClick = async () => {

        const workbook = new Excel.Workbook();
        const worksheet = workbook.addWorksheet("pais");

        worksheet.columns = headers

        const r = worksheet.addRow(country);

        const buf = await workbook.xlsx.writeBuffer()
        saveAs(new Blob([buf]), 'pais.xlsx')
    }

    return (
        <MenuItem onClick={() => onClick()}>
            <ListItemText primary="Export as XLS" />
        </MenuItem>
    )
}