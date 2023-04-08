import React from 'react'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Door from './Door'
import LoginForm from './LoginForm'
import './style/Home.css'
import { Container } from '@mui/system';
 export default function Home() {
    return (
        <>
            <Box className="bgColor">
                <Box>
                  <Container >
                   <Box  className="marginHandel">
                    <Grid container className='main-Grid' >
                        <Grid item lg={5} md={5} sm={12} xs={12}>
                              <Door/>
                        </Grid>
                        <Grid item lg={5} md={5} sm={12} xs={12}>
                               <LoginForm/>
                        </Grid>

                    </Grid>
                    </Box>
                    </Container>
                </Box>

            </Box>
        </>
    )
}
