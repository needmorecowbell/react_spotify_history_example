import React from 'react'
import {UploadForm} from '../components/UploadForm'
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';


export default function HomePage(){
    return (

        <Container align="center">
        <Box sx={{ my: 4 }}>
          <Typography variant="h4" component="h1" gutterBottom>
            Spotify Personal Data Explorer
          </Typography>         
          <UploadForm />     
        </Box>
      </Container>
    )
}