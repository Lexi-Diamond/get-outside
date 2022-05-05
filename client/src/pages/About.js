import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme();

export default function Aboutus() {
  return (
    <ThemeProvider theme={theme}>
      <Grid container component="main" sx={{ height: "100vh" }}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage:
              "url(https://idwebhost.com/blog/wp-content/uploads/2020/07/halaman-about-me-pada-website-2.jpg)",
            backgroundRepeat: "no-repeat",
            backgroundColor: (t) =>
              t.palette.mode === "light"
                ? t.palette.grey[50]
                : t.palette.grey[900],
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
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
                fontSize: "30px",
                fontWeight: "bold",
                fontFamily: "Helvetica",
              }}
              component="h1"
              variant="h5"
            >
              ABOUT US
            </Typography>
            <Typography component="p" variant="p">
              Get Outside is a blog for people who love to be active outdoors.
              Our community of users can post about their latest adventure and
              comment on other users posts. Share and be inspired to Get
              Outside!
            </Typography>
          </Box>
          <Box
            component="img"
            sx={{
              height: 400,
              width: 500,
              marginLeft: '5rem',
            }}
            alt="The house from the offer."
            src="../login.png"
          />
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}
