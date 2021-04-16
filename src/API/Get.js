import axios from "axios";
import React from "react";

export const fetchTrendingProducts = (setTrendingProducts) => {
  var config = {
    method: "get",
    url: `${process.env.REACT_APP_URL}store/view/product/popular/`,
    headers: {},
  };

  axios(config)
    .then(function (response) {
      // console.log(JSON.stringify(response.data));
      setTrendingProducts(response.data);
    })
    .catch(function (error) {
      console.log(error);
    });
};

export const fetchBaseDetailsUser = (setUsrBaseInfo, history) => {
  var config = {
    method: "get",
    url: `${process.env.REACT_APP_URL}auth/users/me/`,
    headers: {
      Authorization: `Token ${localStorage.getItem("Token")}`,
    },
  };

  axios(config)
    .then(function (response) {
      console.log(JSON.stringify(response.data));
      setUsrBaseInfo(response.data);
      if (response.data.is_artist && response.data.is_first_login) {
        history.push("/artist/profile");
      }
    })
    .catch(function (error) {
      console.log(error);
    });
};

export const search = (query, setProducts) => {
  var config = {
    method: "get",
    url: `${process.env.REACT_APP_URL}store/search/product/?search=${query}`,
  };

  axios(config)
    .then(function (response) {
      setProducts(response.data);
      console.log(JSON.stringify(response.data));
    })
    .catch(function (error) {
      console.log(error);
    });
};

export const fetchArtistProducts = (id, setTopListings) => {
  var config = {
    method: "get",
    url: `${process.env.REACT_APP_URL}store/view/product/artist/${id}/`,
    headers: {},
  };

  axios(config)
    .then(function (response) {
      console.log(JSON.stringify(response.data));
      setTopListings(response.data);
    })
    .catch(function (error) {
      console.log(error);
    });
};

export const fetchArtistProfile = (setInsights) => {
  var config = {
    method: "get",
    url: `${process.env.REACT_APP_URL}accounts/view/my_profile/`,
    headers: {
      Authorization: `Token ${localStorage.getItem("Token")}`,
    },
  };

  axios(config)
    .then(function (response) {
      setInsights(response.data);
    })
    .catch(function (error) {
      console.log(error);
    });
};
