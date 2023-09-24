import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../redux/reducers/rootReducer';
import { fetchUserData } from '../redux/actions';
import { ThunkDispatch } from 'redux-thunk';
import { TablePagination, Typography } from '@mui/material';
import "./historique.css"
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';

export default function UserDataTable() {
  const dispatch: ThunkDispatch<RootState, void, any> = useDispatch();
  const data = useSelector((state: RootState) => state.userDataReducer.data);
  console.log('data', data)
  const total = useSelector((state: RootState) => state.userDataReducer.total);
  console.log("total front", total)
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(6);

  const handleChangePage = (event: unknown, newPage: number) => {
    console.log('Changing page to:', newPage);
    setPage(newPage);
  };
  
  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newRowsPerPage = +event.target.value;
    console.log('Changing rows per page to:', newRowsPerPage);
    setRowsPerPage(newRowsPerPage);
    setPage(0); 
  };

  useEffect(() => {
    const fetchData = async () => {
      const offset = page * rowsPerPage;
      dispatch(fetchUserData(offset, rowsPerPage));
    };
    fetchData();
  }, [rowsPerPage, page]);

  return (
    <div>
        <div style={{display:"flex", flexDirection: "column"}}>
            <div style={{display: "flex", justifyContent:"space-between"}}>
              <Typography sx={{font:'Inter' , Weight: "600" , Size :"22px", color: "#5D7285", lineHeight:"22px"}}>List des admissions</Typography>
              <Button variant="contained" startIcon={<AddIcon />} style={{backgroundColor: '#5C6265', marginBottom: "20px"}}>
                Nouvelle admission
              </Button>
            </div>
            <div>
                <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
                    <TableHead>
                    <TableRow >
                        <TableCell sx={{fontWeight : "500",size : "15.65px",lineHeight : "24.55px",color:"#5D7285"}}>N° d’admission</TableCell>
                        <TableCell sx={{fontWeight : "500",size : "15.65px",lineHeight : "24.55px",color:"#5D7285"}}>Date d’admission</TableCell>
                        <TableCell sx={{fontWeight : "500",size : "15.65px",lineHeight : "24.55px",color:"#5D7285"}}>Motif de consultation</TableCell>
                        <TableCell sx={{fontWeight : "500",size : "15.65px",lineHeight : "24.55px",color:"#5D7285"}}>Spécialité</TableCell>
                        <TableCell sx={{fontWeight : "500",size : "15.65px",lineHeight : "24.55px",color:"#5D7285"}}>Médecin traitant</TableCell>
                        <TableCell sx={{fontWeight : "500",size : "15.65px",lineHeight : "24.55px",color:"#5D7285"}}>Médecin réfèrent</TableCell>
                        <TableCell sx={{fontWeight : "500",size : "15.65px",lineHeight : "24.55px",color:"#5D7285"}}>Commentaire</TableCell>
                    </TableRow>
                    </TableHead>
                    <TableBody>
                    {data.map((row, index) => (
                        <TableRow key={index}>
                        <TableCell sx={{width : "410px", height : "19px", top : "13px", left: "360px"}}>{row["N° d’admission"]}</TableCell>
                        <TableCell sx={{width : "410px", height : "19px", top : "13px", left: "360px"}}>{row["Date d’admission"]}</TableCell>
                        <TableCell sx={{width : "410px", height : "19px", top : "13px", left: "360px"}}>{row["Motif de consultation"]}</TableCell>
                        <TableCell sx={{width : "410px", height : "19px", top : "13px", left: "360px"}}>{row["Spécialité"]}</TableCell>
                        <TableCell sx={{width : "410px", height : "19px", top : "13px", left: "360px"}}>{row["Médecin traitant"]}</TableCell>
                        <TableCell sx={{width : "410px", height : "19px", top : "13px", left: "360px"}}>{row["Médecin réfèrent"]}</TableCell>
                        <TableCell sx={{width : "410px", height : "19px", top : "13px", left: "360px"}}>{row["Commentaire"]}</TableCell>
                        </TableRow>
                    ))}
                    </TableBody>
                </Table>
                <TablePagination
                    rowsPerPageOptions={[6, 25, 100]}
                    component="div"
                    count={total}
                    rowsPerPage={rowsPerPage}
                    page={page}
                    onPageChange={handleChangePage}
                    onRowsPerPageChange={handleChangeRowsPerPage}
                />
                </TableContainer>
            </div>
        </div>
    </div>
  );
}