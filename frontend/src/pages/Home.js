import React from 'react'

// import { Banner } from '../components/shared'
import {Banner, About, Project, Apply } from '../components/home'
import { Grid } from '@mui/material'

function Home() {
    return (
        <>
            <Grid container>
                <Grid item xs={12}>
                    {/* <Banner 
                        header='Tech For Social Good'
                        body='We are a student group at the University of Alberta building web apps for nonprofits pro bono.'
                        buttonText='Learn more'
                        buttonLink="#aboutGridItem"
                    /> */}
                    <Banner/>
                </Grid>

                <Grid item xs={12} id="aboutGridItem">
                    <About />
                </Grid>
                
                <Grid item xs={12}>
                    <Project />
                </Grid>
                    
                <Grid item xs={12}>
                    <Apply />
                </Grid>

            </Grid>
        </>
    )
}

export default Home
