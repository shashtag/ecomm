import React, { lazy, Suspense } from "react";

import { ThemeProvider } from "@material-ui/core";
import theme from "./ui/Theme";
import { Switch, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";

// import Login from "./pages/Login";
import Navigation from "./components/Navigation";
import Temp from "./Temp";
import Footer from "./components/Footer";
import Loading from "./ui/Loading";
import Notif from "./ui/Notif";
import ProductDetails from "./pages/ProductDetails";
import ArtistDashboard from "./pages/ArtistDashboard";
import Search from "./pages/Search";
import Verification from "./pages/Verification";
import Help from "./pages/Help";
import ArtistPage from "./pages/ArtistPage";
import UnderConstruction from "./pages/UnderConstruction";
import LoadingLazy from "./ui/LoadingLazy";

const Signup = lazy(() => import("./pages/Signup"));
const ArtistProfile = lazy(() => import("./pages/ArtistProfile"));
const AboutUs = lazy(() => import("./pages/AboutUs"));
const Login = lazy(() => import("./pages/Login"));

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Loading />
      <Notif />

      <Switch>
        <Route path='/login'>
          <Suspense fallback={<LoadingLazy />}>
            <Login />
          </Suspense>
        </Route>
        <Route
          path='/artist/signup'
          render={() => (
            <Suspense fallback={<LoadingLazy />}>
              <Signup type='artist' />{" "}
            </Suspense>
          )}
        />
        <Route
          path='/artist/profile'
          render={() => (
            <Suspense fallback={<LoadingLazy />}>
              <ArtistProfile />{" "}
            </Suspense>
          )}
        />

        <Route
          path='/artist/dashboard'
          render={() => (
            <>
              <Navigation noCat={true} noSub={true} />
              <ArtistDashboard />
            </>
          )}
        />
        <Route
          path='/artist/:url'
          render={() => (
            <>
              <Navigation noCat={false} noSub={false} />

              <ArtistPage />
              <Footer />
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
          exact
          path='/search/:query'
          render={() => (
            <>
              <Navigation noCat={false} noSub={false} />
              <Search trending={false} />
              <Footer />
            </>
          )}
        />
        <Route
          path='/search'
          render={() => (
            <>
              <Navigation noCat={false} noSub={false} />
              <Search trending={true} />
              <Footer />
            </>
          )}
        />
        <Route
          exact
          path='/trending'
          render={() => (
            <>
              <Navigation noCat={false} noSub={false} />
              <Search trending={true} />
              <Footer />
            </>
          )}
        />
        <Route
          path='/activate/:id/:code'
          render={() => (
            <>
              <Verification />
            </>
          )}
        />
        <Route
          path='/contact'
          render={() => (
            <>
              <Navigation noCat={false} noSub={false} />
              <Help standalone={true} />
              <Footer />
            </>
          )}
        />
        <Route
          path='/about'
          render={() => (
            <>
              <Navigation noCat={false} noSub={false} />
              <Suspense fallback={<LoadingLazy />}>
                <AboutUs />
              </Suspense>
              <Footer />
            </>
          )}
        />
        <Route
          path='/user/trackOrder'
          render={() => (
            <>
              <Navigation noCat={false} noSub={false} />
              <UnderConstruction />
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
