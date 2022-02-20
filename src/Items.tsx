import React from "react";
import { Avatar, Typography } from "@mui/material";
import { Box } from "@mui/system";

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
  );
}

export default NotificationItem;
