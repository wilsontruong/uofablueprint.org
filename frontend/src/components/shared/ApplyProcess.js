import React from 'react'
import PropTypes from 'prop-types'
import { Typography, Box } from '@mui/material'

function ApplicationProcess({ ApplyProcessData, title }) {
    return (
        <div>
            <Typography
                variant="h4"
                align="center"
                style={{ fontWeight: 'bold' }}
                padding={5}
            >
                {title}
            </Typography>
            {ApplyProcessData.map((applyProcess) => {
                return (
                    <div key={applyProcess.number}>
                        <Box
                            sx={{
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'space-between',
                                ml: '30%',
                                mr: '30%',
                            }}
                        >
                            <Box>
                                <Typography
                                    marginRight={5}
                                    fontSize={90}
                                    color={'primary'}
                                    fontWeight={500}
                                >
                                    {applyProcess.number}
                                </Typography>
                            </Box>

                            <Box>
                                <Typography
                                    color="primary"
                                    fontWeight={'bold'}
                                    fontSize={27}
                                    marginBottom={1}
                                >
                                    {applyProcess.title}
                                </Typography>

                                <Typography color="secondary">
                                    {applyProcess.body}
                                </Typography>
                            </Box>
                        </Box>

                        <Box
                            sx={{
                                ml: '32.5%',
                            }}
                        >
                            <Typography
                                fontSize={50}
                                color={'primary'}
                                fontWeight={'bold'}
                            >
                                {applyProcess.divider}
                            </Typography>
                        </Box>
                    </div>
                )
            })}
        </div>
    )
}

ApplicationProcess.propTypes = {
    ApplyProcessData: PropTypes.array,
    title: PropTypes.string,
}

export default ApplicationProcess
