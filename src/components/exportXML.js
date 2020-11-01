import React from 'react'
import { MenuItem, ListItemText } from '@material-ui/core';
import jsontoxml from 'jsontoxml'
import { saveAs } from 'file-saver'


export const ExportXML = ({ country }) => {

    const onClick = () => {
        // let xml = jsontoxml(country)
        // console.log(xml)

        var xml =
            '<?xml version="1.0" encoding="utf-8"?>' +
            '<note importance="high" logged="true">' +
            '    <title>Happy</title>' +
            '    <todo>Work</todo>' +
            '    <todo>Play</todo>' +
            '</note>';
        saveAs(new Blob(xml), 'pais.xml')
    }

    return (
        <MenuItem onClick={() => onClick()}>
            <ListItemText primary="Export as XML" />
        </MenuItem>
    )
}