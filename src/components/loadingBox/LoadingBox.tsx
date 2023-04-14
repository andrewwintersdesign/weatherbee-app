import { Box, useTheme } from "@mui/material";
import { ReactNode } from "react";
import "./loadingBox.css";
type Props = {
  width: number;
  height: number;
  opacity: number;
  loading: boolean;
  children: ReactNode;
};

const LoadingBox = (props: Props) => {
  const primary = useTheme().palette.primary.light;

  const borderRadius = props.height / 8;

  return (
    <>
      {props.loading ? (
        <Box
          data-testid="loading"
          sx={{
            width: props.width * 0.75,
            height: props.height,
            display: "flex",
            alignItems: "center",
          }}
        >
          <Box
            className="shimmer"
            sx={{
              width: "100%",
              height: "75%",
              background: `linear-gradient(to right, #000000 8%, ${primary} 18%, #000000 33%)`,
              opacity: props.opacity,
              borderRadius: borderRadius,
              backgroundSize: "800px 104px",
            }}
          />
        </Box>
      ) : (
        props.children
      )}
    </>
  );
};

export default LoadingBox;
