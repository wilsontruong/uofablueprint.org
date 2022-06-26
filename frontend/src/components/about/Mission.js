import { Typography } from '@mui/material'
import React from 'react'
import { Box } from '@mui/system';
import { Theme } from '../../config/Theme';

function Mission() {
    return (
        <Box sx={{
            background: Theme.palette.secondary.light,
            textAlign: 'center',
        }}>
            <Typography variant='h4' gutterBottom={true} color={Theme.palette.primary.main} sx={{
                pt: 4,
                fontWeight: 'bold'
            }}>
                Our Mission Statement
            </Typography>

            <Typography variant='body1' color={Theme.palette.secondary.dark} sx={{
                p: 4,
                fontSize: 22,
                width: 700,
                mx: 'auto'
            }}>
                To make beautiful engineering accessible and useful for those who create
                communities and promote public welfare.
            </Typography>
        </Box>
    )
}

export default Mission
