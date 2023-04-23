import React from "react";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import QuizIcon from "@mui/icons-material/Quiz";
import LibraryBooksIcon from "@mui/icons-material/LibraryBooks";
import { Badge, Tooltip, Typography } from "@mui/material";

const SideBarListItem = (props) => {
  const { card, selectCardFunc } = props;

  const isCreatedWithin = (card, time) => {
    const now = Date.now();
    const range = now - time;
    const specificTime = new Date(card.created_at).getTime();
    if (specificTime >= range && specificTime <= now) {
      return true;
    }
    return false;
  }

  return (
    <ListItem disablePadding>
      <Tooltip title={card.front}>
        <ListItemButton
          onClick={() => {
            selectCardFunc(card);
          }}
        >
          <ListItemIcon>
            {card.type === "CONCEPT" ? <LibraryBooksIcon /> : <QuizIcon />}
          </ListItemIcon>
          { isCreatedWithin(card, 30000) && (<ListItemIcon>
            <Badge
              badgeContent='new'
              color="primary"
              position='relative'>  
            </Badge>
          </ListItemIcon>)}
          <ListItemText
            primary={
              <React.Fragment>
                <Typography
                  sx={{
                    display: "block",
                    maxWidth: "100%",
                  }}
                  component="span"
                  variant="body2"
                  color="text.primary"
                  noWrap
                >
                  {card.front}
                </Typography>
              </React.Fragment>
            }
          />
        </ListItemButton>
      </Tooltip>
    </ListItem>
  );
};

export default SideBarListItem;
