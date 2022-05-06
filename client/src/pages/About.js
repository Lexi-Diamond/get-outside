import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import './singlePost.css';

const theme = createTheme();

export default function Aboutus() {
  return (
    <ThemeProvider theme={theme}>
      <Grid container component="main" sx={{ height: "81vh" }}>
        <CssBaseline />
        <Grid
          item
          xs={12}
          sm={5}
          md={7}
          sx={{
            backgroundImage:
              "url(https://images.unsplash.com/photo-1520273288003-a449a25c5103?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=1500&ixid=MnwxfDB8MXxyYW5kb218MHx8b3V0ZG9vcnN8fHx8fHwxNjUxNzAzOTk0&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=2200)",
            backgroundRepeat: "no-repeat",
            backgroundColor: (t) =>
              t.palette.mode === "light"
                ? t.palette.grey[50]
                : t.palette.grey[900],
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <Grid item xs={12} sm={7} md={5} component={Paper} elevation={6} square>
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Typography
              sx={{
                fontSize: "40px",
                fontWeight: "bold",
                fontFamily: "Sen",
              }}
              component="h1"
              variant="h5"
            >
              ABOUT US
            </Typography>
            <Typography component="p" variant="p"
              sx={{
                fontSize: "20px",
                fontFamily: "Sen",
                lineHeight: '2.6rem',
                marginTop: '2rem'
              }} >
              Get Outside is a blog for people who love to be active outdoors.
              Our community of users can post about their latest adventure and
              comment on other users posts. Share and be inspired to Get
              Outside!
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}
