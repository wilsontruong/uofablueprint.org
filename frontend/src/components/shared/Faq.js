import React from 'react'
import PropTypes from 'prop-types'
import { Box, Typography } from '@mui/material';


function Faq({FaqData}) {
    return (
        <Box padding={3} sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
        }} bgcolor="primary.dark">

            <Typography fontSize={40} color='primary.light'> Frequently Asked Questions</Typography>

            {FaqData.map((Faq) => {
                return (
                    <Box key={Faq.title} padding={4} sx={{
                        mr: '18%',
                        ml: '18%'
                    }}>
                        
                        <Typography color={'white'} fontSize={30} marginBottom={1}>{Faq.title}</Typography>
                        <Typography color={'white'} fontSize={18}>{Faq.body}</Typography>

                    </Box>
                )
            })}

        </Box>
    )
}

Faq.propTypes = {
    FaqData: PropTypes.array,
}


export default Faq
