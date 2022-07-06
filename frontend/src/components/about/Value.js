import React from 'react'
import { Box, Typography } from '@mui/material';

let valueObj = require("../../../src/data/values.json")
const display = [];

for (var i = 1; i < (valueObj.values.length + 1); i++) {

    //Left value
    if (i % 2 !== 0) {
        display.push((<Box sx={{
            display: 'flex',
            flexDirection: 'row',
            width: 1,
            height: 1,
            alignItems: 'center',
            justifyContent: 'center',
            px: 5,
            bgcolor: 'primary.light',
            color: 'primary.dark'

        }} key={i}>

            <img src={valueObj.values[i - 1].image} width={120} height={120} />
            <Box sx={{
                width: 1 / 2,
                display: 'flex',
                flexDirection: 'column',
                px: 4,
                mb: 1
            }} >

                <Typography mb={1} color='primary.main' fontSize={20}> {valueObj.values[i - 1].title}</Typography>
                <Typography color='secondary.main' fontSize={14}> {valueObj.values[i - 1].body}</Typography>
            </Box>
        </Box>))

    }
    //Right value
    else if (i % 2 === 0) {
        display.push((<Box sx={{
            display: 'flex',
            flexDirection: 'row',
            width: 1,
            height: 1,
            alignItems: 'center',
            justifyContent: 'center',
            px: 5,
            bgcolor: 'primary.light',
            color: 'primary.dark'

        }} key={i}>


            <Box sx={{
                width: 1 / 2,
                display: 'flex',
                flexDirection: 'column',
                px: 4,
                mb: 1
            }}>

                <Typography mb={1} align='right' color='primary.main' fontSize={20}> {valueObj.values[i - 1].title}</Typography>
                <Typography align='right' color='secondary.main' fontSize={14}> {valueObj.values[i - 1].body}</Typography>
            </Box>
            <img src={valueObj.values[i - 1].image} width={120} height={120} />
        </Box>))

    }
}

function Value() {
    return (
        <main role="value">
            <Typography color="primary.dark" ml={30} fontSize={25} fontWeight="bold"> Our Values </Typography>
            {display}
        </main>
    )
}

export default Value
