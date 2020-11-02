import React from 'react'
import { MenuItem, ListItemText } from '@material-ui/core';
import jsontoxml from 'jsontoxml'
import { saveAs } from 'file-saver'


export const ExportXML = ({ country }) => {

    const onClick = () => {
        let xml = jsontoxml(country)
        saveAs(new Blob([xml]), 'pais.xml')
    }

    return (
        <MenuItem onClick={() => onClick()}>
            <ListItemText primary="Export as XML" />
        </MenuItem>
    )
}