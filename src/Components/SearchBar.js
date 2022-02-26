import React from 'react';
import { Grid, TextField, Button, FormGroup, Container } from '@material-ui/core';
import { useStyles } from '../Styles';

const SearchBar = ({ onSearch, searchWord, disableSearch }) => {
    const classes = useStyles();
    let keyword = searchWord;

    return (
        <Grid container alignContent="center" alignItems="center" className={classes.searchForm}>
            <Grid item xs={10} sm={10} md={10} lg={10} >
                <TextField
                    className={classes.searchInput}
                    size="small"
                    label="Search"
                    variant="outlined"
                    onKeyDown={(e) => {
                        if (e.key === "Enter") {
                            if (!keyword) {
                                alert("Please enter a keyword")
                                return
                            }
                            onSearch(keyword)
                        }
                    }}
                    onChange={(e) => {
                        keyword = e.target.value
                    }}
                />
            </Grid>
            <Grid item xs={2} sm={2} md={2} lg={2} >
                <Button
                    className={classes.SearchBtn}
                    variant="contained"
                    color="primary"
                    disabled={disableSearch}
                    onClick={() => {
                        if (!keyword) {
                            alert("Please enter a newKeyword")
                            return
                        }
                        onSearch(keyword)
                    }}>
                    Search
                </Button>
            </Grid>
        </Grid>
    );
}

export default SearchBar;
