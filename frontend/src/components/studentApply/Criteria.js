import React from 'react'
import studentCriteria from '../../../src/data/studentCriteria.json'
import {Grid, Typography, Box} from '@mui/material'
function Criteria() {
    return (
        <div overflow = "hidden"
        style = {{backgroundColor: "#F8F8F8"}}>
            <Typography
            align = {"left"}
            component = {"h1"} 
            fontSize = {"48px"} 
            fontWeight ={"bold"}
            marginLeft = {"3.5%"}
            marginBottom = {"3%"}>
                Decision Criteria
            </Typography>
            <Grid container spacing ={1} 
            align="Center"
            justify="space-between" >
                {studentCriteria.map(criteria => { //Maps the criteria json to a grid with title and images
                    return( 
                    
                    <Grid item xs = {12} sm = {6} lg = {4}
                     marginBottom = {"2%"}
                     overflow = "hidden"//Resizes the grid based on screen size
                     key = {criteria.title}
                     > 

                    <Box width = "75%" marginLeft = {"12%"}>
                        <div align={"left"}>
                        <img src = {criteria.image} 
                        data-testid = {criteria.image}
                        width = {"30%"} 
                        height = {"30%"} />
                        <Typography  //Sets h1 for he titles and h2 for the text contents
                        component = {"h2"} 
                        fontSize = {"24px"} 
                        fontWeight ={"bold"}
                        marginTop = {"5%"}>
                            {criteria.title}
                        </Typography>
                        </div>
                        <Typography 
                        component = {"h3"}
                        fontSize = {"24px"}  
                        align = {"left"}
                        color={"primary.dark"}
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
