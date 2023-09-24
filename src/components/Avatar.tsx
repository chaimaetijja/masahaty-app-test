import PersonIcon from '@mui/icons-material/Person';
const Avatar = () => {
    return (
        <div style={{borderRadius: 11, opacity: 0.5, backgroundColor: '#087E8B', height: 80, width: 80, display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
            <PersonIcon style={{opacity: 1, color: 'green', width: 30, height: 30}}/>
        </div>
    )
}

export default Avatar;