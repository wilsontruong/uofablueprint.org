import React from 'react'
import MemberInfo from './MemberInfo'
import { Grid, Typography } from '@mui/material'

import members from '../../data/members.js'

function Member() {
    const IMG_URI =
        'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png'

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
