import React from 'react'
import { MenuItem, ListItemText } from '@material-ui/core';


export const ExportCSV = ({ country }) => {
    return (
        <MenuItem>
            <ListItemText primary="Export as CSV" />
        </MenuItem>
    )
}