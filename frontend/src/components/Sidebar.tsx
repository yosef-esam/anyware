import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import {
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  IconButton,
  Toolbar,
  Box,
  Typography,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import DashboardIcon from "@mui/icons-material/Dashboard";
import AnnouncementIcon from "@mui/icons-material/Announcement";
import QuizIcon from "@mui/icons-material/Quiz";

import LogoutIcon from "@mui/icons-material/Logout";
import type { AppDispatch } from "../store";
import { useDispatch } from "react-redux";
import { logout } from "../store/slices/authSlice";

const drawerWidth = 240;

function Sidebar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();

  const handleLogout = () => {
    dispatch(logout());
    navigate("/");
  };

  const toggleDrawer = () => {
    setMobileOpen(!mobileOpen);
  };

  const links = [
    { text: "Dashboard", path: "/dashboard", icon: <DashboardIcon /> },

    { text: "Announcements", path: "/announcements", icon: <AnnouncementIcon /> },
    { text: "Quizzes", path: "/quizzes", icon: <QuizIcon /> },
  ];

  const drawerContent = (
    <Box>
      <Toolbar>
        <Typography variant="h6" sx={{ color: "white", fontWeight: "bold" }}>
          Coligo
        </Typography>
      </Toolbar>
      <List>
        {links.map((link) => {
          const isActive = location.pathname === link.path;
          return (
            <ListItem key={link.text} disablePadding>
              <ListItemButton
                component={Link}
                to={link.path}
                onClick={() => setMobileOpen(false)} 
                sx={{
                  bgcolor: isActive ? "white" : "transparent",
                  color: isActive ? "black" : "white",
                  "&:hover": {
                    bgcolor: "white",
                    color: "black",
                    "& .MuiSvgIcon-root": { color: "black" },
                  },
                }}
              >
                <ListItemIcon
                  sx={{
                    color: isActive ? "black" : "white",
                    minWidth: 40,
                  }}
                >
                  {link.icon}
                </ListItemIcon>
                <ListItemText primary={link.text} />
              </ListItemButton>
            </ListItem>
          );
        })}

        <ListItem disablePadding>
          <ListItemButton
            onClick={() => {
              handleLogout();
              setMobileOpen(false);
            }}
            sx={{
              "&:hover": {
                bgcolor: "white",
                color: "black",
                "& .MuiSvgIcon-root": { color: "black" },
              },
            }}
          >
            <LogoutIcon />
            <ListItemText primary="Logout" sx={{ ml: 2 }} />
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  );

  return (
    <Box>
      <IconButton
        color="inherit"
        edge="start"
        onClick={toggleDrawer}
        sx={{ ml: 1, mt: 1, display: { sm: "none" } }}
      >
        <MenuIcon />
      </IconButton>

      <Drawer
        variant="permanent"
        sx={{
          display: { xs: "none", sm: "block" },
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
            background: "linear-gradient(180deg, #1a73e8, #0049b7)",
            color: "white",
          },
        }}
        open
      >
        {drawerContent}
      </Drawer>

      <Drawer
        variant="temporary"
        open={mobileOpen}
        onClose={toggleDrawer}
        ModalProps={{ keepMounted: true }}
        sx={{
          display: { xs: "block", sm: "none" },
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
            background: "linear-gradient(180deg, #1a73e8, #0049b7)",
            color: "white",
          },
        }}
      >
        {drawerContent}
      </Drawer>
    </Box>
  );
}

export default Sidebar;
