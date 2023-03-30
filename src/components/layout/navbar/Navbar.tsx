import AppBar from "@mui/material/AppBar";
import { Box, Icon, IconButton, InputAdornment, TextField, Toolbar, Typography } from "@mui/material";
import { useDispatch } from "react-redux";
import { toggle } from "../../../state/mobileMenu/mobileMenuSlice";
type Props = {};

const Navbar = (props: Props) => {
  const dispatch = useDispatch();
  return (
    <AppBar
      position="fixed"
      sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
    >
      <Toolbar sx={{p: 1}}>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          edge="start"
          onClick={() => dispatch(toggle())}
          sx={{ mr: 2, display: { md: "none" } }}
        >
          <Icon>menu</Icon>
        </IconButton>
        <Box sx={{ display: 'flex', alignItems: 'center', flexGrow: 1, justifyContent: 'space-between'}}>
          <Typography variant="h6" color="inherit" component="div">
            weatherbee
          </Typography>
          <TextField
            id="outlined-basic"
            label="Search Location"
            variant="outlined"
            InputProps={{
              endAdornment: (
                <InputAdornment position="start">
                  <Icon>search</Icon>
                </InputAdornment>
              ),
            }}
          />
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
