import { RecentActors } from "@material-ui/icons";
import React from "react";
import Header from "./Header";
import Footer from "../components/Footer";

const App = () => {
  return (
    <React.Fragment>
      <header>
        <Header />
      </header>
      <footer>
        <Footer />
      </footer>
    </React.Fragment>
  );
};

export default App;
