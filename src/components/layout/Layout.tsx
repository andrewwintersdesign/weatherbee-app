import { Box, Toolbar } from "@mui/material";
import { ReactNode } from "react";
import { NavDrawer } from "./nav-drawer";
import { Navbar } from "./navbar";

type Props = {
  children: ReactNode;
};

const Layout = (props: Props) => {
  return (
    <Box sx={{ display: "flex", bgcolor: 'primary.main' }}>
      <Navbar />
      <NavDrawer />
      <Box component="main" sx={{ flexGrow: 1, height: "100vh" }}>
        <Toolbar />
        <Box sx={{ p: 2 }}>{props.children}</Box>
      </Box>
    </Box>
  );
};

export default Layout;
