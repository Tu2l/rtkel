import React from 'react';
import { useStyles } from '../Styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Switch from '@material-ui/core/Switch';
import IconButton from '@material-ui/core/IconButton';
import Logo from '../logo.png';


const Header = () => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <AppBar position="fixed">
                <Toolbar>
                    <IconButton edge="start" className={classes.headerMenuButton} color="inherit" aria-label="menu">
                        <img src={Logo} alt="source-logo" style={
                            {
                                width: "40px",
                                height: "40px",
                            }
                        } />
                    </IconButton>
                    <Typography variant="h6" className={classes.root}>
                        Source
                    </Typography>
                    {/* <Typography color="inherit" >DARK MODE</Typography>
                    <Switch
                        name="darkmode"
                    /> */}

                </Toolbar>
            </AppBar>
        </div>
    );
}

export default Header;

