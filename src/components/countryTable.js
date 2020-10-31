import React from 'react'
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@material-ui/core';

export const CountyTable = ({ countries }) => {

    console.log({ countries })

    return (
        <TableContainer component={Paper}>
            <Table aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>Name</TableCell>
                        <TableCell align="right">Capital</TableCell>
                        <TableCell align="right">Region</TableCell>
                        <TableCell align="right"></TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {countries.map((country) => (
                        <TableRow key={country?.name}>
                            <TableCell component="th" scope="row">{country?.name}</TableCell>
                            <TableCell align="right">{country?.capital}</TableCell>
                            <TableCell align="right">{country?.region}</TableCell>
                            <TableCell align="right"></TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    )
}