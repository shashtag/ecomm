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
import Search from "./pages/Search";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Loading />
      <Notif />

      <Switch>
        <Route path='/login' component={Login} />
        <Route path='/artist/signup' render={() => <Signup type='artist' />} />
        <Route path='/artist/profile' render={() => <ArtistProfile />} />
        <Route
          path='/artist/dashboard'
          render={() => (
            <>
              <Navigation noCat={true} noSub={true} />
              <ArtistDashboard />
            </>
          )}
        />
        <Route path='/user/signup' render={() => <Signup type='user' />} />
        <Route
          path='/product/:pid'
          render={() => (
            <>
              <Navigation noCat={false} noSub={false} />
              <ProductDetails />
              <Footer />
            </>
          )}
        />
        <Route path='/temp' render={() => <Temp />} />
        <Route
          path='/search/:query'
          render={() => (
            <>
              <Navigation noCat={false} noSub={false} />
              <Search />
              <Footer />
            </>
          )}
        />
        <Route
          path='/'
          render={() => (
            <>
              <Navigation noCat={false} noSub={false} />
              <LandingPage />
              <Footer />
            </>
          )}
        />
      </Switch>
    </ThemeProvider>
  );
}

export default App;
