import axios from "axios";

export const signup1 = (data, setLoading, setSnackbar, setOpen) => {
  setLoading(true);
  var axios = require("axios");
  data = JSON.stringify(data);

  var config = {
    method: "post",
    url: `${process.env.REACT_APP_URL}auth/users/`,
    headers: {
      "Content-Type": "application/json",
    },
    data: data,
  };

  axios(config)
    .then((response) => {
      console.log(JSON.stringify(response.data));
      setLoading(false);
      setOpen(true);
    })
    .catch((error) => {
      console.log(error);
      setLoading(false);
      setSnackbar(true);
    });
};

export const login = (data, setLoading, setToken, setSnackbar, history) => {
  data = JSON.stringify(data);
  setLoading(true);
  var config = {
    method: "post",
    url: `${process.env.REACT_APP_URL}auth/token/login/`,
    headers: {
      "Content-Type": "application/json",
    },
    data: data,
  };

  axios(config)
    .then(function (response) {
      console.log(response.data);
      localStorage.setItem("Token", response.data.auth_token);
      console.log(localStorage.getItem("Token"));
      setToken(true);
      setLoading(false);
      history.push("/");
    })
    .catch(function (error) {
      console.log(error);
      setLoading(false);
      setSnackbar(true);
    });
};

export const addAddress = (data, setLoading, setPage, page) => {
  setLoading(true);
  var config = {
    method: "post",
    url: `${process.env.REACT_APP_URL}accounts/add_address/`,
    headers: {
      Authorization: `Token ${localStorage.getItem("Token")}`,
      "Content-Type": "application/json",
    },
    data: data,
  };

  axios(config)
    .then(function (response) {
      console.log(JSON.stringify(response.data));
      setPage(page + 1);
      setLoading(false);
    })
    .catch(function (error) {
      console.log(error);
    });
};
