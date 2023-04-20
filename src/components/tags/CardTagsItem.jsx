import * as React from "react";
import Chip from "@mui/material/Chip";
import Paper from "@mui/material/Paper";
import AddIcon from "@mui/icons-material/Add";
import { List, ListItem } from "@mui/material";

const TagsArray = () => {
  const [chipData, setChipData] = React.useState([
    { key: 0, label: "Vue.js" },
    { key: 1, label: "Add" },
  ]);

  const handleDelete = (chipToDelete) => () => {
    setChipData((chips) =>
      chips.filter((chip) => chip.key !== chipToDelete.key)
    );
  };

  return (
    <Paper
      sx={{
        display: "flex",
        justifyContent: "start",
        flexWrap: "wrap",
        listStyle: "none",
        p: 0,
        m: 0,
      }}
      component="ul"
      elevation={0}
    >
      {chipData.map((data) => {
        let icon;

        if (data.label === "Add") {
          icon = <AddIcon />;
        }

        return (
          <List>
            <ListItem key={data.key}>
              <Chip
                icon={icon}
                label={data.label}
                onDelete={data.label === "Add" ? undefined : handleDelete(data)}
              />
            </ListItem>
          </List>
        );
      })}
    </Paper>
  );
};

export default TagsArray;
