import React from 'react'

import { Banner } from '../components/shared'
import { Member, Mission, Value } from '../components/about'
import { Grid } from '@mui/material'

function About() {
    return (
        <Grid container>

            <Grid item xs={12}>
                <Banner 
                    header='About Us'
                    body='Making technology accessible and useful for those who create communities.'
                    buttonText='Learn more'
                    buttonLink="#missionGridItem"
                />
            </Grid>

            <Grid item xs={12} id="missionGridItem">
                <Mission />
            </Grid>
            
            <Grid item xs={12}>
                <Value />
            </Grid>
                 
            <Grid item xs={12}>
                <Member />
            </Grid>

        </Grid>
    )
}

export default About
