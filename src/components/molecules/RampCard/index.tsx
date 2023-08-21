import React from 'react';
import { Grid } from '@mui/material';
import Checkbox from '@mui/material/Checkbox';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

interface RampCardProps {
    CardName: string;
    CardLabel: string;
    amount: string;
    Date: string;
    UserName: string;
    receipt: string;
    memo: string;

}

const RampCardComponent = (props: RampCardProps) => {
    return (
        <Grid
        container
        direction={"row"}
        alignItems={"center"}
        justifyContent={"space-between"}>
            <Checkbox />
            <Typography children={props.CardName} variant='body1'/>
            <Typography children={props.amount} variant='body1'/>
            <Typography children={props.Date} variant='body1'/>
            <Typography children={props.UserName} variant='body1'/>
            <Typography children={props.receipt} variant='body1'/>
            <Typography children={props.memo} variant='body1'/>
            <Button children="Make Ready" variant='contained'/>
        </Grid>

    )
}