import { Grid, Button, Typography } from '@material-ui/core';
import { useStyles } from '../Styles';

const Pagination = ({ pageData }) => {
    const classes = useStyles()
    return (
        <>
            <Grid
                spacing={1}
                container
                direction="row"
                justifyContent="flex-start"
                alignItems="center"
                className={classes.root}
                container>
                <Grid item xs={6} sm={6} md={8} lg={10}>
                    <Typography
                        gutterBottom
                        variant="subtitle1"
                        className={classes.searchResultText}>
                        {(pageData.totalHits > 0) ? pageData.totalHits + " articles found" : ""}
                    </Typography>
                </Grid>
                <Grid item xs={3} sm={3} md={2} lg={1}>
                    <Button
                        variant="contained"
                        color="primary"
                        disabled={true}
                        className={classes.paginationBtn}>
                        Previous
                    </Button>
                </Grid>
                <Grid item xs={3} sm={3} md={2} lg={1}>
                    <Button
                        variant="contained"
                        color="primary"
                        disabled={true}
                        className={classes.paginationBtn}>
                        Next
                    </Button>
                </Grid>

            </Grid>
        </>
    )
}


export default Pagination

