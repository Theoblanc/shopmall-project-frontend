import React from "react";
import { gql } from "apollo-boost";
import { ThemeProvider } from "styled-components";
import GlobalStyles from "../Styles/GlobalStyles";
import { HashRouter as Router } from "react-router-dom";

import Theme from "../Styles/Theme";
import Routes from "./Routes";
import { useQuery } from "react-apollo-hooks";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Header from "./Header";
import Nav from "./Nav";
import Toolbar from "./Toolbar";
import Footer from "./Footer";


const QUERY = gql`
  {
    isLoggedIn @client
  }
`;

export default () => {
  const {
    data: { isLoggedIn }
  } = useQuery(QUERY);

  return (
    <ThemeProvider theme={Theme}>
      <>
        <GlobalStyles />
            <Header />
            <Nav />
            <Toolbar />
            <Router>
            <>
              <Routes isLoggedIn={isLoggedIn} />
            </>

            </Router>
            <Footer />
        <ToastContainer position={toast.POSITION.BOTTOM_LEFT} />
      </>
    </ThemeProvider>
  );
}

