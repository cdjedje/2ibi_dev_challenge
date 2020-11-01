import React from 'react'
import { MenuItem, ListItemText } from '@material-ui/core';


export const ExportExcel = ({ country }) => {
    return (
        <MenuItem>
            <ListItemText primary="Export as XLS" />
        </MenuItem>
    )
}