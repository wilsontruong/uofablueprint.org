import React from 'react'
import { Box, Typography, Link } from '@mui/material'
import { AiOutlineCopyright, AiOutlineMail, AiOutlineLinkedin, AiOutlineInstagram, AiFillGithub } from 'react-icons/ai'
import Tooltip from '@mui/material/Tooltip';

function Footer() {
    return (
        <main>
            <div>
                <Box sx={{ display: "flex", flexDirection: "row", bgcolor: "secondary.dark", p: 3 }}>
                    <Box sx={{ display: "flex", flexDirection: "column" }}>
                        <Box component="img"
                            sx={{ height: 50, width: 200 }}
                            src="/assets/banner_negative.png" />

                        <Box sx={{ display: "flex", flexDirection: "row", mt: 10 }}>
                            <Typography color='secondary.main' fontSize={16}> <AiOutlineCopyright size={15} /> Blueprint 2022</Typography>
                        </Box>
                    </Box>


                    <Box sx={{
                        display: "flex",
                        flexDirection: "row",
                        flexGrow: 1,
                        flexWrap: 'wrap',
                        justifyContent: "flex-end",
                    }}>
                        <Box sx={{ mx: 5, justifyContent: "center" }}>
                            <Typography variant='subtitle1' color='primary.light' mb={2} mr={1} fontWeight='bold'> General </Typography>
                            <Link href='/' underline="none">
                                <Typography variant='subtitle1' color='primary.light'> Home</Typography>
                            </Link>
                            <Link href='/' underline="none">
                                <Typography variant='subtitle1' color='primary.light'> General</Typography>
                            </Link>
                            <Link href='/' underline="none">
                                <Typography variant='subtitle1' color='primary.light'> Projects</Typography>
                            </Link>
                        </Box>
                        <Box sx={{ mx: 5 }}>
                            <Typography variant='subtitle1' color='primary.light' mb={2} fontWeight='bold'> For Students </Typography>
                            <Link href='/apply/students' underline="none">
                                <Typography variant='subtitle1' color='primary.light'> About</Typography>
                            </Link>
                            <Link href='/apply/students' underline="none">
                                <Typography variant='subtitle1' color='primary.light'> FAQ</Typography>
                            </Link>
                        </Box>
                        <Box sx={{ mx: 5 }}>
                            <Typography variant='subtitle1' color='primary.light' mb={2} fontWeight='bold'> For Nonprofits </Typography>
                            <Link href='/apply/nonprofits' underline="none">
                                <Typography variant='subtitle1' color='primary.light'> About</Typography>
                            </Link>
                            <Link href='/apply/nonprofits' underline="none">
                                <Typography variant='subtitle1' color='primary.light'> FAQ</Typography>
                            </Link>
                        </Box>
                        <Box sx={{ mx: 5 }}>
                            <Typography variant='subtitle1' color='primary.light' mb={2} fontWeight='bold'> Contact Us </Typography>
                            <Box sx={{ display: "flex", flexDirection: "row" }}>


                                <Tooltip disableFocusListener disableTouchListener title="uofa-blueprint@gmail.com">
                                    <Box sx={{ mt: 0.5, display: "flex", flexDirection: "row" }}>
                                        <AiOutlineMail style={{ color: "white" }} size={22} />
                                        <Typography variant='subtitle1' color='primary.light' ml={1} > Email</Typography>
                                    </Box>
                                </Tooltip>
                            </Box >
                            <Box sx={{ display: "flex", flexDirection: "row" }}>
                                <Link href="https://www.linkedin.com/company/uofa-blueprint/" target="_blank" underline="none" >
                                    <Box sx={{ mt: 0.5, display: "flex", flexDirection: "row" }}>
                                        <AiOutlineLinkedin style={{ color: "white" }} size={22} />
                                        <Typography variant='subtitle1' color='primary.light' ml={1} > LinkedIn</Typography>
                                    </Box>

                                </Link>
                            </Box >
                            <Box sx={{ display: "flex", flexDirection: "row" }}>
                                <Link href="https://www.instagram.com/uofablueprint/" target="_blank" underline="none">
                                    <Box sx={{
                                        mt: 0.5, display: "flex", flexDirection: "row"
                                    }}>
                                        <AiOutlineInstagram style={{ color: "white" }} size={22} />
                                        <Typography variant='subtitle1' color='primary.light' ml={1} > Instagram</Typography>
                                    </Box>
                                </Link>
                            </Box >
                            <Box sx={{ display: "flex", flexDirection: "row" }}>
                                <Link href="https://github.com/UofA-Blueprint" target="_blank" underline="none">
                                    <Box sx={{ mt: 0.5, display: "flex", flexDirection: "row" }}>
                                        <AiFillGithub style={{ color: "white" }} size={22} />
                                        <Typography variant='subtitle1' color='primary.light' ml={1} > Github</Typography>
                                    </Box>
                                </Link>
                            </Box >
                        </Box>

                    </Box>
                </Box>

            </div>
        </main >
    )
}

export default Footer
