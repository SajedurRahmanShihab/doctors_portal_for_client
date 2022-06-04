import { Alert, Grid } from '@mui/material';
import { Container } from '@mui/material';
import { Typography } from '@mui/material';
import React from 'react';
import { useState } from 'react';
import Booking from '../Booking/Booking';

const bookings = [
    {
        id: 1,
        name: 'Teeth Orthodonics',
        time: '8.00 - 9.00 AM',
        space: 10
    },
    {
        id: 2,
        name: 'Cosmetic Dentistry',
        time: '9.00 - 10.00 AM',
        space: 8
    },
    {
        id: 3,
        name: 'Teeth Orthodonics',
        time: '8.00 - 9.00 AM',
        space: 10
    },
    {
        id: 4,
        name: 'Teeth Cleaning',
        time: '10.00 - 11.00 AM',
        space: 9
    },
    {
        id: 5,
        name: 'Pediatric Dental',
        time: '6.00 - 7.00 AM',
        space: 10
    },
    {
        id: 6,
        name: 'Oral Surgery',
        time: '7.00 - 8.00 AM',
        space: 10
    },

]


const AvailableAppointments = ({ date }) => {
    const [bookingSuccess, setBookingSuccess] = useState(false)
    return (
        <Container>
            <Typography style={{ textAlign: 'center' }}>Available Appointments {date.toDateString()}</Typography>
            {bookingSuccess && <Alert severity="success">Appointment Booked Successfully</Alert>}
            <Grid container spacing={2}>
                {
                    bookings.map(booking => <Booking
                        date={date}
                        key={booking.id}
                        booking={booking}
                        setBookingSuccess={setBookingSuccess}
                    ></Booking>)
                }
            </Grid>
        </Container>
    );
};

export default AvailableAppointments;