import React from 'react'
import { Typography, Box, Button } from '@mui/material'
import { Link } from 'react-router-dom'

function Project() {
    return (
        <div>
            <Box
                sx={{
                    textAlign: 'left',
                    padding: '100px',
                    color: 'white',
                    backgroundColor: 'primary.dark',
                }}
            >
                <Typography variant="h3" sx={{ fontWeight: 'bold', mb: 5 }}>
                    Our Projects
                </Typography>

                <Box
                    sx={{
                        width: 600,
                    }}
                >
                    <Typography variant="body1" fontSize={20} mb={5}>
                        Each year, teams of five students work with non-profit
                        organizations on projects to help them better <br />
                        serve their communities.
                    </Typography>
                </Box>

                <Link to="projects" style={{ textDecoration: 'none' }}>
                    <Button
                        variant="outlined"
                        sx={{ color: 'white', borderColor: 'white' }}
                    >
                        View all projects
                    </Button>
                </Link>
            </Box>
        </div>
    )
}

export default Project
