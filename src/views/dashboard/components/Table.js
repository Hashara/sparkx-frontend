import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

const TableComponent = ({title, rows, columns, excludes, id, onSubmit, ButtonText}) => {
    return (
        <React.Fragment>
            <Typography component="h2" variant="h6" color="primary" gutterBottom>
                {title}
            </Typography>
            <Table size="small">
                <TableHead>
                    <TableRow>
                        {columns.map((column) => (
                            (excludes.includes(column)) ?
                                null : <TableCell>{column}</TableCell>
                        ))}
                        <TableCell align="right">
                            Actions
                        </TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row) => (
                        <TableRow key={row[id]}>
                            {columns.map((column) => (
                                    (excludes.includes(column)) ?
                                        null : <TableCell>{row[column]}</TableCell>
                                )
                            )}
                            <TableCell align="right">
                                <Button variant="contained" color="primary" onClick={() => onSubmit(row[id])}>
                                    {ButtonText}
                                </Button>
                            </TableCell>
                        </TableRow>

                    ))}
                </TableBody>
            </Table>
        </React.Fragment>
    );
}

export default TableComponent;