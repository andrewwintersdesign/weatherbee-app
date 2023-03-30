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
} from "@mui/material";

type Props = {};

type NavItem = {
  label: string;
  route: string;
};
const drawerWidth = 200;

const navItems: NavItem[] = [
  {
    label: "Daily Forcast",
    route: "",
  },
  {
    label: "Marine Forcast",
    route: "/marine",
  },
  {
    label: "Historical Data",
    route: "/historical",
  },
];

const NavDrawer = (props: Props) => {
  const menuOpened = useSelector(selectMenuOpen);
  const dispatch = useDispatch();

  const theme = useTheme();
  const largeScreen = useMediaQuery(theme.breakpoints.up("md"));

  const drawer = (
    <>
      <Toolbar />
      <Box sx={{ overflow: "auto" }}>
        <List>
          {navItems.map((navItem) => (
            <ListItemButton>
              <ListItemText primary={navItem.label} />
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
        flexShrink: 0,
        [`& .MuiDrawer-paper`]: {
          width: drawerWidth,
          boxSizing: "border-box",
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
        display: { xs: "block", sm: "none" },
        "& .MuiDrawer-paper": { boxSizing: "border-box", width: drawerWidth },
      }}
    >
      {drawer}
    </Drawer>
  );

  if (largeScreen) return clippedDrawer;
  return mobileDrawer;
};
export default NavDrawer;
