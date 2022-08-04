import React from 'react'
import PropTypes from 'prop-types'
import { Avatar, Card, CardHeader, Grid, IconButton } from '@mui/material'
import LinkedInIcon from '@mui/icons-material/LinkedIn'

const MemberInfo = ({ image, link, name, position }) => {
    return (
        <>
            <Grid
                container
                direction="column"
                justifyContent="center"
                alignItems="center"
            >
                <Grid item>
                    <Avatar
                        alt="No image"
                        src={image}
                        sx={{
                            height: 200,
                            width: 200,
                            border: 3,
                            borderColor: 'primary.main',
                        }}
                    />
                </Grid>

                <Grid item>
                    <Card elevation={0}>
                        <CardHeader
                            titleTypographyProps={{ fontSize: 20 }}
                            title={name}
                            subheader={position}
                            action={
                                link ? (
                                    <IconButton
                                        aria-label="settings"
                                        href={link}
                                        target="_blank"
                                    >
                                        <LinkedInIcon
                                            color="primary"
                                            fontSize="medium"
                                            sx={{
                                                color: 'black',
                                            }}
                                        />
                                    </IconButton>
                                ) : null
                            }
                            sx={{ textAlign: 'center' }}
                        />
                    </Card>
                </Grid>
            </Grid>
        </>
    )
}

MemberInfo.propTypes = {
    image: PropTypes.string,
    name: PropTypes.string,
    position: PropTypes.string,
    linkImage: PropTypes.string,
    link: PropTypes.string,
}

export default MemberInfo
