import React from 'react'
import { Box, Grid, Typography } from '@mui/material'

let valueObj = require('../../../src/data/values.json')
const display = []

var displayDirectionVal = 'row'
var textAlignVal = 'left'
var marginVal = 20
var paddingLeft = 20

for (var i = 1; i < valueObj.values.length + 1; i++) {
    if (i % 2 == 0) {
        // right value
        displayDirectionVal = 'row'
        textAlignVal = 'right'
        marginVal = -20
    } else {
        // left value
        displayDirectionVal = 'row-reverse'
        textAlignVal = 'left'
        marginVal = 0
        paddingLeft = 20;
    }

    display.push(
        <Grid
            container
            direction={displayDirectionVal}
            textAlign={textAlignVal}
            justifyContent="flex-end"
            ml={marginVal}
            pl={paddingLeft}
            sx={{
                bgcolor: 'primary.light',
                color: 'primary.dark',
            }}
            key={i}
        >
            <Grid item xs={6}>
                <Box
                    sx={{
                        mx: 10,
                    }}
                >
                    <Typography
                        gutterBottom={true}
                        color="primary.main"
                        variant="h5"
                        sx={{
                            fontWeight: 'bold',
                        }}
                    >
                        {' '}
                        {valueObj.values[i - 1].title}
                    </Typography>

                    <Typography color="secondary.main" variant="body1" sx={{}}>
                        {' '}
                        {valueObj.values[i - 1].body}
                    </Typography>
                </Box>
            </Grid>

            <Grid item xs={1}>
                <Box
                    component="img"
                    src={valueObj.values[i - 1].image}
                    alt="Unable to load image"
                    sx={{
                        width: 140,
                        height: 140,
                    }}
                />
            </Grid>
        </Grid>
    )
}

function Value() {
    return (
        <main role="value">
            <Typography
                color="primary.dark"
                variant="h4"
                gutterBottom={true}
                sx={{
                    p: 2,
                    pl: 4,
                    fontWeight: 'bold',
                    mb: 5,
                }}
            >
                {' '}
                Our Values{' '}
            </Typography>

            {display}
        </main>
    )
}

export default Value
