import {Button, Paper, Typography} from "@mui/material";
import Avatar from "./Avatar";
import MenuIcon from '@mui/icons-material/Menu';
import AddIcon from '@mui/icons-material/Add';
const Profile = () => {
    return (
        <Paper style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '16px'}}>
            <div style={{display: 'flex'}}>
                <Avatar/>
                <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'space-around', marginLeft: 12}}>
                    <div style={{display: 'flex'}}>
                        <Typography style={{width: 200, color: '#8D99AE'}}>IPP 33333333</Typography>
                        <Typography>Sexe: Homme</Typography>
                    </div>
                    <div style={{display: 'flex'}}>
                        <Typography  style={{width: 200, color: '#087E8B'}}>Ahmed</Typography>
                        <Typography>Nationalité: Marocaine</Typography></div>
                </div>
            </div>
            <div style={{display: 'flex', gap: 12}}>
                <Button variant="contained" startIcon={<AddIcon />} style={{backgroundColor: '#0B3954'}}>
                    Nouveau relevé
                </Button>
                <Button variant="contained" startIcon={<MenuIcon />} style={{backgroundColor: '#087E8B'}}>
                    Menu
                </Button>
            </div>
        </Paper>
    )
}

export default Profile