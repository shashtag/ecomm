import "./App.css";
import { ThemeProvider } from "@material-ui/core";
import theme from "./ui/Theme";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Navigation from "./components/Navigation";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Switch>
          <Route
            exact
            path='/'
            render={() => (
              <>
                <Navigation />
                <LandingPage />
              </>
            )}
          />
          <Route exact path='/login' component={Login} />
          <Route
            exact
            path='/artist/signup'
            render={() => <Signup type='artist' />}
          />
          <Route
            exact
            path='/user/signup'
            render={() => <Signup type='user' />}
          />
        </Switch>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
