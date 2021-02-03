import "./App.css";
import { ThemeProvider } from "@material-ui/core";
import SubHeader from "./components/SubHeader";
import theme from "./ui/Theme";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Header from "./components/Header";
import Categories from "./components/Categories";
import LandingPage from "./pages/LandingPage";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <SubHeader />
        <Header />
        <Categories />
        <Switch>
          <Route exact path='/' component={LandingPage} />
        </Switch>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
