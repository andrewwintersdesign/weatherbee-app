import { Box, useTheme } from '@mui/material';
import { ReactNode } from 'react';
import './loadingBox.css'
type Props = {
    width: number;
    height: number;
    opacity: number;
    loading: boolean;
    children: ReactNode
}

const LoadingBox = (props: Props) => {

    const primary = useTheme().palette.primary.light;

    const borderRadius = props.height / 8
    
  return (
    <>
    {props.loading ? <Box className="shimmer"  sx={{width: props.width, height: props.height,
        background: `linear-gradient(to right, #000000 8%, ${primary} 18%, #000000 33%)`, opacity: props.opacity, borderRadius: borderRadius,
        backgroundSize: '800px 104px' }} />
        : props.children}
        </>
  )
}

export default LoadingBox