import React, { useState } from "react";
import All from "./All";
import {
  AppBar,
  Box,
  Button,
  IconButton,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
} from "@mui/material";
import NotificationsIcon from "@mui/icons-material/Notifications";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";

const Navbar = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const openMenu = Boolean(anchorEl);
  const handleClick = (e) => {
    setAnchorEl(e.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <AppBar>
        <Toolbar sx={{ ml: "auto" }}>
          <IconButton
            size="large"
            aria-label="more"
            aria-controls={"notification-menu"}
            aria-expanded={openMenu ? "true" : undefined}
            aria-haspopup="true"
            onClick={handleClick}
          >
            <NotificationsIcon />
          </IconButton>
          <Menu
            id="notification-menu"
            anchorEl={anchorEl}
            open={openMenu}
            onClose={handleClose}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "right",
            }}
            transformOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
          >
            <Box width={360} height={"calc(90vh - 16px)"} pl="16px" pr="16px">
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItem: "center",
                }}
              >
                <Typography
                  sx={{ fontSize: "24px", fontWeight: "700" }}
                  variant="h4"
                >
                  Notification
                </Typography>
                <IconButton>
                  <MoreHorizIcon />
                </IconButton>
              </Box>
              <Box>
                <Button
                  sx={{
                    borderRadius: "100rem",
                    color: "#333",
                    textTransform: "capitalize",
                    fontSize: "15px",
                    backgroundColor: "#999",
                    margin: "8px",
                    fontWeight: "600",
                  }}
                >
                  All
                </Button>
                <Button
                  sx={{
                    borderRadius: "100rem",
                    color: "#333",
                    textTransform: "capitalize",
                    fontSize: "15px",
                    backgroundColor: "#999",
                    margin: "8px",
                    fontWeight: "600",
                  }}
                >
                  Unread
                </Button>
              </Box>
              <Box>
                <All></All>
              </Box>
            </Box>
          </Menu>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Navbar;
