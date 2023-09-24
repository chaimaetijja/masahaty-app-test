import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import OpenInFullIcon from '@mui/icons-material/OpenInFull';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import TemporaryDrawer from './drawer';

export default function Header() {
  return (
    <Box sx={{ flexGrow: 1 ,marginTop: "100px"}}>
      <AppBar>
        <Toolbar variant="dense" sx={{backgroundColor:"white"}}>
          <TemporaryDrawer/>
          <div style={{ marginLeft: 'auto' }}>
            <IconButton sx={{color:"#0B3954"}}><OpenInFullIcon /></IconButton>
            <IconButton sx={{ justifyContent: 'end' , color:"#0B3954"}}>
                <Typography variant="subtitle2" component="div" sx={{color:"#0B3954"}}>
                    Belkadi Ayoub
                </Typography>
                <ExpandMoreIcon sx={{color:"#0B3954"}}/>
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
