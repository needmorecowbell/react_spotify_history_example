

import React from 'react';
import { ListenHistoryTable } from '../components/ListenHistoryTable';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';


export default function ListenHistory(){
  return (

    <Container align="center">
      <Box sx={{ my: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Spotify Personal Data Explorer
        </Typography>         
        <ListenHistoryTable />     
      </Box>
    </Container>

  );
}
