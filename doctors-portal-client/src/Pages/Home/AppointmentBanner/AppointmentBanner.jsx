import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import doctor from '../../../images/doctor.png'
import bg from '../../../images/appointment.png'
import { Typography } from '@mui/material';
import { Button } from '@mui/material';


const appointmentBanner = {
    background: `url(${bg})`,
    marginTop: 130
}

const AppointmentBanner = () => {
    return (
        <Box style={appointmentBanner} sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                    <img
                        style={{ width: 400, marginTop: '-110px' }}
                        src={doctor} alt="" />
                </Grid>
                <Grid item xs={12} md={6} sx={{
                    display: 'flex', justifyContent: 'flex-start', textAlign: 'left',
                    alignItems: 'center'
                }}>
                    <Box>
                        <Typography variant="h6" sx={{ mb: 3 }} style={{ color: '#5CE7ED' }}>
                            Appointment
                        </Typography>
                        <Typography variant="h4" style={{ color: 'white' }}>
                            Make an Appointment Today
                        </Typography>
                        <Typography variant="h6" style={{ color: 'white', fontSize: 14, fontWeight: 300 }}>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam harum dolorem, hic unde quisquam accusantium.
                        </Typography>
                        <Button variant="contained" style={{ backgroundColor: '#5CE7ED' }}>Learn More</Button>
                    </Box>
                </Grid>
            </Grid>
        </Box>
    );
};

export default AppointmentBanner;