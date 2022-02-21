import React, { useEffect, useRef, useState } from "react";
import {
  AppBar,
  Avatar,
  Box,
  Button,
  Collapse,
  IconButton,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
} from "@mui/material";
import NotificationsIcon from "@mui/icons-material/Notifications";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";

const Navbar = (props) => {
  const [checked, setChecked] = React.useState(false);

  const ref = useRef(null);

  const { onClickOutside } = props;

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (checked && ref.current && !ref.current.contain(e.target)) {
        onClickOutside && onClickOutside();
      }
    };
    document.addEventListener("mousedown", handleClickOutside, true);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside, true);
    };
  }, [onClickOutside]);

  const handleClick = () => {
    setChecked((prev) => !prev);
  };

  // const handleClose = () => {
  //   setAnchorEl(null);
  // };

  return (
    <>
      <AppBar>
        <Toolbar sx={{ ml: "auto" }}>
          <IconButton
            sx={{ position: "relative" }}
            size="large"
            onClick={handleClick}
          >
            <NotificationsIcon />
          </IconButton>
          <Collapse
            sx={{ position: "absolute", right: "10px", top: "90%" }}
            in={checked}
          >
            <Box
              width={360}
              borderRadius="8px"
              height={"calc(90vh - 16px)"}
              p="16px"
              sx={{ backgroundColor: "#242526", overflowY: "scroll" }}
            >
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
                  <MoreHorizIcon sx={{ size: "large", color: "white" }} />
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
          </Collapse>
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
      <Typography sx={{ fontSize: "17px", fontWeight: "700", pt: "10px" }}>
        New
      </Typography>
      {[...data].map((item, index) => (
        <Box
          key={index}
          py="12px"
          sx={{
            display: "flex",
            alignItems: "center",
            gap: "20px",
            padding: "8px",
            borderRadius: "10px",
            cursor: "pointer",
            "&:hover": {
              backgroundColor: "rgba(255,255,255,0.1)",
            },
          }}
        >
          <Avatar
            alt="Avatar"
            src={item.thumbnail}
            sx={{ width: 56, height: 56 }}
          />
          <Box>
            <Typography className="limit-line" sx={{ fontSize: "15px" }}>
              {item.title} Bạn đang có ý tưởng xây dựng thương hiệu? Bạn đang có
              ý tưởng xây dựng thương hiệu? Bạn đang có ý tưởng xây dựng thương
              hiệu? Bạn đang có ý tưởng xây dựng thương hiệu?
            </Typography>
            <Typography sx={{ textTransform: "lowercase" }}>
              Khoảng một phút trước
            </Typography>
          </Box>
        </Box>
      ))}
    </div>
  );
}

export default Navbar;
