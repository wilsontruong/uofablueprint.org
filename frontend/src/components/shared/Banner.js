import { Button, Typography } from '@mui/material'
import PropTypes from 'prop-types'
import { Box } from '@mui/system'
import React from 'react'
import { Theme } from '../../config/Theme'
import { HashLink } from 'react-router-hash-link'

function Banner({ header, body, buttonText, buttonLink, externalLink }) {
    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'center',
                background: Theme.palette.primary.dark,
                color: Theme.palette.primary.light,
                height: 430,
            }}
        >
            <div
                sx={{
                    display: 'inline-block'
                }}>
                <Typography
                    variant="h4"
                    sx={{
                        p: 2,
                        pl: 4,
                        fontWeight: 'bold',
                    }}
                >
                    {header}
                </Typography>

                <Typography
                    variant="body1"
                    sx={{
                        p: 2,
                        pl: 4,
                        fontSize: 20,
                        fontWeight: 'medium',
                        width: 700,
                    }}
                >
                    {body}
                </Typography>
                <BannerButton
                    buttonLink={buttonLink}
                    externalLink={externalLink}
                    buttonText={buttonText}
                />
            </div>
        </Box>

    )
}

function BannerButton({ buttonLink, externalLink, buttonText }) {
    if (externalLink != '') {
        return (
            <Button
                variant="outlined"
                size="small"
                href={externalLink}
                target="_blank"
                rel="noreferrer"
                sx={{
                    m: 2,
                    ml: 4,
                    color: Theme.palette.primary.light,
                    borderColor: Theme.palette.secondary.light,
                    '&:hover': {
                        borderColor: Theme.palette.primary.light,
                    },
                }}
            >
                {buttonText}
            </Button>
        )
    }

    return (
        <HashLink to={buttonLink} smooth style={{ textDecoration: 'none' }}>
            <Button
                variant="outlined"
                size="small"
                sx={{
                    m: 2,
                    ml: 4,
                    color: Theme.palette.primary.light,
                    borderColor: Theme.palette.secondary.light,
                    '&:hover': {
                        borderColor: Theme.palette.primary.light,
                    },
                }}
            >
                {buttonText}
            </Button>
        </HashLink>
    )
}

Banner.propTypes = {
    header: PropTypes.string,
    body: PropTypes.string,
    buttonText: PropTypes.string,
    buttonLink: PropTypes.string,
    externalLink: PropTypes.string,
}

Banner.defaultProps = {
    header: '',
    body: '',
    buttonText: '',
    buttonLink: '',
    externalLink: '',
}

BannerButton.propTypes = {
    buttonText: PropTypes.string,
    buttonLink: PropTypes.string,
    externalLink: PropTypes.string,
}

BannerButton.defaultProps = {
    buttonText: '',
    buttonLink: '',
    externalLink: '',
}
export default Banner
