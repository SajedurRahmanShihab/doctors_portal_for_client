import { Grid } from '@mui/material';
import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { CardMedia } from '@mui/material';

const Service = (props) => {
    const { name, description, img } = props.service;
    return (
        <Grid item xs={4} sm={4} md={4} >
            <Card sx={{ minWidth: 275, border: 0, boxShadow: 0 }}>
                <CardMedia
                    component="img"
                    height="140"
                    style={{ width: 'auto', height: '80px', margin: '0 auto' }}
                    image={img}
                    alt="green iguana"
                />
                <CardContent>
                    <Typography style={{ textAlign: 'center' }} variant="h5" component="div">
                        {name}
                    </Typography>
                    <Typography color="text.secondary" variant="body2">
                        {description}
                    </Typography>
                </CardContent>
            </Card>
        </Grid>
    );
};

export default Service;