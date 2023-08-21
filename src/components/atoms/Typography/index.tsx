import React from 'react';
import { ThemeProvider, Typography, TypographyProps} from '@mui/material';

interface TypographyComponentProps extends TypographyProps{
    children: string
}

const TypographyComponent = (props: TypographyComponentProps) => {
    return 
    <Typography variant={props.variant} {...props}>
        {props.children}
    </Typography>
};

export default TypographyComponent;