import React from 'react'
import MemberInfo from './MemberInfo'
import { Grid, Typography } from '@mui/material'

import members from '../../data/members.js'

function Member() {
    const IMG_URI =
        'https://previews.123rf.com/images/studiostoks/studiostoks1604/studiostoks160400296/55726621-male-business-coach-draws-on-background-pop-art-retro-style-business-training-drawing-board.jpg'

    return (
        <>
            <Typography
                align="center"
                variant="h4"
                gutterBottom={true}
                sx={{
                    mb: 10,
                    mt: 10,
                }}
            >
                Meet the Team
            </Typography>

            <Grid
                container
                direction="row"
                justifyContent="space-evenly"
                alignItems="center"
                sx={{
                    mb: 10,
                }}
            >
                {members.map((member) => {
                    return (
                        <Grid key={member.id} item xs={3}>
                            <MemberInfo
                                image={IMG_URI}
                                link={member.linkedin}
                                name={member.name}
                                position={member.position}
                            />
                        </Grid>
                    )
                })}
            </Grid>
        </>
    )
}

export default Member
