import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import BorderColorIcon from '@mui/icons-material/BorderColor';

const cities = ['casablanca', 'rabat', 'agadir', 'marrakech'];

const redStarStyle = {
  color: 'red',
  marginLeft: '4px',
};

const mockedData = {
  name: 'Chaimae',
  lastName: 'Tijja',
  sexe: 'female',
  city: 'rabat',
  province: 'Rabat kenitra',
  adress: '123 Example test',
  cnie: 'ABC12345',
  phoneNumber: '123-456-7890',
  email: 'tijjachaimae@gmail.com',
};

export default function FichePatient() {
  const [name, setName] = React.useState('');
  const [lastName, setLastName] = React.useState('');
  const [sexe, setSexe] = React.useState('');
  const [city, setCity] = React.useState('');
  const [province, setProvince] = React.useState('');
  const [adress, setAdress] = React.useState('');
  const [cnie, setCnie] = React.useState('');
  const [phoneNumber, setPhoneNumber] = React.useState('');
  const [email, setEmail] = React.useState('');


  const [editMode, setEditMode] = React.useState(false);

  const handleSexeChange = (event: any) => {
    setSexe(event.target.value);
  };

  const handleCityChange = (event: any) => {
    setCity(event.target.value);
  };

  React.useEffect(() => {
    if (!editMode) {
      setName(mockedData.name);
      setLastName(mockedData.lastName);
      setSexe(mockedData.sexe);
      setCity(mockedData.city);
      setProvince(mockedData.province);
      setAdress(mockedData.adress);
      setCnie(mockedData.cnie);
      setPhoneNumber(mockedData.phoneNumber);
      setEmail(mockedData.email);
    }
  }, [editMode]);

  const handleEditModeToggle = () => {
    setEditMode(!editMode);
  };

  return (
    <Box component="form" noValidate autoComplete="off">
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <Typography
          sx={{
            font: 'Inter',
            fontWeight: 600,
            fontSize: '22px',
            color: '#5D7285',
            lineHeight: '22px',
            marginBottom: '15px',
          }}
        >
          Informations générales du patient
        </Typography>
        <Button
          variant="contained"
          startIcon={<BorderColorIcon />}
          style={{ backgroundColor: '#5C6265', marginBottom: '20px' }}
          onClick={handleEditModeToggle}
        >
          Modifier la fiche
        </Button>
      </div>
      <Grid container spacing={2}>
        <Grid item xs={4}>
          <InputLabel
            htmlFor="demo-simple-select-helper-label"
            sx={{
              fontWeight: 500,
              fontSize: '17.97px',
              lineHeight: '21.75px',
              color: '#0B3954',
            }}
          >
            Nom <span style={redStarStyle}>*</span>
          </InputLabel>
          <TextField
            id="name"
            variant="filled"
            value={name}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
              if (editMode) {
                setName(event.target.value);
              }
            }}
            fullWidth
            disabled={!editMode}
          />
        </Grid>
        <Grid item xs={4}>
          <InputLabel
            htmlFor="demo-simple-select-helper-label"
            sx={{
              fontWeight: 500,
              fontSize: '17.97px',
              lineHeight: '21.75px',
              color: '#0B3954',
            }}
          >
            Prénom <span style={redStarStyle}>*</span>
          </InputLabel>
          <TextField
            id="last-name"
            variant="filled"
            value={lastName}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
              if (editMode) {
                setLastName(event.target.value);
              }
            }}
            fullWidth
            disabled={!editMode}
          />
        </Grid>
        <Grid item xs={4}>
          <InputLabel
            htmlFor="demo-simple-select-helper-label"
            sx={{
              fontWeight: 500,
              fontSize: '17.97px',
              lineHeight: '21.75px',
              color: '#0B3954',
            }}
          >
            Sexe <span style={redStarStyle}>*</span>
          </InputLabel>
          <Select
            labelId="demo-simple-select-helper-label"
            id="demo-simple-select-helper"
            value={sexe}
            variant="filled"
            onChange={handleSexeChange}
            fullWidth
            disabled={!editMode}
          >
            <MenuItem value="">
              <em>Choose</em>
            </MenuItem>
            <MenuItem value="male">Male</MenuItem>
            <MenuItem value="female">Female</MenuItem>
          </Select>
        </Grid>
        <Grid item xs={6}>
          <InputLabel
            htmlFor="demo-simple-select-helper-label"
            sx={{
              fontWeight: 500,
              fontSize: '17.97px',
              lineHeight: '21.75px',
              color: '#0B3954',
            }}
          >
            Ville <span style={redStarStyle}>*</span>
          </InputLabel>
          <Select
            labelId="demo-simple-select-helper-label"
            id="city"
            value={city}
            variant="filled"
            onChange={handleCityChange}
            fullWidth
            disabled={!editMode}
          >
            {cities.map((el) => (
              <MenuItem value={el} key={el}>
                {el}
              </MenuItem>
            ))}
          </Select>
        </Grid>
        <Grid item xs={6}>
          <InputLabel
            htmlFor="demo-simple-select-helper-label"
            sx={{
              fontWeight: 500,
              fontSize: '17.97px',
              lineHeight: '21.75px',
              color: '#0B3954',
            }}
          >
            Province <span style={redStarStyle}>*</span>
          </InputLabel>
          <TextField
            id="province"
            variant="filled"
            value={province}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
              if (editMode) {
                setProvince(event.target.value);
              }
            }}
            fullWidth
            disabled={!editMode}
          />
        </Grid>
        <Grid item xs={12}>
          <InputLabel
            htmlFor="demo-simple-select-helper-label"
            sx={{
              fontWeight: 500,
              fontSize: '17.97px',
              lineHeight: '21.75px',
              color: '#0B3954',
            }}
          >
            Adresse <span style={redStarStyle}>*</span>
          </InputLabel>
          <TextField
            id="adress"
            value={adress}
            variant="filled"
            onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
              if (editMode) {
                setAdress(event.target.value);
              }
            }}
            fullWidth
            disabled={!editMode}
          />
        </Grid>
        <Grid item xs={6}>
          <InputLabel
            htmlFor="demo-simple-select-helper-label"
            sx={{
              fontWeight: 500,
              fontSize: '17.97px',
              lineHeight: '21.75px',
              color: '#0B3954',
            }}
          >
            CNIE <span style={redStarStyle}>*</span>
          </InputLabel>
          <TextField
            id="cnie"
            variant="filled"
            value={cnie}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
              if (editMode) {
                setCnie(event.target.value);
              }
            }}
            fullWidth
            disabled={!editMode}
          />
        </Grid>
        <Grid item xs={6}>
          <InputLabel
            htmlFor="demo-simple-select-helper-label"
            sx={{
              fontWeight: 500,
              fontSize: '17.97px',
              lineHeight: '21.75px',
              color: '#0B3954',
            }}
          >
            Numéro de téléphone <span style={redStarStyle}>*</span>
          </InputLabel>
          <TextField
            id="phone-number"
            variant="filled"
            value={phoneNumber}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
              if (editMode) {
                setPhoneNumber(event.target.value);
              }
            }}
            fullWidth
            disabled={!editMode}
          />
        </Grid>
        <Grid item xs={12}>
          <InputLabel
            htmlFor="demo-simple-select-helper-label"
            sx={{
              fontWeight: 500,
              fontSize: '17.97px',
              lineHeight: '21.75px',
              color: '#0B3954',
            }}
          >
            Adresse email <span style={redStarStyle}>*</span>
          </InputLabel>
          <TextField
            id="email"
            variant="filled"
            value={email}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
              if (editMode) {
                setEmail(event.target.value);
              }
            }}
            fullWidth
            disabled={!editMode}
          />
        </Grid>
      </Grid>
    </Box>
  );
}