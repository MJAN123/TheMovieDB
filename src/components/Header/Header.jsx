import React from "react";
import { createStyles, makeStyles } from "@material-ui/core/styles";
import { AppBar, Grid, Toolbar, Button } from "@material-ui/core";
import { Colors } from "../../constants/Color.js";
import { Link, useHistory } from "react-router-dom";
import SearchIcon from "@material-ui/icons/Search";

const useStyles = makeStyles(() =>
  createStyles({
    appbar: {
      marginBottom: 70,
    },
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

  const history = useHistory();
  const getSearch = () => {
    history.push("/search");
  };
  return (
    <React.Fragment>
      <AppBar position="fixed" className={classes.appbar}>
        <Toolbar variant="dense" disableGutters className={classes.toolbar}>
          <Grid
            container
            direction="row"
            justify="space-between"
            alignItems="center"
          >
            <Grid item xs={6}>
              <Link to="/">
                <img
                  className={classes.logo}
                  src={require("../../assets/Logo/blue_short-8e7b30f73a4020692ccca9c88bafe5dcb6f8a62a4c6bc55cd9ba82bb2cd95f6c.svg")}
                  alt="Logo"
                />
              </Link>
              <Link to="/upcomming" className={classes.link}>
                <Button color="inherit">Upcomming</Button>
              </Link>
              <Link to="/trending" className={classes.link}>
                <Button color="inherit">Trending</Button>
              </Link>
              <Link to="/tvshows" className={classes.link}>
                <Button color="inherit">TV Shows</Button>
              </Link>
              <Link to="/people" className={classes.link}>
                <Button color="inherit">people</Button>
              </Link>
            </Grid>
          </Grid>
          <Grid item xs={6} spacing={2}>
            <div className={classes.search}>
              <Button color="inherit">Favourites</Button>
              <Button color="inherit">Login</Button>
              <span>
                <SearchIcon
                  fontSize="large"
                  onClick={() => getSearch()}
                  style={{ color: "green", transform: "translateY(40%)" }}
                ></SearchIcon>
              </span>
            </div>
          </Grid>
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
};

export default Header;
