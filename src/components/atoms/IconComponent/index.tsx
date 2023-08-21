import React from 'react';
import { styled } from '@mui/material';

interface IconComponentProps {
    width?: string;
    height?: string;
    padding?: string;
    src: string;
}


const StyledIcon = styled("img")((props: IconComponentProps) =>({
    height: props.height,
    width: props.width,
    padding: props.padding
}))

const IconComponent : React.FC<IconComponentProps> = ({src, width, height, padding, ...props})=>{
    return (
        <div>
            <StyledIcon
            src= {src}
            width= {width}
            height= {height}
            padding={padding}
            alt = "icon"
            {...props}/>
        </div>
    )
}
