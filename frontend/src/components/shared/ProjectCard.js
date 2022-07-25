import { Card, CardContent, CardMedia, Typography } from '@mui/material'
import React from 'react'
import PropTypes from 'prop-types'

function ProjectCard({image, header, body}) {
    return (
        <Card raised={true} sx={{
            width: 345,
            textAlign: 'center'
        }}>
            <CardMedia
                component='img'
                height='140'
                image={image}
                alt='no image'
            />

            <CardContent>
                <Typography gutterBottom={true} variant='h5' component='div' sx={{
                    fontWeight: 'bold'
                }}>
                    {header}
                </Typography>

                <Typography variant='body1'>
                    {body}
                </Typography>
            </CardContent>
        </Card>
    )
}

ProjectCard.propTypes = {
    image: PropTypes.string,
    header: PropTypes.string,
    body: PropTypes.string
}

export default ProjectCard
