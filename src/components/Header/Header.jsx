import React from "react";
import { createStyles, makeStyles } from "@material-ui/core/styles";
import { AppBar, Grid, Toolbar, Button } from "@material-ui/core";
import { Colors } from "../../constants/Color.js";

const useStyles = makeStyles(() =>
  createStyles({
    toolbar: {
      backgroundColor: Colors.Primary,
      minHeight: 75,
    },
    search: {
      height: "50px",
      textAlign: "center",
      fontSize: " 24px",

      color: "White",
    },
    input: {
      height: "35px",
      width: "50%",
      outline: "none",
      textAlign: "center",
      fontSize: " 14px",
      backgroundColor: "transparent",
      border: "2px solid white",
      color: "White",
      boxSizing: "border-box",
      transform: "translateY(30%)",
    },
    ul: {
      listStyle: "none",
      margin: "0",
      padding: "0",
    },
    li: {
      float: "left",
    },
    link: {
      display: "block",
      color: "white",
      textAlign: "center",
      textDecoration: "none",
    },
    logo: {
      paddingLeft: "15px",
      width: "150px",
      transform: "translateY(50%)",
    },
  })
);
const Header = () => {
  const classes = useStyles();
  return (
    <React.Fragment>
      <AppBar position="fixed">
        <Toolbar variant="dense" disableGutters className={classes.toolbar}>
          <Grid
            container
            direction="row"
            justify="space-between"
            alignItems="center"
          >
            <Grid container item xs={6}>
              <Grid item xs={6}>
                <img
                  className={classes.logo}
                  src={require("../../assets/Logo/blue_short-8e7b30f73a4020692ccca9c88bafe5dcb6f8a62a4c6bc55cd9ba82bb2cd95f6c.svg")}
                  alt="Logo"
                />

                <Button color="inherit">Movies</Button>
                <Button color="inherit">TV Shows</Button>
                <Button color="inherit">Peoples</Button>
              </Grid>
            </Grid>
            <Grid item xs={6}>
              <div className={classes.search}>
                <input
                  type="text"
                  className={classes.input}
                  placeholder="Search Movies"
                />
                <Button
                  color="inherit"
                  style={{ transform: "translateY(50%)" }}
                >
                  Login
                </Button>
              </div>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
};

export default Header;
