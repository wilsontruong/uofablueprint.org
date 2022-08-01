import React from 'react'
import { Typography, Box, Grid, Button } from '@mui/material'
import { Link } from 'react-router-dom'

function Apply() {
    return (
        <>
            <Box sx={{ padding: '50px' }}>
                <Typography
                    variant="h3"
                    sx={{
                        fontWeight: 'medium',
                        textAlign: 'center',
                        color: 'primary.dark',
                    }}
                >
                    Get Involved
                </Typography>

                <Grid container spacing={2}>
                    <Grid item xs={6}>
                        <Box
                            display="flex"
                            flexDirection="column"
                            justifyContent="center"
                            alignItems="center"
                        >
                            <Box sx={{ textAlign: 'center' }}>
                                <Box
                                    component="img"
                                    sx={{
                                        height: 200,
                                        width: 200,
                                        mt: 7,
                                    }}
                                    alt="Students image"
                                    src="/assets/cap.png"
                                />

                                <Typography
                                    variant="h4"
                                    color="primary.dark"
                                    gutterBottom={true}
                                >
                                    For Students
                                </Typography>

                                <Box
                                    sx={{
                                        width: 400,
                                    }}
                                >
                                    <Typography
                                        variant="body1"
                                        mb={5}
                                        fontSize={20}
                                    >
                                        Joining Blueprint is the perfect way to
                                        use your skills to give back to the
                                        community.
                                    </Typography>
                                </Box>

                                <Link
                                    to="apply/students"
                                    style={{ textDecoration: 'none' }}
                                >
                                    <Button
                                        variant="outlined"
                                        sx={{
                                            color: 'primary.main',
                                            borderColor: 'primary.main',
                                        }}
                                    >
                                        Learn more
                                    </Button>
                                </Link>
                            </Box>
                        </Box>
                    </Grid>

                    <Grid item xs={6}>
                        <Box
                            display="flex"
                            flexDirection="column"
                            justifyContent="center"
                            alignItems="center"
                        >
                            <Box sx={{ textAlign: 'center' }}>
                                <Box
                                    component="img"
                                    sx={{
                                        height: 200,
                                        width: 200,
                                        mt: 7,
                                    }}
                                    alt="Nonprofit image"
                                    src="/assets/office-building.png"
                                />

                                <Typography
                                    variant="h4"
                                    color="primary.dark"
                                    gutterBottom={true}
                                >
                                    For Nonprofits
                                </Typography>

                                <Box
                                    sx={{
                                        width: 400,
                                    }}
                                >
                                    <Typography
                                        variant="body1"
                                        mb={5}
                                        fontSize={20}
                                    >
                                        Partner with Blueprint to build the
                                        application your organization needs.
                                    </Typography>
                                </Box>

                                <Link
                                    to="apply/nonprofits"
                                    style={{ textDecoration: 'none' }}
                                >
                                    <Button
                                        variant="outlined"
                                        sx={{
                                            color: 'primary.main',
                                            borderColor: 'primary.main',
                                        }}
                                    >
                                        Learn more
                                    </Button>
                                </Link>
                            </Box>
                        </Box>
                    </Grid>
                </Grid>
            </Box>
        </>
    )
}

export default Apply
