import { Button, Typography } from '@mui/material'
import PropTypes from 'prop-types'
import { Box } from '@mui/system'
import React from 'react'
import { Theme } from '../../config/Theme'
import {HashLink} from 'react-router-hash-link'

function Banner({ header, body, buttonText, buttonLink }) {
    return (
        <Box sx={{
            background: Theme.palette.primary.dark,
            color: Theme.palette.primary.light,
            height: 300
        }}>
            <Typography variant='h4' sx={{
                p: 2,
                pl: 4,
                fontWeight: 'bold'
            }}>
                {header}
            </Typography>

            <Typography variant='body1' sx={{
                p: 2,
                pl: 4,
                fontSize: 20,
                fontWeight: 'medium',
                width: 500
            }}>
                {body}
            </Typography>

            <HashLink to={buttonLink} smooth> 
                <Button variant='outlined' size='small' sx={{
                    m: 2,
                    ml: 4,
                    color: Theme.palette.primary.light,
                    borderColor: Theme.palette.secondary.light,
                    "&:hover": {
                        borderColor: Theme.palette.primary.light
                    },
                }}>
                    {buttonText}
                </Button>
            </HashLink>

        </Box>
    )
}

Banner.propTypes = {
    header: PropTypes.string,
    body: PropTypes.string,
    buttonText: PropTypes.string,
    buttonLink: PropTypes.string,
}

export default Banner
