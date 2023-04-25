import React, { useContext, useEffect, useState } from "react";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import QuizIcon from "@mui/icons-material/Quiz";
import LibraryBooksIcon from "@mui/icons-material/LibraryBooks";
import { Badge, Tooltip, Typography } from "@mui/material";
import { topicContext } from "../../providers/TopicProvider";

const SideBarListItem = (props) => {
  const { card, selectCardFunc, currentCard } = props;
  const { cards } = useContext(topicContext);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const now = Date.now();
    const range = now - 15000;
    const specificTime = new Date(card.created_at).getTime();
    if (specificTime >= range && specificTime <= now) {
      setLoading(true);
      const timeout = setTimeout(() => setLoading(false), 15000);
      return () => {
        clearTimeout(timeout);
      };
    }
    return;
  }, [cards.length]);

  return (
    <ListItem>
      <Tooltip title={card.front}>
        <ListItemButton
          onClick={() => {
            selectCardFunc(card);
          }}
          sx={{
            bgcolor:
              card === currentCard ? "primaryCodi.main" : "primaryCodi.dark",
            color:
              card === currentCard ? "primaryCodi.dark" : "primaryCodi.main",
            "&:hover": {
              bgcolor:
                card === currentCard ? "primaryCodi.dark" : "primaryCodi.main",
              color:
                card === currentCard ? "primaryCodi.main" : "primaryCodi.dark",
            },
          }}
        >
          <ListItemIcon
            sx={{
              color: "inherit",
            }}
            size="large"
          >
            {card.type === "CONCEPT" ? <LibraryBooksIcon /> : <QuizIcon />}
          </ListItemIcon>
          {loading && (
            <ListItemIcon>
              <Badge
                badgeContent="new"
                color="secondary"
                sx={{
                  color: "primaryCodi.main",
                  margin: 0,
                }}
              ></Badge>
            </ListItemIcon>
          )}
          <ListItemText
            primary={
              <React.Fragment>
                <Typography
                  sx={{
                    display: "block",
                    maxWidth: "100%",
                  }}
                  component="span"
                  variant="h6"
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
