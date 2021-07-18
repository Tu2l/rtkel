import React from 'react';
import { Grid, TextField, Button, FormGroup } from '@material-ui/core';
import { useStyles } from '../Styles';

const SearchBar = ({onSearch,keyword}) => {
    const classes = useStyles();
    let newKeyword;
    
    return (
        <FormGroup className={classes.searchForm} noValidate autoComplete="off">
            <Grid container alignContent="center" alignItems="center">
                <Grid item xs={9} >
                    <TextField
                        className={classes.searchText}
                        label="Search"
                        variant="outlined"
                        onChange ={(e)=>{
                            newKeyword = e.target.value                            
                        }}

                        
                    />
                </Grid>
                <Grid item xs={3}>
                    <Button
                        className={classes.SearchBtn}
                        variant="contained"
                        color="primary"
                        onClick={() => {
                            if (!newKeyword) {
                                alert("Please enter a newKeyword")
                                return
                            }
                            onSearch(newKeyword)
                        }}>
                        Search
                    </Button>
                </Grid>
            </Grid>
        </FormGroup>
    );
}

export default SearchBar;
