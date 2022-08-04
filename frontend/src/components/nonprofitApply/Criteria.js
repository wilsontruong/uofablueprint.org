import React, { useState, useEffect } from 'react'
import nonprofitCriteria from '../../data/nonprofitCriteria.json'
import { Grid, Typography, Box } from '@mui/material'

// Adds hook to adjust margins based on window size
function useWindowSize() {
    const [size, setSize] = useState([window.innerWidth])

    useEffect(() => {
        const handleResize = () => {
            setSize([window.innerWidth])
        }
        //Gets size in real time
        window.addEventListener('resize', handleResize)
    }, [])
    //Returns window size
    return size
}

function Criteria() {
    const width = useWindowSize()
    return (
        <div overflow="hidden" style={{ backgroundColor: '#F8F8F8' }}>
            <Typography //Styles title
                align={'left'}
                component={'h1'}
                fontSize={'48px'}
                fontWeight={'bold'}
                marginLeft={'4%'}
                marginBottom={'3%'}
                paddingTop={'3%'}
            >
                Decision Criteria
            </Typography>
            <Grid
                container //Styles grid
                width={'85%'}
                marginLeft={'5%'}
                align="center"
            >
                {nonprofitCriteria.map((criteria, index) => {
                    //Maps the criteria json to a grid with title and images
                    let columnMax = 12
                    let columnAmount = 3
                    let widthPercent = '75%' //For the first row
                    let boxLeftMargin = '0%'
                    let boxRightMargin = '0%'
                    if (index >= 3) {
                        columnAmount = 2
                        widthPercent = '50%'
                        if (index == 3) {
                            //Changes margin of third and fourth boxes depending on size so stuff looks nice
                            boxLeftMargin = '25%'
                        } else {
                            boxRightMargin = '25%'
                        }
                    }
                    let ratio = columnMax / columnAmount

                    return (
                        // After 3 items remove
                        <Grid
                            item
                            xs={12}
                            sm={6}
                            lg={ratio}
                            marginBottom={'2%'}
                            overflow={'hidden'} //Resizes the grid based on screen size
                            key={criteria.title}
                        >
                            <Box
                                width={widthPercent}
                                align={'center'}
                                marginLeft={width < 600 ? '0%' : boxLeftMargin} // Updates margins depending on window size, uses same parameters as mui to make everything work nice
                                marginRight={
                                    width < 600 ? '0%' : boxRightMargin
                                }
                            >
                                <div>
                                    <img
                                        src={criteria.image}
                                        data-testid={criteria.image}
                                        width={'30%'}
                                        height={'30%'}
                                    />

                                    <Typography //Sets h1 for he titles and h2 for the text contents
                                        component={'h2'}
                                        fontSize={'24px'}
                                        fontWeight={'bold'}
                                        marginTop={'5%'}
                                    >
                                        {criteria.title}
                                    </Typography>
                                </div>
                                <Typography
                                    component={'h3'} //Renders paragraph text
                                    fontSize={'24px'}
                                    align={'center'}
                                    color={'primary.dark'}
                                >
                                    {criteria.body}
                                </Typography>
                            </Box>
                        </Grid>
                    )
                })}
            </Grid>
        </div>
    )
}

export default Criteria
