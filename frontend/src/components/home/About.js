import { Button, Typography } from '@mui/material'
import React from 'react'
import { Box } from '@mui/material'
import { Link } from 'react-router-dom'

function About() {
    return (
        <div>
            <Box
                display="flex"
                flexDirection="column"
                alignItems="flex-end"
                sx={{ textAlign: 'right', padding: '100px' }}
            >
                <Typography
                    variant="h3"
                    sx={{ color: 'primary.main', fontWeight: 'bold' }}
                >
                    About Us
                </Typography>

                <Box
                    sx={{
                        width: 650,
                    }}
                >
                    <Typography variant="body1" fontSize={20} sx={{ my: 2 }}>
                        Blueprint is a student-run organization that creates
                        technological solutions for nonprofit organizations.
                    </Typography>

                    <Typography variant="body1" fontSize={20} sx={{ my: 2 }}>
                        Blueprint is a multinational organization founded in
                        2013 at the University of California, Berkeley. Our UofA
                        Chapter is the fourth established chapter in Canada and
                        the first one in Western Canada.
                    </Typography>
                </Box>

                <Link to="about" style={{ textDecoration: 'none' }}>
                    <Button
                        variant="outlined"
                        sx={{
                            color: 'primary.main',
                            borderColor: 'primary.main',
                        }}
                    >
                        Read More
                    </Button>
                </Link>
            </Box>
        </div>
    )
}

export default About
