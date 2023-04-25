// import { Button, Grid, Typography } from "@mui/material";
// import { Box } from "@mui/system";
// import React from "react";
// import "./quiz.css";
// import { useNavigate } from "react-router-dom";
// import { useContext } from "react";
// import { topicContext } from "../../providers/TopicProvider";

// export default function QuizComplete() {
//   const { topic } = useContext(topicContext);

//   let navigate = useNavigate();
//   const routeChange = () => {
//     let path = `/topics/${topic.id}/dashboard`;
//     navigate(path);
//   };

//   return (
//     <Grid
//       container
//       spacing={2}
//       direction="column"
//       justifyContent="center"
//       alignContent="center"
//       style={{ minHeight: "100vh" }}
//     >
//       <Box>
//         <Button variant="contained" color="secondary" onClick={routeChange}>
//           Exit
//         </Button>
//       </Box>
//     </Grid>
//   );
// }
