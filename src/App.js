import { ThemeProvider } from "@material-ui/core";
import theme from "./ui/Theme";
import { Switch, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Navigation from "./components/Navigation";
import ArtistProfile from "./pages/ArtistProfile";
import Temp from "./Temp";
import Footer from "./components/Footer";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Switch>
        <Route
          exact
          path='/'
          render={() => (
            <>
              <Navigation />
              <LandingPage />
              <Footer />
            </>
          )}
        />
        <Route exact path='/login' component={Login} />
        <Route
          exact
          path='/artist/signup'
          render={() => <Signup type='artist' />}
        />
        <Route exact path='/artist/profile' render={() => <ArtistProfile />} />
        <Route
          exact
          path='/user/signup'
          render={() => <Signup type='user' />}
        />
        <Route exact path='/temp' render={() => <Temp />} />
      </Switch>
    </ThemeProvider>
  );
}

export default App;
