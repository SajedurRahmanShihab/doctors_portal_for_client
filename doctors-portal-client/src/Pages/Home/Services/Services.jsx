import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Container } from '@mui/material';
import Service from '../Service/Service';
import fluoride from '../../../images/fluoride.png'
import cavity from '../../../images/cavity.png'
import whitening from '../../../images/whitening.png'
import { Typography } from '@mui/material';


// Fake Data
const services = [
    {
        name: 'Fluoride Treatment',
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat id soluta, molestiae deserunt quos distinctio fuga in cum veritatis odio enim non nemo minima libero rem nobis alias, vero ipsa?",
        img: fluoride
    },

    {
        name: "Cavity Filling",
        description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Hic aliquam quo doloremque dolorem quisquam tempore natus sint corrupti, vitae provident totam animi cum maxime enim accusamus explicabo itaque. Eos, laborum.",
        img: cavity
    },
    {
        name: "Teeth Whitening",
        description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Hic aliquam quo doloremque dolorem quisquam tempore natus sint corrupti, vitae provident totam animi cum maxime enim accusamus explicabo itaque. Eos, laborum.",
        img: whitening
    }


]



const Services = () => {
    return (
        <Box sx={{ flexGrow: 1, mt: 2 }}>
            <Container>
                <Typography sx={{ textAlign: 'center', color: 'success.main' }} variant="h6" component="div">
                    OUR SERVICES
                </Typography>
                <Typography sx={{ textAlign: 'center', mb: 1, fontWeight: '500' }} variant="h4" component="div">
                    Services We Provide
                </Typography>
                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                    {
                        services.map(service => <Service
                            key={service.name}
                            service={service}
                        >
                        </Service>)
                    }
                </Grid>
            </Container>
        </Box>
    );
};

export default Services;