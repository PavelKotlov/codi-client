import {
  Button,
  Card,
  Grid,
  Typography,
  ButtonGroup,
  CardContent,
  CardActions,
  Divider,
  Box,
} from "@mui/material";
import "./quiz.css";
import { CodeBlock, arta } from "react-code-blocks";
import ProgressBar from "./ProgressBar";

export default function Back(props) {
  const { currentCard, handleClick, progress } = props;

  return (
    <Grid
      container
      spacing={0}
      direction="column"
      alignItems="center"
      justifyContent="center"
      style={{ minHeight: "100vh", wordWrap: "break-word" }}
    >
      <Card
        sx={{
          borderRadius: 5,
          boxShadow: "-10px 10px 10px rgba(62, 32, 102, .5)",
          bgcolor: "primaryCodi.dark",
        }}
        className="box-container"
      >
        <CardContent
          sx={{
            bgcolor: "primaryCodi.dark",
            borderRadius: 4,
            mx: 2,
            marginBottom: 2,
          }}
        >
          <Typography
            gutterBottom
            variant="h4"
            color="primaryCodi.main"
            className="card-box__front"
          >
            {currentCard.front}
          </Typography>
        </CardContent>

        <CardContent
          sx={{
            bgcolor: "primaryCodi.main",
            borderRadius: 4,
            mx: 2,
            marginBottom: 2,
          }}
        >
          {currentCard.type === "CONCEPT" && (
            <Typography
              gutterBottom
              variant="h5"
              color="primaryCodi.dark"
              className="card-box__front"
              py={5}
              px={2}
            >
              {currentCard.back}
            </Typography>
          )}
          {/*TODO:Maybe Add Languages dropdown menu*/}
          {currentCard.type === "CHALLENGE" && (
            <CodeBlock
              language="JavaScript"
              text={currentCard.back}
              showLineNumbers={false}
              theme={arta}
            />
          )}
        </CardContent>

        <CardActions>
          <Grid
            container
            direction="row"
            justifyContent="space-around"
            my={2}
            sx={{
              backgroundImage: `url(${
                process.env.PUBLIC_URL + "/assets/images/default/blueLine.png"
              })`,
              backgroundSize: "cover",
            }}
          >
            <Grid item>
              <Button
                size="medium"
                variant="contained"
                sx={{
                  px: 5,
                  borderRadius: 5,
                  bgcolor: "secondaryCodi.main",
                  "&:hover": {
                    bgcolor: "secondaryCodi.mainHover",
                  },
                }}
                onClick={() => handleClick("AGAIN")}
              >
                Again
              </Button>
            </Grid>
            <Grid item>
              <Button
                size="medium"
                variant="contained"
                sx={{
                  px: 5,
                  borderRadius: 5,
                  bgcolor: "accentsCodi.pink",
                  "&:hover": {
                    bgcolor: "accentsCodi.pinkHover",
                  },
                }}
                onClick={() => handleClick("HARD")}
              >
                Hard
              </Button>
            </Grid>
            <Grid item>
              <Button
                size="medium"
                variant="contained"
                sx={{
                  px: 5,
                  borderRadius: 5,
                  bgcolor: "accentsCodi.yellow",
                  color: "primaryCodi.dark",
                  "&:hover": {
                    bgcolor: "accentsCodi.yellowHover",
                  },
                }}
                onClick={() => handleClick("GOOD")}
              >
                Good
              </Button>
            </Grid>
            <Grid item>
              <Button
                size="medium"
                variant="contained"
                sx={{
                  px: 5,
                  borderRadius: 5,
                  bgcolor: "accentsCodi.green",
                  color: "primaryCodi.dark",
                  "&:hover": {
                    bgcolor: "accentsCodi.greenHover",
                  },
                }}
                onClick={() => handleClick("EASY")}
              >
                Easy
              </Button>
            </Grid>
          </Grid>
        </CardActions>
      </Card>
      <Grid sx={{ width: "60%", marginBottom: 10 }}>
        <ProgressBar progress={progress} />
      </Grid>
    </Grid>
  );
}
