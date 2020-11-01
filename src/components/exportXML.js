import React from 'react'
import { MenuItem, ListItemText } from '@material-ui/core';


export const ExportXML = ({ country }) => {
    return (
        <MenuItem>
            <ListItemText primary="Export as XML" />
        </MenuItem>
    )
}