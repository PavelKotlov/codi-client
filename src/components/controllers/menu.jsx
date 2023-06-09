import React from "react";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { Avatar, ListItemIcon, Typography } from "@mui/material";
import SettingsIcon from "@mui/icons-material/Settings";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import { useAuth0 } from "@auth0/auth0-react";
import TopicForm from "../settings/TopicForm";
import { useState } from "react";

const ITEM_HEIGHT = 48;

export default function NavMenu({ showSettings, setOpen, openTopicFormState }) {
  const { logout, user, isAuthenticated } = useAuth0();
  const [anchorEl, setAnchorEl] = useState(null);

  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleSettings = () => {
    setOpen(!openTopicFormState);
    setAnchorEl(null);
  };

  return (
    <div>
      <IconButton
        sx={{
          position: "absolute",
          top: 0,
          right: 0,
          marginRight: 3,
          color: "primaryCodi.dark",
        }}
        aria-label="more"
        id="long-button"
        aria-controls={open ? "long-menu" : undefined}
        aria-expanded={open ? "true" : undefined}
        aria-haspopup="true"
        size="large"
        onClick={handleClick}
      >
        <MoreHorizIcon fontSize="large" />
      </IconButton>
      <Menu
        id="long-menu"
        MenuListProps={{
          "aria-labelledby": "long-button",
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        PaperProps={{
          style: {
            maxHeight: ITEM_HEIGHT * 4.5,
            width: "20ch",
          },
        }}
      >
        <MenuItem key="user" sx={{ py: 2 }} onClick={handleClose}>
          {isAuthenticated && (
            <>
              <Avatar
                alt={user.name}
                src={user.picture}
                sx={{ marginRight: 1 }}
              />
              <Typography variant="body2" color="text.secondary" p={1}>
                {`${user.name}`}
              </Typography>
            </>
          )}
        </MenuItem>
        {showSettings && (
          <MenuItem
            key="setting"
            onClick={() => {
              console.log("You clicked settings");
            }}
          >
            <ListItemIcon>
              <SettingsIcon fontSize="small" />
            </ListItemIcon>
            <Typography variant="body2" color="text.secondary">
              Settings
            </Typography>
          </MenuItem>
        )}

        <MenuItem key="logout" onClick={logout}>
          <ListItemIcon>
            <ExitToAppIcon fontSize="small" />
          </ListItemIcon>
          <Typography variant="body2" color="text.secondary">
            Logout
          </Typography>
        </MenuItem>
      </Menu>
    </div>
  );
}
