import React from 'react'
import { Box, Typography, Link } from '@mui/material'

function Header() {
    return (
        <main role="header">
            <div>
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'row',
                        bgcolor: 'primary.dark',
                        p: 3,
                    }}
                >
                    <Link href="/">
                        <Box
                            component="img"
                            sx={{ height: 50, width: 210, ml: 2 }}
                            src="/assets/banner_negative.png"
                        />
                    </Link>

                    {/* <Typography fontSize={20} color='primary.light' mt={0.5} ml={0.5}>blueprint</Typography> */}

                    <Box
                        sx={{
                            display: 'flex',
                            flexDirection: 'row',
                            flexGrow: 1,
                            flexWrap: 'wrap',
                            justifyContent: 'flex-end',
                            mr: 10,
                        }}
                    >
                        <Typography mx={2} my={1}>
                            <Link
                                color="primary.light"
                                fontWeight="bold"
                                href="/about"
                                underline="none"
                            >
                                {' '}
                                About Us
                            </Link>
                        </Typography>
                        <Typography mx={2} my={1}>
                            <Link
                                color="primary.light"
                                fontWeight="bold"
                                href="/projects"
                                underline="none"
                            >
                                {' '}
                                Projects
                            </Link>
                        </Typography>
                        <Typography mx={2} my={1}>
                            <Link
                                color="primary.light"
                                fontWeight="bold"
                                href="/apply/students"
                                underline="none"
                            >
                                {' '}
                                For Students
                            </Link>
                        </Typography>
                        <Typography mx={2} my={1}>
                            <Link
                                color="primary.light"
                                fontWeight="bold"
                                href="/apply/nonprofits"
                                underline="none"
                            >
                                For Nonprofits
                            </Link>
                        </Typography>
                    </Box>
                </Box>
            </div>
        </main>
    )
}

export default Header
