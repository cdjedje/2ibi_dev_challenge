import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { Menu, MenuItem, ListItemText } from '@material-ui/core';
import {
    AddBox, ArrowDownward, Check, ChevronLeft, ChevronRight, Clear,
    DeleteOutline, Edit, FilterList, FirstPage, LastPage, Remove, SaveAlt, Search, ViewColumn
} from '@material-ui/icons';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import MaterialTable from 'material-table';
import { forwardRef } from 'react';
import { ExportExcel, ExportCSV, ExportXML } from '../components'


const columns = [
    { title: 'Name', field: 'name' },
    { title: 'Capital', field: 'capital' },
    { title: 'Region', field: 'region' }
]


const tableIcons = {
    Add: forwardRef((props, ref) => <AddBox {...props} ref={ref} />),
    Check: forwardRef((props, ref) => <Check {...props} ref={ref} />),
    Clear: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
    Delete: forwardRef((props, ref) => <DeleteOutline {...props} ref={ref} />),
    DetailPanel: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
    Edit: forwardRef((props, ref) => <Edit {...props} ref={ref} />),
    Export: forwardRef((props, ref) => <SaveAlt {...props} ref={ref} />),
    Filter: forwardRef((props, ref) => <FilterList {...props} ref={ref} />),
    FirstPage: forwardRef((props, ref) => <FirstPage {...props} ref={ref} />),
    LastPage: forwardRef((props, ref) => <LastPage {...props} ref={ref} />),
    NextPage: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
    PreviousPage: forwardRef((props, ref) => <ChevronLeft {...props} ref={ref} />),
    ResetSearch: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
    Search: forwardRef((props, ref) => <Search {...props} ref={ref} />),
    SortArrow: forwardRef((props, ref) => <ArrowDownward {...props} ref={ref} />),
    ThirdStateCheck: forwardRef((props, ref) => <Remove {...props} ref={ref} />),
    ViewColumn: forwardRef((props, ref) => <ViewColumn {...props} ref={ref} />),
    Execute: forwardRef((props, ref) => <PlayArrowIcon {...props} ref={ref} />),
    DotsVertical: forwardRef((props, ref) => <MoreVertIcon {...props} ref={ref} />)
};

export const CountyTable = ({ countries }) => {

    const [open, setOpen] = useState(false)
    const [anchorEl, setAnchorEl] = useState(null)
    const [country, setCountry] = useState(null)

    const history = useHistory();

    const handleClose = () => {
        setAnchorEl(null);
        setOpen(false);
    };


    const handleDetails = (event, row) => {
        setAnchorEl(event.currentTarget);
    }

    return (
        <div>
            <MaterialTable
                title=""
                icons={tableIcons}
                columns={columns}
                data={countries}
                options={{
                    actionsColumnIndex: -1,
                }}
                actions={[
                    {
                        icon: tableIcons.DotsVertical,
                        tooltip: 'Acções',
                        onClick: (event, rowData) => { handleDetails(event, rowData); setCountry(rowData) }
                    }
                ]}
            />
            <Menu
                id="simple-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}>
                <MenuItem onClick={() => { history.push(`/country/${country.name}`); }}>
                    <ListItemText primary="Details" />
                </MenuItem>
                <ExportExcel country={country} />
                <ExportCSV country={country} />
                <ExportXML country={country} />
            </Menu>
        </div>
    )
}