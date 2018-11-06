import React from 'react';
import { withStyles, Button } from '@material-ui/core';

const Album = ({
    classes,
    info,
    coverPhoto,
    photoList,
    open,
    clickHandler
}) => {
    return (
        // TODO: Render cover photo if not open, else render photo view
        <Button>
            <img src={coverPhoto} alt={coverPhoto} style={{width: 300, height: 300}}/>
        </Button>
    );
};

export default Album;