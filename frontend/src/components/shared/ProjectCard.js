import { Card, CardActionArea, CardContent, CardMedia, Typography } from '@mui/material'
import React from 'react'
import PropTypes from 'prop-types'

function ProjectCard({image, header, body, cardLink}) {
    return (
        <Card raised={true} sx={{
            width: 345,
            textAlign: 'center'
        }}>
            <CardActionArea href={cardLink} target='_blank' rel='noreferrer'>
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
            </CardActionArea>
        </Card>
    )
}

ProjectCard.propTypes = {
    image: PropTypes.string,
    header: PropTypes.string,
    body: PropTypes.string,
    cardLink: PropTypes.string
}

ProjectCard.defaultProps = {
    image: "",
    header: "",
    body: "",
    cardLink: ""

}

export default ProjectCard
