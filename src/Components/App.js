import React from "react";
import { gql} from "apollo-boost";
import { ThemeProvider } from "styled-components";
import GlobalStyles from "../Styles/GlobalStyles"
import Theme from "../Styles/Theme";
import Router from "./Router";
import { useQuery } from "react-apollo-hooks";
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
        <Router isLoggedIn={false}/>

        <Footer />
      </>
  </ThemeProvider>
  );
}