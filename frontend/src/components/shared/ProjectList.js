import React from 'react'
import PropTypes from 'prop-types'


import { ProjectCard } from './index.js'
import { Grid, Typography } from '@mui/material'
import { Box } from '@mui/system'

function ProjectList({title, projects}) {

    return (
        <>
            <Typography variant='h4' fontWeight='bold' align='center' sx={
                {
                    mt: 5,
                    mb: 5
                }
            }>
                {title}
            </Typography>
        
            <Grid container direction='row' justifyContent='center' alignItems='center' sx={{
            }}>
                {
                    projects.map(project => {
                        return (
                            <Grid item key={project.id} xs={4}>
                                <Box display='flex' justifyContent='center' alignItems='center' sx={{
                                    mb: 5
                                }}>
                                    <ProjectCard header={project.header} image={project.image} body={project.body} />
                                </Box>
                            </Grid>
                        )
                    })
                }
            </Grid>

        </>
    )
}

ProjectList.propTypes = {
    title: PropTypes.string,
    projects: PropTypes.array
}

ProjectList.defaultProps = {
    title: "",
    projects: []
}

export default ProjectList
