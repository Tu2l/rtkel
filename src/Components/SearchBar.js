import React from 'react';
import { Grid, TextField, Button, FormGroup } from '@material-ui/core';
import { useStyles } from '../Styles';

const SearchBar = ({ onSearch, searchWord ,disableSearch}) => {
    const classes = useStyles();
    let keyword = searchWord;

    return (
        <FormGroup className={classes.searchForm} noValidate autoComplete="off">
            <Grid container alignContent="center" alignItems="center">
                <Grid item xs={9} >
                    <TextField
                        className={classes.searchText}
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
                <Grid item xs={3}>
                    <Button
                        className={classes.SearchBtn}
                        variant="contained"
                        color="primary"
                        disabled = {disableSearch}
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
        </FormGroup>
    );
}

export default SearchBar;
