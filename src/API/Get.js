import axios from "axios";

export const fetchTrendingProducts = (
  setTrendingProducts,
  setLoading,
  setSnackbar,
) => {
  setLoading(true);
  var config = {
    method: "get",
    url: `${process.env.REACT_APP_URL}store/view/product/popular/`,
  };

  axios(config)
    .then(function (response) {
      setLoading(false);
      setTrendingProducts(response.data);
    })
    .catch(function (error) {
      console.log(error);
      setSnackbar({
        value: true,
        message: "Could not load trending products",
        type: "red",
      });
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
    })
    .catch(function (error) {
      console.log(error);
      setSnackbar({
        value: true,
        message: "Could not load user details",
        type: "red",
      });
    });
};

export const fetchSearch = (query, setProducts, setLoading) => {
  setLoading(true);
  var config = {
    method: "get",
    url: `${process.env.REACT_APP_URL}store/search/product/?search=${query}`,
  };

  axios(config)
    .then(function (response) {
      setProducts(response.data);
      console.log(JSON.stringify(response.data));
      setLoading(false);
    })
    .catch(function (error) {
      console.log(error);
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
      console.log(response.data);
      setTopListings(response.data);
    })
    .catch(function (error) {
      console.log(error);
    });
};

export const fetchArtistProfile = (setInsights, setLoading) => {
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
      setLoading(false);
      console.log(response.data);

      setInsights(response.data);
    })
    .catch(function (error) {
      console.log(error);
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
      console.log(JSON.stringify(response.data));
    })
    .catch(function (error) {
      setLoading(false);
      console.log(error);
    });
};
