import {
  Box,
  Button,
  ClickAwayListener,
  Collapse,
  formLabelClasses,
  IconButton,
  Popper,
  Typography,
} from "@mui/material";
import Notification, { NotificationProps } from "./Notification";
import * as React from "react";
import NotificationsIcon from "@mui/icons-material/Notifications";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";

export interface NotificationBellProps {
  notifications: NotificationProps[];
}

export interface NotificationBellState {
  dropdownOpen: boolean;
}

class NotificationBell extends React.Component<
  NotificationBellProps,
  NotificationBellState
> {
  private _toggler: React.RefObject<HTMLButtonElement> = React.createRef();
  constructor(props: NotificationBellProps) {
    super(props);
    this.state = {
      dropdownOpen: false,
    };
  }
  handleClickAway = () => {
    this.setState({ dropdownOpen: false });
  };
  render() {
    return (
      <ClickAwayListener onClickAway={this.handleClickAway}>
        <Box sx={{ textAlign: "center" }}>
          <IconButton
            ref={this._toggler}
            size="large"
            onClick={(e) => {
              this.setState({ dropdownOpen: !this.state.dropdownOpen });
            }}
          >
            <NotificationsIcon sx={{ pointerEvents: "none" }} />
          </IconButton>
          <Popper
            open={true}
            anchorEl={this._toggler.current || document.body}
            placement="bottom-end"
          >
            <Collapse in={this.state.dropdownOpen}>
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
                  <Notification
                    avatar="https://ichef.bbci.co.uk/news/976/cpsprodpb/67CF/production/_108857562_mediaitem108857561.jpg"
                    content="Nhan_Boi has sent you a friend request"
                    created_at="20 minutes ago"
                  />
                  {/* All() */}
                  {this.props.notifications.map((notification, index) => {
                    return (
                      <Notification
                        key={`${notification.content}-${index}`}
                        {...notification}
                      />
                    );
                  })}
                </Box>
              </Box>
            </Collapse>
          </Popper>
        </Box>
      </ClickAwayListener>
    );
  }
}

export default NotificationBell;
