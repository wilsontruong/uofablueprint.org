import { Typography } from '@mui/material'
import React from 'react'
import { Box } from '@mui/material'
import { Button } from '@mui/material'
import { HashLink } from 'react-router-hash-link'

function Banner() {
    return (
        <>
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    backgroundColor: 'primary.dark',
                    color: 'primary.light',
                    pb: 5,
                }}
            >
                <Typography
                    variant="h3"
                    sx={{
                        fontWeight: 'bold',
                        mb: 5,
                    }}
                >
                    Tech For Social Good
                </Typography>

                <Box
                    sx={{
                        width: 600,
                    }}
                >
                    <Typography
                        variant="body1"
                        sx={{
                            textAlign: 'center',
                            fontSize: 20,
                            mb: 5,
                        }}
                    >
                        We&apos;re a student group at the University of Alberta
                        building web apps for nonprofits pro bono.
                    </Typography>
                </Box>

                <HashLink
                    to="#aboutGridItem"
                    smooth
                    style={{ textDecoration: 'none' }}
                >
                    <Button
                        variant="outlined"
                        sx={{ color: 'white', borderColor: 'white' }}
                    >
                        Learn More
                    </Button>
                </HashLink>
            </Box>
        </>
    )
}

export default Banner
