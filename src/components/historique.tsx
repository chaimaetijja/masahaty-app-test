import React from 'react'
import NavTabs from './navTab'
import Profile from "./Profile";
import HistoryIcon from '@mui/icons-material/History';
import {Typography} from '@mui/material';


const Historique: React.FC = () => {
    return (
        <div style={{width: '100%'}}>
            <div style={{display: "flex", flex: "1", marginTop:"10px", marginBottom:"20px"}}>
                <HistoryIcon sx={{color:"#D32027",Width :"20.63px" ,Height: "20.63px" , Top: "122.38px" , Left: "306px", marginRight:"10px"}} fontSize="medium"/>
                <Typography sx={{color:"#D32027", Width :"111px" ,Height: "22px" , Top: "122px" , Left: "339.63px"}} fontSize="medium">Historique</Typography>
            </div>
            <div style={{marginBottom: 24}}>
            <Profile/>
            </div>
            <NavTabs/>
            {/*<UserDataTable/>*/}
            {/*<StateTextFields/>*/}
        </div>
    )
}

export default Historique;
