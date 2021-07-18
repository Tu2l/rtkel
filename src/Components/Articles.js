import React from 'react';
import Article from './Article'
import { Grid, Paper,Typography } from '@material-ui/core';
import { useStyles } from '../Styles';



const Articles = ({ data }) => {
    const classes = useStyles()
    return (
        <Grid container
            spacing={1}
            container
            direction="row"
            justifyContent="space-between"
            alignItems="center"
            className={classes.root}>
            {
                data ? data.map((ar,idx) => (
                    <Grid item xs={12} sm={6} md={4} lg={3} key={idx}>
                        <Paper>
                            <Article article={ar} />
                        </Paper>
                    </Grid>
                )) : <Typography variant="h4">No Articles found</Typography>
            }
        </Grid>
    );
}

export default Articles;
