import './Navbar.css';
import AppBar from "@mui/material/AppBar";
import { Box, Icon, IconButton, Toolbar, Typography } from "@mui/material";
import { useDispatch } from "react-redux";
import { toggle } from "../../../state/mobileMenu/mobileMenuSlice";
import { ReactComponent as Logo } from '../../../assets/logo';

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
          sx={{ mr: 2, display: { lg: "none" } }}
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
          <Box component="i"  sx={{
            width: 42,
            height: 36
          }}> <Logo className="logo"/></Box>
          <Typography variant="h6" color="inherit" component="div">
            weatherbee
          </Typography>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
