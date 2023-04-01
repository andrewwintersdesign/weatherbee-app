import './Navbar.css';
import AppBar from "@mui/material/AppBar";
import { Box, Icon, IconButton, Toolbar, Typography } from "@mui/material";
import { useDispatch } from "react-redux";
import { toggle } from "../../../state/mobileMenu/mobileMenuSlice";

const Navbar = () => {
  const dispatch = useDispatch();
  return (
    <AppBar
      position="fixed"
      elevation={0}
      sx={{ zIndex: (theme) => theme.zIndex.drawer + 1, borderBottom: 2 }}
    >
      <Toolbar>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          edge="start"
          onClick={() => dispatch(toggle())}
          sx={{ mr: 2, display: { md: "none" } }}
        >
          <Icon>menu</Icon>
        </IconButton>

        <Box
          component="a"
          href="/"
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 1
          }}
        >
          <Box component="i" className="logo" sx={{
            width: {
              xs: 42,
              sm: 56,
              md: 56,
              lg: 56
            },
            height: {
              xs: 36,
              sm: 48,
              md: 48,
              lg: 48
            }
          }}></Box>
          <Typography variant="h6" color="inherit" component="div">
            weatherbee
          </Typography>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
