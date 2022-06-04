import { Grid } from '@mui/material';
import React from 'react';
import Paper from '@mui/material/Paper';
import { Typography } from '@mui/material';
import { Button } from '@mui/material';
import BookingModal from '../BookingModal/BookingModal';




const Booking = ({ booking, date, setBookingSuccess }) => {
    const { name, time, space } = booking;
    const [openBooking, setBookingOpen] = React.useState(false);
    const handleBookingOpen = () => setBookingOpen(true);
    const handleBookingClose = () => setBookingOpen(false);
    return (
        <>
            <Grid sx={{ mt: 3 }} item xs={12} sm={6} md={4}>
                <Paper elevation={3} sx={{ textAlign: 'center', py: 3 }}>
                    <Typography variant="h5" gutterBottom component="div">
                        {name}
                    </Typography>
                    <Typography variant="h6" gutterBottom component="div">
                        {time}
                    </Typography>
                    <Typography
                        variant="caption" display="block" gutterBottom>
                        {space}
                    </Typography>
                    <Button onClick={handleBookingOpen} variant="contained">BOOK APPOINTMENT</Button>
                </Paper>
            </Grid>
            <BookingModal
                date={date}
                booking={booking}
                openBooking={openBooking}
                handleBookingClose={handleBookingClose}
                setBookingSuccess={setBookingSuccess}
            ></BookingModal>
        </>
    );
};

export default Booking;