import React from 'react'
import { MenuItem, ListItemText } from '@material-ui/core';
import Excel from 'exceljs'
import { saveAs } from 'file-saver'


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