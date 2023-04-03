import { Box, useTheme } from '@mui/material';
import './loadingBox.css'
type Props = {
    width: number;
    height: number;
    opacity: number;
}

const LoadingBox = (props: Props) => {

    const primary = useTheme().palette.primary.light;

    const borderRadius = props.height / 8
    
  return (
    <Box className="shimmer"  sx={{width: props.width, height: props.height,
        background: `linear-gradient(to right, #000000 8%, ${primary} 18%, #000000 33%)`, opacity: props.opacity, borderRadius: borderRadius,
        backgroundSize: '800px 104px' }} />
  )
}

export default LoadingBox