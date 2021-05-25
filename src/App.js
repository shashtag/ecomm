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
import LoadingLazy from "./ui/LoadingLazy";
import { OrderProvider } from "./Context/OrderContext";
import SelectAddress from "./pages/SelectAddress";
import AllOrders from "./pages/AllOrders";
import SuccessOrder from "./pages/SuccessOrder";
import Admin from "./pages/Admin";
import ACashout from "./pages/ACashout";

const Signup = lazy(() => import("./pages/Signup"));
const ArtistProfile = lazy(() => import("./pages/ArtistProfile"));
const AboutUs = lazy(() => import("./pages/AboutUs"));
const Login = lazy(() => import("./pages/Login"));
const Help = lazy(() => import("./pages/Help"));
const ArtistPage = lazy(() => import("./pages/ArtistPage"));
const Search = lazy(() => import("./pages/Search"));
const ArtistDashboard = lazy(() => import("./pages/ArtistDashboard"));
const ProductDetails = lazy(() => import("./pages/ProductDetails"));
const ProfileUpdate = lazy(() => import("./pages/ProfileUpdate"));
const Cart = lazy(() => import("./pages/Cart"));

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Loading />
      <Notif />
      <OrderProvider>
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
                  <ProfileUpdate />
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
            exact
            path='/search/:query/:page'
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
            exact
            path='/trending/:page'
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
            path='/activate/:id/:code/'
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
                <AllOrders admin={false} />
                <Footer />
              </>
            )}
          />

          <Route
            path='/cart'
            render={() => (
              <>
                <Navigation noCat={false} noSub={true} />
                <Suspense fallback={<LoadingLazy />}>
                  <Cart />
                </Suspense>
                <Footer />
              </>
            )}
          />
          <Route
            path='/selectAddress'
            render={() => (
              <>
                <Navigation noCat={false} noSub={true} />

                <SelectAddress />

                <Footer />
              </>
            )}
          />
          <Route
            path='/successOrder'
            render={() => (
              <>
                <Navigation noCat={false} noSub={true} />

                <SuccessOrder />

                <Footer />
              </>
            )}
          />
          <Route
            path='/admin/orders/:page'
            render={() => (
              <>
                <Navigation noCat={true} noSub={true} />

                <AllOrders admin={true} />
              </>
            )}
          />
          <Route
            path='/admin/orders'
            render={() => (
              <>
                <Navigation noCat={true} noSub={true} />

                <AllOrders admin={true} />
              </>
            )}
          />
          <Route
            path='/admin/cashout/:page'
            render={() => (
              <>
                <Navigation noCat={true} noSub={true} />

                <ACashout admin={true} />
              </>
            )}
          />
          <Route
            path='/admin/cashout'
            render={() => (
              <>
                <Navigation noCat={true} noSub={true} />

                <ACashout admin={true} />
              </>
            )}
          />
          <Route
            path='/admin'
            render={() => (
              <>
                <Navigation noCat={true} noSub={true} />

                <Admin />
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
      </OrderProvider>
    </ThemeProvider>
  );
}

export default App;
