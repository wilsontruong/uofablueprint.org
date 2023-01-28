import React from 'react'

import { Theme } from '../config/Theme'
import { Banner } from '../components/shared'
import {Apply } from '../components/home'
import { Grid} from '@mui/material'


function Home() {
    return (
        <>
            <Grid container>
                <Grid item xs={12}>
                    <div
                        display="flex"
                        flexDirection="row"
                    >
                        <Banner 
                            header='Tech For Social Good'
                            body='We are a student group at the University of Alberta building web apps for nonprofits pro bono.'
                            buttonText='Learn more'
                            buttonLink="#aboutGridItem"
                        />
                        <div>
                            <img src="../../../assets/Home_TFSG.png" alt="Home_TFSG.png" height="415" width="516"/>
                        </div>
                        
                        {/* The Banner from components/home/Banner.js
                        <Banner/> */}
                    </div>

                </Grid>

                <Grid item xs={12} id="aboutGridItem">

                    {/* The About from components/home/About.js
                    /* <About /> */}

                    <div
                        display="flex"
                        flexDirection="row"
                    >
                        <Banner 
                            sx={{
                                background: Theme.palette.primary.white,
                                color: Theme.palette.primary.light,
                            }}
                            header='About Us'
                            body='Blueprint is a student-run organization that creates technological solutions for nonprofit organizations.

                            Blueprint is a multinational organization founded in 2013 at the University of California, Berkeley. Our UofA Chapter is the fourth established chapter in Canada and the first one in Western Canada.'
                            buttonText='Read More'
                            buttonLink="about"
                        />
                    </div>
                </Grid>
                
                <Grid item xs={12}>

                    {/* The Project from components/home/Project.js
                    {/* <Project /> */}

                        <Banner 
                            header='Our Projects'
                            body='Each year, teams of fice students work with non-profit organizations on projects to help them better serve their communities.'
                            buttonText='Learn more'
                            buttonLink="projects"
                        />

                </Grid>
                    
                <Grid item xs={12}>
                    <Apply />
                </Grid>

            </Grid>
        </>
    )
}

export default Home
