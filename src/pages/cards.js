import React, { useState } from "react";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import SidePanel from "../components/cards/SidePanel";
import DefaultView from "../components/cards/DefaultView";
import ManageView from "../components/cards/ManageView";
import cards_data from "./cards_data.json";
const Cards = () => {
  const [view, setView] = useState("DEFAULT");
  const [sides, setSides] = useState({
    front: "",
    back: "",
  });
  const cards = [...cards_data];

  return (
    <Box className="cards" sx={{ display: "flex", height: "100vh" }}>
      <CssBaseline />
      <Box className="side-panel" sx={{ width: "30%", boxShadow: 3 }}>
        <SidePanel onCreate={setView} onPopulate={setSides} cards={cards} />
      </Box>
      <Box className="main-panel" sx={{ mx: 1, width: "70%" }}>
        {view === "DEFAULT" && <DefaultView />}
        {view === "NEW CONCEPT" && <ManageView title="Add New Concept" />}
        {view === "NEW EXERCISE" && <ManageView title="Add New Exercise" />}
        {view === "EDIT CONCEPT" && (
          <ManageView title="Edit Concept" sides={sides} />
        )}
        {view === "EDIT EXERCISE" && (
          <ManageView title="Edit Exercise" sides={sides} />
        )}
      </Box>
    </Box>
  );
};

export default Cards;
