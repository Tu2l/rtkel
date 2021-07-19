import React from 'react';
import { Typography } from '@material-ui/core';

const Footer = () => {
    return (
        <center>
            <Typography
                style={{
                    padding: 10
                }}
                variant="subtitle1" component="p">
                Source V0.1.0 &copy;
            </Typography>
        </center>
    );
}

export default Footer;
