import axios from "axios";

export const fetchTrendingProducts = (
  page,
  setTrendingProducts,
  setLoading,
  setSnackbar,
) => {
  setLoading(true);
  var config = {
    method: "get",
    url: !page
      ? `${process.env.REACT_APP_URL}store/view/product/popular/`
      : `${process.env.REACT_APP_URL}store/view/product/popular/?page=${page}`,
  };

  axios(config)
    .then(function (response) {
      setLoading(false);
      setTrendingProducts(response.data);
    })
    .catch(function (error) {
      setLoading(false);
      setTrendingProducts({ results: [] });
      if (!page) {
        setSnackbar({
          value: true,
          message: "Could not load trending products",
          type: "error",
        });
      }
    });
};

export const fetchBaseDetailsUser = (
  setUsrBaseInfo,
  setLoading,
  history,
  setSnackbar,
) => {
  setLoading(true);
  var config = {
    method: "get",
    url: `${process.env.REACT_APP_URL}auth/users/me/`,
    headers: {
      Authorization: `Token ${localStorage.getItem("Token")}`,
    },
  };

  axios(config)
    .then(function (response) {
      setLoading(false);
      setUsrBaseInfo(response.data);
      if (response.data.is_artist && response.data.is_first_login) {
        history.push("/artist/profile");
      }
      if (
        response.data.is_kalafex_admin &&
        window.performance.navigation.type !== 1
      ) {
        // console.log(history);
        history.push("/admin/");
      }
    })
    .catch(function (error) {
      // console.log(error);
      setLoading(false);
      setSnackbar({
        value: true,
        message: "Could not load user details",
        type: "error",
      });
    });
};

export const fetchSearch = (query, page, setProducts, setLoading) => {
  setLoading(true);
  var config = {
    method: "get",
    url: !page
      ? `${process.env.REACT_APP_URL}store/search/product/?search=${query}`
      : `${process.env.REACT_APP_URL}store/search/product/?search=${query}/?page=${page}`,
  };

  axios(config)
    .then(function (response) {
      setProducts(response.data);
      // console.log(JSON.stringify(response.data));
      setLoading(false);
    })
    .catch(function (error) {
      setLoading(false);
      // console.log(error);
    });
};

export const fetchArtistProducts = (id, setTopListings, setLoading) => {
  setLoading(true);
  var config = {
    method: "get",
    url: `${process.env.REACT_APP_URL}store/view/product/artist/${id}/`,
    headers: {},
  };

  axios(config)
    .then(function (response) {
      setLoading(false);
      // console.log(response.data);
      setTopListings(response.data);
    })
    .catch(function (error) {
      setLoading(false);
      // console.log(error);
    });
};

export const fetchArtistProfile = (setInsights, setLoading, func) => {
  setLoading(true);
  var config = {
    method: "get",
    url: `${process.env.REACT_APP_URL}accounts/view/my_profile/`,
    headers: {
      Authorization: `Token ${localStorage.getItem("Token")}`,
    },
  };

  axios(config)
    .then(function (response) {
      func();
      // console.log(response.data);

      setInsights(response.data);
    })
    .catch(function (error) {
      setLoading(false);
      // console.log(error);
    });
};

export const fetchAddress = (setLoading, setUsrAdresses) => {
  setLoading(true);
  var config = {
    method: "get",
    url: `${process.env.REACT_APP_URL}accounts/view_addresses/`,
    headers: {
      Authorization: `Token ${localStorage.getItem("Token")}`,
    },
  };

  axios(config)
    .then(function (response) {
      setLoading(false);
      setUsrAdresses(response.data);
      // console.log(JSON.stringify(response.data));
    })
    .catch(function (error) {
      setLoading(false);
      // console.log(error);
    });
};

export const fetchOrderDetailsFinally = (url, setLoading) => {
  setLoading(true);
  var config = {
    method: "get",
    url: `${process.env.REACT_APP_URL}orders/view/order/${url}/`,
    headers: {
      Authorization: `Token ${localStorage.getItem("Token")}`,
    },
  };

  axios(config)
    .then(function (response) {
      setLoading(false);
      // console.log(JSON.stringify(response.data));
    })
    .catch(function (error) {
      setLoading(false);
      // console.log(error);
    });
};

export const allCashoutReq = (setLoading, setCashouts, pagination) => {
  setLoading(true);
  var config = {
    method: "get",
    url:
      pagination === 1
        ? `${process.env.REACT_APP_URL}accounts/view/cashout_requests/`
        : `${process.env.REACT_APP_URL}accounts/view/cashout_requests/?page=${pagination}`,
    headers: {
      Authorization: `Token ${localStorage.getItem("Token")}`,
    },
  };

  axios(config)
    .then(function (response) {
      setLoading(false);
      setCashouts(response.data);
      // console.log(JSON.stringify(response.data));
    })
    .catch(function (error) {
      setLoading(false);
      // console.log(error);
    });
};

export const fetchArtistOrders = (setLoading, setArtistOrder) => {
  setLoading(true);
  var config = {
    method: "get",
    url: `${process.env.REACT_APP_URL}orders/view/orderproducts/artist/`,
    headers: {
      Authorization: `Token ${localStorage.getItem("Token")}`,
    },
  };

  axios(config)
    .then(function (response) {
      setLoading(false);
      setArtistOrder(response.data);
      // console.log(JSON.stringify(response.data));
    })
    .catch(function (error) {
      setLoading(false);
      // console.log(error);
    });
};

export const getReviewsAll = (id, setReviews) => {
  axios
    .get(`${process.env.REACT_APP_URL}store/reviews/noauth/${id}/`)
    .then(function (response) {
      setReviews(response.data);
      console.log(response.data);
    })
    .catch(function (error) {
      // console.log(error);
    });
};

export const getReviewsOther = (id, setReviews) => {
  axios
    .get(`${process.env.REACT_APP_URL}store/reviews/auth/${id}/`, {
      headers: {
        Authorization: `Token ${localStorage.getItem("Token")}`,
      },
    })
    .then(function (response) {
      setReviews(response.data);
      console.log(response.data);
    })
    .catch(function (error) {
      // console.log(error);
    });
};

export const getReviewUser = (id, setReviews) => {
  axios
    .get(`${process.env.REACT_APP_URL}store/review/${id}/`, {
      headers: {
        Authorization: `Token ${localStorage.getItem("Token")}`,
      },
    })
    .then(function (response) {
      setReviews(response.data);
      console.log(response.data);
    })
    .catch(function (error) {
      setReviews({});
      // console.log(error);
    });
};
