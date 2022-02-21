import { Avatar, Box, Typography } from "@mui/material";
import * as React from "react";

export interface NotificationProps {
  avatar: string;
  content: string;
  created_at: string;
}

export interface NotificationState {}

class Notification extends React.Component<
  NotificationProps,
  NotificationState
> {
  constructor(props: NotificationProps) {
    super(props);
  }
  render() {
    return (
      <Box
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
          src={this.props.avatar}
          sx={{ width: 56, height: 56 }}
        />
        <Box>
          <Typography
            className="limit-line"
            sx={{ color: "white", fontSize: "15px" }}
          >
            {this.props.content}
          </Typography>
          <Typography
            sx={{
              color: "white",
              fontSize: "12px",
              textTransform: "lowercase",
            }}
          >
            {this.props.created_at}
          </Typography>
        </Box>
      </Box>
    );
  }
}

export default Notification;
