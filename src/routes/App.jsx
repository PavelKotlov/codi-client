import React from "react";
import ButtonAppBar from "../components/controllers/ButtonAppBar";
import {
  Avatar,
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  Chip,
  Container,
  Grid,
  Stack,
  Typography,
} from "@mui/material";
import { useAuth0 } from "@auth0/auth0-react";
import Profile from "../components/Profile";
import { Link, useNavigate } from "react-router-dom";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
const App = () => {
  const { isAuthenticated, user, loginWithRedirect, logout } = useAuth0();

  const navigate = useNavigate();

  return (
    <Box>
      {/*SECTION - HERO*/}
      <Box
        sx={{
          height: "100vh",
          backgroundImage: `url(${
            process.env.PUBLIC_URL +
            "/assets/images/light/landing/hero/hero-bg.png"
          })`,
          backgroundSize: "cover",
        }}
      >
        <ButtonAppBar
          loginWithRedirect={loginWithRedirect}
          logout={logout}
          isAuthenticated={isAuthenticated}
          user={user}
        />
        <Box>
          <Grid
            container
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "100vh",
            }}
            gap={30}
          >
            <Grid item xs={4}>
              <Stack
                display={"flex"}
                justifyContent={"center"}
                alignItems={"center"}
                padding={5}
                marginBottom={40}
              >
                <Box display={"flex"} alignSelf={"start"}>
                  <Typography
                    variant="h1"
                    fontWeight="medium"
                    color="primaryCodi.main"
                    alignSelf={"start"}
                  >
                    Let's
                  </Typography>
                  <Typography
                    variant="h1"
                    fontWeight="medium"
                    alignSelf={"start"}
                    color="primaryCodi.main"
                    marginLeft={3}
                  >
                    Codi
                  </Typography>
                </Box>
                <Typography
                  variant="h5"
                  color={"primaryCodi.main"}
                  fontWeight="light"
                  lineHeight={1.5}
                >
                  <span style={{ color: "#27E8C0" }}>
                    Create, Learn, Repeat!
                  </span>{" "}
                  <br />
                  <br />
                  <br />
                  Welcome to the world of Codi - where learning is fun and
                  exciting! Our algorithm uses spaced repetition to help
                  developers easily memorize and organize new concepts, code
                  snippets, and frameworks. Plus, you can track your progress
                  every step of the way. With Codi, learning has never been so
                  fun and effortless!
                </Typography>
                <Button
                  size="Large"
                  variant="contained"
                  sx={{
                    borderRadius: 5,
                    bgcolor: "accentsCodi.yellow",
                    color: "primaryCodi.dark",
                    "&:hover": {
                      bgcolor: "accentsCodi.yellowHover",
                    },
                    width: "30%",
                    fontSize: "large",
                    alignSelf: "start",
                    marginTop: 10,
                  }}
                  onClick={() => {
                    return isAuthenticated
                      ? navigate("/topics")
                      : loginWithRedirect();
                  }}
                >
                  Try Now
                </Button>
              </Stack>
            </Grid>
            <Grid item xs={6}>
              <Box>
                <img
                  src={
                    `${process.env.PUBLIC_URL}` +
                    "/assets/images/light/landing/hero/gentleman.png"
                  }
                  width="700"
                  height="700"
                />
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Box>
      {/*SECTION - WORKS*/}
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "start",
          height: "100vh",
          backgroundImage: `url(${
            process.env.PUBLIC_URL +
            "/assets/images/light/landing/works/works-bg.png"
          })`,
          backgroundSize: "cover",
        }}
      >
        <Stack>
          <Grid container sx={{ paddingTop: 20 }}>
            <Grid item xs={12} display="flex" justifyContent="center">
              <Typography
                variant="h2"
                fontWeight={"bold"}
                color="primaryCodi.dark"
                marginBottom={23}
              >
                How it works?
              </Typography>
            </Grid>
            <Grid container display="flex" justifyContent="center">
              <Grid item xs={2}>
                <Card
                  sx={{
                    borderRadius: "25px",
                    boxShadow: "-10px 10px 10px rgba(62, 32, 102, .5)",
                    position: "relative",
                    overflow: "visible",
                    bgcolor: "primaryCodi.main",
                  }}
                >
                  <CardHeader
                    avatar={
                      <Avatar
                        sx={{
                          bgcolor: "#AAE8DC",
                          color: "primaryCodi.dark",
                          fontWeight: "bold",
                          position: "absolute",
                          top: -25,
                          left: 30,
                          boxShadow: "-1px 1px 10px rgba(62, 32, 102, .5)",
                          width: 60,
                          height: 60,
                          fontSize: 32,
                        }}
                      >
                        1
                      </Avatar>
                    }
                    title="Create Deck"
                    sx={{
                      display: "flex",
                      alignContent: "center",
                      textAlign: "center",
                      borderRadius: "25px 25px 0 0",
                      bgcolor: "primaryCodi.dark",
                      color: "primaryCodi.main",
                    }}
                    titleTypographyProps={{
                      fontSize: 24,
                      fontWeight: "medium",
                    }}
                  />
                  <CardContent sx={{ padding: 4, height: 170 }}>
                    <Typography
                      color={"primaryCodi.dark"}
                      fontWeight={"medium"}
                    >
                      Create a flashcards deck by adding a topic name, image,
                      and setting a card limit.
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
              <Grid
                item
                xs={2}
                display="flex"
                justifyContent="center"
                alignItems="center"
              >
                <img
                  src={
                    `${process.env.PUBLIC_URL}` +
                    "/assets/images/light/landing/works/pinkArrow.png"
                  }
                  width="80"
                />
              </Grid>
              <Grid item xs={2}>
                <Card
                  sx={{
                    borderRadius: "25px",
                    boxShadow: "-10px 10px 10px rgba(62, 32, 102, .5)",
                    position: "relative",
                    overflow: "visible",
                    bgcolor: "primaryCodi.main",
                  }}
                >
                  <CardHeader
                    avatar={
                      <Avatar
                        sx={{
                          bgcolor: "#AAE8DC",
                          color: "primaryCodi.dark",
                          fontWeight: "bold",
                          position: "absolute",
                          top: -25,
                          left: 30,
                          boxShadow: "-1px 1px 10px rgba(62, 32, 102, .5)",
                          width: 60,
                          height: 60,
                          fontSize: 32,
                        }}
                      >
                        2
                      </Avatar>
                    }
                    title="Create Card"
                    sx={{
                      display: "flex",
                      alignContent: "center",
                      textAlign: "center",
                      borderRadius: "25px 25px 0 0",
                      bgcolor: "primaryCodi.dark",
                      color: "primaryCodi.main",
                    }}
                    titleTypographyProps={{
                      fontSize: 24,
                      fontWeight: "medium",
                    }}
                  />
                  <CardContent sx={{ padding: 4, height: 170 }}>
                    <Typography
                      color={"primaryCodi.dark"}
                      fontWeight={"medium"}
                    >
                      Next, add a concept || exercise card, fill the front &&
                      back sections, and use the{" "}
                      <code>onClick(() =&gt; {"save()"})</code> button to save
                      your changes.
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
              <Grid
                item
                xs={2}
                display="flex"
                justifyContent="center"
                alignItems="center"
              >
                <img
                  src={
                    `${process.env.PUBLIC_URL}` +
                    "/assets/images/light/landing/works/pinkArrow.png"
                  }
                  width="80"
                />
              </Grid>
              <Grid item xs={2}>
                <Card
                  sx={{
                    borderRadius: "25px",
                    boxShadow: "-10px 10px 10px rgba(62, 32, 102, .5)",
                    position: "relative",
                    overflow: "visible",
                    bgcolor: "primaryCodi.main",
                  }}
                >
                  <CardHeader
                    avatar={
                      <Avatar
                        sx={{
                          bgcolor: "#AAE8DC",
                          color: "primaryCodi.dark",
                          fontWeight: "bold",
                          position: "absolute",
                          top: -25,
                          left: 30,
                          boxShadow: "-1px 1px 10px rgba(62, 32, 102, .5)",
                          width: 60,
                          height: 60,
                          fontSize: 32,
                        }}
                      >
                        3
                      </Avatar>
                    }
                    title="Begin Quiz"
                    sx={{
                      display: "flex",
                      alignContent: "center",
                      textAlign: "center",
                      borderRadius: "25px 25px 0 0",
                      bgcolor: "primaryCodi.dark",
                      color: "primaryCodi.main",
                    }}
                    titleTypographyProps={{
                      fontSize: 24,
                      fontWeight: "medium",
                    }}
                  />
                  <CardContent sx={{ padding: 4, height: 170 }}>
                    <Typography
                      color={"primaryCodi.dark"}
                      fontWeight={"medium"}
                    >
                      Hit "study now", read a card, select from 4 answers to
                      test comprehension. Rinse and repeat until mastery! <br />
                      <br /> Happy Coding!
                    </Typography>
                  </CardContent>
                  <Box
                    sx={{
                      position: "absolute",
                      bottom: -85,
                      right: -70,
                    }}
                  >
                    <img
                      src={
                        `${process.env.PUBLIC_URL}` +
                        "/assets/images/light/landing/works/plant.png"
                      }
                      width="150"
                    />
                  </Box>
                </Card>
              </Grid>
            </Grid>
          </Grid>
        </Stack>
      </Box>
      {/*SECTION - FEATURES*/}
      <Box position={"relative"}>
        {/*FEATURE - Progress*/}
        <Box
          sx={{
            height: "100vh",
            backgroundImage: `url(${
              process.env.PUBLIC_URL +
              "/assets/images/light/landing/features/featureOne-bg.png"
            })`,
            backgroundSize: "cover",
          }}
        >
          <Grid container sx={{ paddingTop: 10 }}>
            <Grid item xs={12} display="flex" justifyContent="center">
              <Typography
                variant="h2"
                fontWeight={"bold"}
                color="primaryCodi.dark"
                marginBottom={10}
              >
                What do you get?
              </Typography>
            </Grid>
            <Grid container px={20} height={550}>
              <Grid item xs={7}>
                <img
                  src={
                    `${process.env.PUBLIC_URL}` +
                    "/assets/images/light/landing/features/feature-1-dashboard.png"
                  }
                  width={"auto"}
                  alt="progress"
                />
              </Grid>
              <Grid item xs={5} display={"flex"} flexDirection={"column"}>
                <Chip
                  label="Track your progress"
                  sx={{
                    width: "80%",
                    height: 80,
                    borderRadius: 25,
                    alignSelf: "center",
                    my: 5,
                    fontSize: 40,
                    fontWeight: "bold",
                    bgcolor: "secondaryCodi.light",
                  }}
                />
                <Typography variant="h5" width={"60%"} alignSelf={"center"}>
                  Track your progress with Codi and watch your skills skyrocket!
                  Keeping track of your progress has never been so satisfying!
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Box>
        {/*FEATURE - Quiz*/}
        <Box
          display={"flex"}
          justifyContent={"center"}
          position={"absolute"}
          bottom={1750}
          left={550}
          width={"50%"}
          height={"15%"}
        >
          <img
            src={
              `${process.env.PUBLIC_URL}` +
              "/assets/images/light/landing/features/featureConnectorOne.png"
            }
            alt="connector"
          />
        </Box>
        <Box
          sx={{
            height: "100vh",
            backgroundImage: `url(${
              process.env.PUBLIC_URL +
              "/assets/images/light/landing/features/featureTwo-bg.png"
            })`,
            backgroundSize: "cover",
            display: "flex",
            alignItems: "center",
          }}
        >
          <Grid container px={20} height={700} justifyContent={"space-between"}>
            <Grid item xs={5} display={"flex"} flexDirection={"column"}>
              <Chip
                label="Quiz game"
                sx={{
                  width: "80%",
                  height: 80,
                  borderRadius: 25,
                  alignSelf: "center",
                  my: 5,
                  fontSize: 40,
                  fontWeight: "bold",
                  bgcolor: "secondaryCodi.light",
                }}
              />
              <Typography variant="h5" width={"60%"} alignSelf={"center"}>
                Get ready to learn and have fun with flashcard quizzes! Whether
                you're cramming for a test or just trying to brush up on your
                knowledge, playing a flashcard quiz is the perfect way to make
                learning a blast!
              </Typography>
            </Grid>
            <Grid item xs={7} display={"flex"} justifyContent={"end"}>
              <img
                src={
                  `${process.env.PUBLIC_URL}` +
                  "/assets/images/light/landing/features/feature-2-quiz.png"
                }
                width={"auto"}
                alt="progress"
                alignSelf={"end"}
              />
            </Grid>
          </Grid>
        </Box>
        {/*FEATURE - Automation*/}
        <Box
          display={"flex"}
          justifyContent={"center"}
          position={"absolute"}
          bottom={900}
          left={550}
          width={"50%"}
          height={"15%"}
        >
          <img
            src={
              `${process.env.PUBLIC_URL}` +
              "/assets/images/light/landing/features/featureConnectorTwo.png"
            }
            alt="connector"
          />
        </Box>
        <Box
          sx={{
            height: "100vh",
            backgroundImage: `url(${
              process.env.PUBLIC_URL +
              "/assets/images/light/landing/features/featureThree-bg.png"
            })`,
            backgroundSize: "cover",
            display: "flex",
            alignItems: "center",
          }}
        >
          <Grid container px={20} height={700}>
            <Grid item xs={7} display={"flex"} padding={7}>
              <img
                src={
                  `${process.env.PUBLIC_URL}` +
                  "/assets/images/light/landing/features/feature-3-auto.png"
                }
                width={"auto"}
                alt="progress"
                alignSelf={"center"}
              />
            </Grid>
            <Grid item xs={5} display={"flex"} flexDirection={"column"}>
              <Chip
                label="Streamline process"
                sx={{
                  width: "80%",
                  height: 80,
                  borderRadius: 25,
                  alignSelf: "center",
                  my: 5,
                  fontSize: 40,
                  fontWeight: "bold",
                  bgcolor: "secondaryCodi.light",
                }}
              />
              <Typography variant="h5" width={"60%"} alignSelf={"center"}>
                Say goodbye to tedious hours of making flashcards by hand!
                Transform your study notes into flashcards with automation -
                just a click away!
              </Typography>
            </Grid>
          </Grid>
        </Box>
      </Box>
      {/*SECTION - ABOUT*/}
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundImage: `url(${
            process.env.PUBLIC_URL +
            "/assets/images/light/landing/about/about-bg.png"
          })`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "contain",
          height: 473,
        }}
      >
        <Typography
          variant="h4"
          position="absolute"
          color="primaryCodi.light"
          bottom={-3840}
          right={90}
        >
          Meet the team
        </Typography>
        <Grid container xs={12} display="flex" mx={50} my={50} height="70%">
          <Grid item xs={4} padding={5}>
            <Card
              sx={{
                borderRadius: "25px",
                boxShadow: "-10px 10px 10px rgba(62, 32, 102, .5)",
                position: "relative",
                overflow: "visible",
                bgcolor: "primaryCodi.main",
              }}
            >
              <CardHeader
                avatar={
                  <Avatar
                    sx={{
                      bgcolor: "#AAE8DC",
                      color: "primaryCodi.dark",
                      position: "absolute",
                      width: 100,
                      height: 100,
                      top: -25,
                      left: -30,
                      fontSize: 32,
                      boxShadow: "-1px 1px 10px rgba(62, 32, 102, .5)",
                    }}
                    src="https://media.licdn.com/dms/image/C5603AQHq3PqasQyTHQ/profile-displayphoto-shrink_800_800/0/1636783614052?e=1687996800&v=beta&t=SqMx7xV0ccv4LoCl9AblWmTVoQ1SNAPHirXgsFVaOJ8"
                  />
                }
                title="Juliana M."
                sx={{
                  display: "flex",
                  alignContent: "center",
                  textAlign: "center",
                  borderRadius: "25px 25px 0 0",
                  bgcolor: "primaryCodi.dark",
                  color: "primaryCodi.main",
                }}
                titleTypographyProps={{
                  fontSize: 24,
                  fontWeight: "medium",
                }}
              />
              <CardContent
                sx={{
                  padding: 4,
                  display: "flex",
                  justifyContent: "space-around",
                }}
              >
                <Link
                  to="https://github.com/jkmochizuki"
                  color={"primaryCodi.dark"}
                  fontWeight={"medium"}
                >
                  <GitHubIcon fontSize="large" />
                </Link>
                <Link
                  to="https://www.linkedin.com/in/jkmochizuki/"
                  color={"primaryCodi.dark"}
                  fontWeight={"medium"}
                >
                  <LinkedInIcon fontSize="large" />
                </Link>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={4} padding={5}>
            <Card
              sx={{
                borderRadius: "25px",
                boxShadow: "-10px 10px 10px rgba(62, 32, 102, .5)",
                position: "relative",
                overflow: "visible",
                bgcolor: "primaryCodi.main",
              }}
            >
              <CardHeader
                avatar={
                  <Avatar
                    sx={{
                      bgcolor: "#AAE8DC",
                      color: "primaryCodi.dark",
                      position: "absolute",
                      width: 100,
                      height: 100,
                      top: -25,
                      left: -30,
                      fontSize: 32,
                      boxShadow: "-1px 1px 10px rgba(62, 32, 102, .5)",
                    }}
                    src="https://media.licdn.com/dms/image/C4D03AQHNkAjn_DPC3A/profile-displayphoto-shrink_800_800/0/1655044347139?e=1687996800&v=beta&t=NGjG39qgTfGDbUashjTEsArRlIAHejA5d1mYstBx4tM"
                  />
                }
                title="Shorouk A."
                sx={{
                  display: "flex",
                  alignContent: "center",
                  textAlign: "center",
                  borderRadius: "25px 25px 0 0",
                  bgcolor: "primaryCodi.dark",
                  color: "primaryCodi.main",
                }}
                titleTypographyProps={{
                  fontSize: 24,
                  fontWeight: "medium",
                }}
              />
              <CardContent
                sx={{
                  padding: 4,
                  display: "flex",
                  justifyContent: "space-around",
                }}
              >
                <Link
                  to="https://github.com/ShoroukAziz"
                  color={"primaryCodi.dark"}
                  fontWeight={"medium"}
                >
                  <GitHubIcon fontSize="large" />
                </Link>
                <Link
                  to="https://www.linkedin.com/in/shorouk-abdelaziz/"
                  color={"primaryCodi.dark"}
                  fontWeight={"medium"}
                >
                  <LinkedInIcon fontSize="large" />
                </Link>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={4} padding={5}>
            <Card
              sx={{
                borderRadius: "25px",
                boxShadow: "-10px 10px 10px rgba(62, 32, 102, .5)",
                position: "relative",
                overflow: "visible",
                bgcolor: "primaryCodi.main",
              }}
            >
              <CardHeader
                avatar={
                  <Avatar
                    sx={{
                      bgcolor: "#AAE8DC",
                      color: "primaryCodi.dark",
                      position: "absolute",
                      width: 100,
                      height: 100,
                      top: -25,
                      left: -30,
                      fontSize: 32,
                      boxShadow: "-1px 1px 10px rgba(62, 32, 102, .5)",
                    }}
                    src="https://media.licdn.com/dms/image/C5603AQEeGuR83rNrXA/profile-displayphoto-shrink_800_800/0/1604182045657?e=1687996800&v=beta&t=BeC1jePUOvj7lblmzu6wig-CPLQ1pBKs2Y3nWtFup-s"
                  />
                }
                title="Pavel K."
                sx={{
                  display: "flex",
                  alignContent: "center",
                  textAlign: "center",
                  borderRadius: "25px 25px 0 0",
                  bgcolor: "primaryCodi.dark",
                  color: "primaryCodi.main",
                }}
                titleTypographyProps={{
                  fontSize: 24,
                  fontWeight: "medium",
                }}
              />
              <CardContent
                sx={{
                  padding: 4,
                  display: "flex",
                  justifyContent: "space-around",
                }}
              >
                <Link
                  to="https://github.com/PavelKotlov"
                  color={"primaryCodi.dark"}
                  fontWeight={"medium"}
                >
                  <GitHubIcon fontSize="large" />
                </Link>
                <Link
                  to="https://www.linkedin.com/in/pavelkotlov/"
                  color={"primaryCodi.dark"}
                  fontWeight={"medium"}
                >
                  <LinkedInIcon fontSize="large" />
                </Link>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default App;
