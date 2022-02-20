import React, { useEffect, useState } from "react";
import {
  AppBar,
  Avatar,
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
                {/* All() */}
                <All></All>
              </Box>
            </Box>
          </Menu>
        </Toolbar>
      </AppBar>
    </>
  );
};

function All() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(
      "https://tunacoding.com/api/articles?&relations[]=user&relations[]=tags&page=1&title=&tag_ids[]=&=&=&excluded_tag_ids[]=&=&=&order_by=&=&order_by_direction=desc&=Gi%E1%BA%A3m%20d%E1%BA%A7n"
    )
      .then((res) => res.json())
      .then((data) => {
        setData(data.items);
      });
  }, []);
  return (
    <Box component="div">
      {/* Notification() */}
      <NotificationItem data={data}></NotificationItem>
    </Box>
  );
}

function NotificationItem({ data }) {
  return (
    <div>
      <Typography sx={{ fontSize: "17px", fontWeight: "700" }}>New</Typography>
      {[...data].map((item, index) => (
        <Box
          key={index}
          py="12px"
          sx={{
            display: "flex",
            alignItems: "center",
            gap: "20px",
            padding: "8px",
            borderRadius: "4px",
            cursor: "pointer",
            "&:hover": {
              backgroundColor: "rgba(0,0,0,0.1)",
            },
          }}
        >
          <Avatar
            alt="Avatar"
            src={item.thumbnail}
            sx={{ width: 56, height: 56 }}
          />
          <Typography className="limit-line" sx={{ fontSize: "15px" }}>
            {item.title} Bạn đang có ý tưởng xây dựng thương hiệu? Bạn đang có ý
            tưởng xây dựng thương hiệu? Bạn đang có ý tưởng xây dựng thương
            hiệu? Bạn đang có ý tưởng xây dựng thương hiệu?
          </Typography>
        </Box>
      ))}
    </div>
  );npm 
}

export default Navbar;
