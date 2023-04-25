import React, { useState } from "react";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import SidePanel from "../components/cards/SidePanel";
import DefaultView from "../components/cards/DefaultView";
import EditView from "../components/cards/views/EditView";
import NewView from "../components/cards/views/NewView";
import NavMenu from "../components/controllers/menu";

const Cards = () => {
  const [view, setView] = useState("DEFAULT");
  const [currentCard, setCurrentCard] = useState(null);

  const selectCardFunc = (selectedCard) => {
    setCurrentCard(selectedCard);

    if (selectedCard.type) {
      setView("EDIT");
    } else {
      setView("NEW");
    }
  };

  const selectTypeFunc = (type) => {
    if (type === "NEW CONCEPT") {
      setView("NEW CONCEPT");
    } else {
      setView("NEW EXERCISE");
    }
  };

  return (
    <Box
      className="cards"
      sx={{
        display: "flex",
        height: "100vh",
        backgroundImage: `url(${
          process.env.PUBLIC_URL + "/assets/images/light/browse/browse-bg.png"
        })`,
        backgroundSize: "cover",
      }}
    >
      <CssBaseline />

      {/*SIDE PANEL*/}
      <Box className="side-panel" sx={{ width: "30%", boxShadow: 3 }}>
        <SidePanel
          selectCardFunc={selectCardFunc}
          selectTypeFunc={selectTypeFunc}
          currentCard={currentCard}
        />
      </Box>

      {/*Rendered views*/}
      <Box className="main-panel" sx={{ mx: 1, width: "70%" }}>
        <NavMenu showSettings={true} />
        {view === "DEFAULT" && <DefaultView />}
        {view === "NEW CONCEPT" && <NewView isConcept={true} />}
        {view === "NEW EXERCISE" && <NewView isConcept={false} />}
        {view === "EDIT" && (
          <EditView setView={setView} selectedCard={currentCard} />
        )}
      </Box>
    </Box>
  );
};

export default Cards;
