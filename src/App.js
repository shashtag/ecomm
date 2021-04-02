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
import Loading from "./ui/Loading";
import Notif from "./ui/Notif";
import ProductDetails from "./pages/ProductDetails";
import ArtistDashboard from "./pages/ArtistDashboard";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Loading />
      <Notif />

      <Switch>
        <Route
          exact
          path='/'
          render={() => (
            <>
              <Navigation noCat={false} noSub={false} />
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
          path='/artist/dashboard'
          render={() => (
            <>
              <Navigation noCat={true} noSub={true} />
              <ArtistDashboard />
            </>
          )}
        />
        <Route
          exact
          path='/user/signup'
          render={() => <Signup type='user' />}
        />
        <Route
          exact
          path='/product/:pid'
          render={() => (
            <>
              <Navigation noCat={false} noSub={false} />
              <ProductDetails />
              <Footer />
            </>
          )}
        />
        <Route exact path='/temp' render={() => <Temp />} />
      </Switch>
    </ThemeProvider>
  );
}

export default App;
