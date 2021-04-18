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
import Verification from "./pages/Verification";
import UnderConstruction from "./pages/UnderConstruction";
import LoadingLazy from "./ui/LoadingLazy";

const Signup = lazy(() => import("./pages/Signup"));
const ArtistProfile = lazy(() => import("./pages/ArtistProfile"));
const AboutUs = lazy(() => import("./pages/AboutUs"));
const Login = lazy(() => import("./pages/Login"));
const Help = lazy(() => import("./pages/Help"));
const ArtistPage = lazy(() => import("./pages/ArtistPage"));
const Search = lazy(() => import("./pages/Search"));
const ArtistDashboard = lazy(() => import("./pages/ArtistDashboard"));
const ProductDetails = lazy(() => import("./pages/ProductDetails"));

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
              <Suspense fallback={<LoadingLazy />}>
                <ArtistDashboard />{" "}
              </Suspense>
            </>
          )}
        />
        <Route
          path='/artist/:url'
          render={() => (
            <>
              <Navigation noCat={false} noSub={false} />
              <Suspense fallback={<LoadingLazy />}>
                <ArtistPage artist={false} />
              </Suspense>
              <Footer />
            </>
          )}
        />
        <Route
          path='/user/signup'
          render={() => (
            <Suspense fallback={<LoadingLazy />}>
              <Signup type='user' />
            </Suspense>
          )}
        />
        <Route
          path='/user/profile'
          render={() => (
            <>
              <Navigation noCat={false} noSub={true} />

              <Suspense fallback={<LoadingLazy />}>
                <UnderConstruction />
              </Suspense>
              <Footer />
            </>
          )}
        />
        <Route
          path='/product/:pid'
          render={() => (
            <>
              <Navigation noCat={false} noSub={false} />
              <Suspense fallback={<LoadingLazy />}>
                <ProductDetails />{" "}
              </Suspense>

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
              <Suspense fallback={<LoadingLazy />}>
                <Search trending={false} />
              </Suspense>

              <Footer />
            </>
          )}
        />
        <Route
          path='/search'
          render={() => (
            <>
              <Navigation noCat={false} noSub={false} />
              <Suspense fallback={<LoadingLazy />}>
                <Search trending={true} />
              </Suspense>{" "}
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
              <Suspense fallback={<LoadingLazy />}>
                <Search trending={true} />
              </Suspense>
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
              <Suspense fallback={<LoadingLazy />}>
                <Help standalone={true} />
              </Suspense>
              <Footer />
            </>
          )}
        />
        <Route
          path='/about-us'
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
              <Navigation noCat={false} noSub={true} />
              <UnderConstruction />
              <Footer />
            </>
          )}
        />
        <Route
          path='/cart'
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
