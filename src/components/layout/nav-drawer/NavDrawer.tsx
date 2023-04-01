import { useSelector, useDispatch } from "react-redux";

import {
  close,
  selectMenuOpen,
} from "../../../state/mobileMenu/mobileMenuSlice";
import {
  Box,
  List,
  Drawer,
  Toolbar,
  ListItemButton,
  ListItemText,
  useTheme,
  useMediaQuery,
  ListItemIcon,
  Icon,
} from "@mui/material";
import { LocationSearch } from "../navbar/locationSearch";

type NavItem = {
  label: string;
  route: string;
  icon: string;
};
const drawerWidth = 300;

const navItems: NavItem[] = [
  {
    label: "Daily Forcast",
    route: "",
    icon: 'home'
  },
  {
    label: "Marine Forcast",
    route: "/marine",
    icon: 'sailing'
  },
  {
    label: "Historical Data",
    route: "/historical",
    icon: 'query_stats'
  },
];

const NavDrawer = () => {
  const menuOpened = useSelector(selectMenuOpen);
  const dispatch = useDispatch();

  const theme = useTheme();
  const largeScreen = useMediaQuery(theme.breakpoints.up("md"));

  const drawer = (
    <>
      <Toolbar />
      <Box sx={{ overflow: "auto", p: 2 }}>
        <LocationSearch />
        <List>
          {navItems.map((navItem) => (
            <ListItemButton key={navItem.label}>
              <ListItemIcon><Icon color="secondary">{navItem.icon}</Icon></ListItemIcon>
              <ListItemText primaryTypographyProps={{ variant: 'button' }} primary={navItem.label} />
            </ListItemButton>
          ))}
        </List>
      </Box>
    </>
  );

  const clippedDrawer = (
    <Drawer
      variant="permanent"
      sx={{
        width: drawerWidth,
        maxWidth: "100%",
        flexShrink: 0,
        [`& .MuiDrawer-paper`]: {
          width: drawerWidth,
          maxWidth: "100%",
          boxSizing: "border-box",
          bgcolor: "primary.main",
          border: 2,
          display: { xs: "none", sm: "block" },
        },
      }}
    >
      {drawer}
    </Drawer>
  );

  const mobileDrawer = (
    <Drawer
      variant="temporary"
      open={menuOpened}
      onClose={() => dispatch(close())}
      ModalProps={{
        keepMounted: true, // Better open performance on mobile.
      }}
      sx={{
        display: { sm: "block", md: "none" },
        maxWidth: "100%",
        "& .MuiDrawer-paper": {
          boxSizing: "border-box",
          width: drawerWidth,
          borderRight: 2,
          bgcolor: "primary.main",
        },
      }}
    >
      {drawer}
    </Drawer>
  );

  if (largeScreen) return clippedDrawer;
  return mobileDrawer;
};
export default NavDrawer;
