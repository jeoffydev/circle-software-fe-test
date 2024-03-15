import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { IBooks } from '../type/type';
import { useNavigate } from 'react-router-dom';

 

interface IProps {
    list: IBooks[]
}

export default function DataList(props: IProps) {
    const {  list } = props;
    const navigate = useNavigate();
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell>Title</TableCell> 
            <TableCell>Author</TableCell> 
            <TableCell>Available Stock</TableCell> 
            <TableCell>ISBN</TableCell> 
            <TableCell>Price</TableCell> 
          </TableRow>
        </TableHead>
        <TableBody>
          {list.map((row) => (
            <TableRow
              key={row.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              onClick={()=>navigate(`/book/${row.id}`)}
            >
              <TableCell component="th" scope="row">
                {row.title}
              </TableCell>
              <TableCell component="th" scope="row">
                {row.author}
              </TableCell>
              <TableCell component="th" scope="row">
                {row.availableStock}
              </TableCell>
              <TableCell component="th" scope="row">
                {row.isbn}
              </TableCell>
              <TableCell component="th" scope="row">
                {row.price}
              </TableCell>
              
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}