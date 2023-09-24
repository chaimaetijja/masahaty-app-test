import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import HistoryIcon from '@mui/icons-material/History';
import PersonIcon from '@mui/icons-material/Person';
import FolderIcon from '@mui/icons-material/Folder';
import ReceiptIcon from '@mui/icons-material/Receipt';
import ListAltIcon from '@mui/icons-material/ListAlt';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Typography from '@mui/material/Typography';

export default function TemporaryDrawer() {
  const [state, setState] = React.useState({
    left: false,
    monPlanningOpen: false,
    facturationOpen: false,
  });

  const toggleDrawer = (open: boolean) => (
    event: React.KeyboardEvent | React.MouseEvent
  ) => {
    if (
      event.type === 'keydown' &&
      ((event as React.KeyboardEvent).key === 'Tab' ||
        (event as React.KeyboardEvent).key === 'Shift')
    ) {
      return;
    }

    setState({ ...state, left: open });
  };

  const toggleMonPlanning = () => {
    setState({ ...state, monPlanningOpen: !state.monPlanningOpen });
  };

  const toggleFacturation = () => {
    setState({ ...state, facturationOpen: !state.facturationOpen });
  };

  const list = () => (
    <Box
      sx={{ width: 250 }}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <div style={{ margin: '20px' }}>
        <img src="%PUBLIC_URL%/logo.PNG" alt="Logo" />
      </div>
      <div>
        <Typography
          variant="h6"
          sx={{
            color: '#D22627',
            fontWeight: 600,
            fontSize: '16px',
            lineHeight: '20px',
          }}
        >
          Mon compte
        </Typography>
        <List>
          <ListItemButton onClick={toggleMonPlanning}>
            <ListItemIcon>
              <CalendarTodayIcon />
            </ListItemIcon>
            <ListItemText primary="Mon Planning" />
            {state.monPlanningOpen ? <ExpandLess /> : <ExpandMore />}
          </ListItemButton>
          {state.monPlanningOpen && (
            <List sx={{ pl: 2 }}>
              <ListItemButton>
                <ListItemIcon>
                  <CalendarTodayIcon />
                </ListItemIcon>
                <ListItemText primary="Calendrier" />
              </ListItemButton>
              <ListItemButton>
                <ListItemIcon>
                  <HistoryIcon />
                </ListItemIcon>
                <ListItemText primary="Historique" />
              </ListItemButton>
            </List>
          )}
          <ListItemButton>
            <ListItemIcon>
              <PersonIcon />
            </ListItemIcon>
            <ListItemText primary="Profil" />
          </ListItemButton>
          <ListItemButton>
            <ListItemIcon>
              <FolderIcon />
            </ListItemIcon>
            <ListItemText primary="Dossier Patients" />
          </ListItemButton>
          <ListItemButton onClick={toggleFacturation}>
            <ListItemIcon>
              <ReceiptIcon />
            </ListItemIcon>
            <ListItemText primary="Facturation" />
            {state.facturationOpen ? <ExpandLess /> : <ExpandMore />}
          </ListItemButton>
          {state.facturationOpen && (
            <List sx={{ pl: 2 }}>
              <ListItemButton>
                <ListItemIcon>
                  <ListAltIcon />
                </ListItemIcon>
                <ListItemText primary="Liste des factures" />
              </ListItemButton>
              <ListItemButton>
                <ListItemIcon>
                  <MonetizationOnIcon />
                </ListItemIcon>
                <ListItemText primary="Encaissement" />
              </ListItemButton>
            </List>
          )}
        </List>
      </div>
    </Box>
  );

  return (
    <div>
      <React.Fragment>
        <IconButton
          onClick={toggleDrawer(true)}
          size="large"
          edge="start"
          color="primary"
          aria-label="menu"
          sx={{ mr: 2, color: '#0B3954' }}
        >
          <MenuIcon />
        </IconButton>
        <Drawer anchor="left" open={state.left} onClose={toggleDrawer(false)}>
          {list()}
        </Drawer>
      </React.Fragment>
    </div>
  );
}
