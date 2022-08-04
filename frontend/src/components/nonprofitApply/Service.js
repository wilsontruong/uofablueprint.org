import React from 'react'
import { Typography, Box } from '@mui/material'

function Service() {
    return (
        <div>
            <Box
                sx={{
                    bgcolor: 'secondary.light',
                }}
            >
                <Typography
                    fontSize={40}
                    align="center"
                    style={{ fontWeight: 'bold' }}
                    padding={5}
                >
                    Our Services
                </Typography>

                <Box
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        ml: '25%',
                        mr: '25%',
                    }}
                >
                    <Box
                        component="img"
                        marginRight={5}
                        marginBottom={5}
                        sx={{ height: 130, width: 130 }}
                        src="/assets/monitor.png"
                    />

                    <Box marginBottom={5}>
                        <Typography
                            color="primary"
                            fontWeight={'bold'}
                            fontSize={30}
                            marginBottom={1}
                            align="right"
                        >
                            Web Development
                        </Typography>

                        <Typography
                            color="secondary"
                            fontSize={18}
                            align="right"
                        >
                            Web applications let your users access information
                            from any browser. This might be better for
                            applications that need to be publicly available or
                            ones that help facilitate task management.
                        </Typography>
                    </Box>
                </Box>
                <Box
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        ml: '25%',
                        mr: '25%',
                    }}
                >
                    <Box marginBottom={5}>
                        <Typography
                            color="primary"
                            fontWeight={'bold'}
                            fontSize={30}
                            marginBottom={1}
                        >
                            Mobile Development
                        </Typography>

                        <Typography color="secondary" fontSize={18}>
                            Mobile applications let your users download an app
                            and access it on their phone. This might be better
                            for applications that need to be portable or
                            accessed with no internet connection.
                        </Typography>
                    </Box>
                    <Box
                        component="img"
                        marginRight={5}
                        marginBottom={5}
                        sx={{ height: 130, width: 130 }}
                        src="/assets/smartphone.png"
                    />
                </Box>
            </Box>
        </div>
    )
}

export default Service
