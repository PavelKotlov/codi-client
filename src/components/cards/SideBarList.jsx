import React, { useContext } from "react";
import SideBarListItem from "./SideBarListItem";
import List from "@mui/material/List";
import { topicContext } from "../../providers/TopicProvider";

const SideBarList = (props) => {
  const { cards } = useContext(topicContext);
  const { selectCardFunc } = props;
  console.log("***************************************");
  const cardsList = cards.map((card) => {
    return (
      <SideBarListItem
        key={card.id}
        card={card}
        selectCardFunc={selectCardFunc}
      />
    );
  });
  console.log("***************************************");
  return (
    <List
      sx={{
        overflow: "auto",
        maxHeight: 700,
        "&::-webkit-scrollbar": {
          display: "none",
        },
      }}
    >
      {cardsList}
    </List>
  );
};

export default SideBarList;
