import axios from "axios";

export const signup1 = (data, setLoading, setOpen, setStep, step) => {
  setLoading(true);
  var axios = require("axios");
  var data = JSON.stringify(data);

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
      setOpen(true);
    });
};

export const login = (data, setLoading, history) => {
  var data = JSON.stringify(data);
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
      console.log(JSON.stringify(response.data));
      localStorage.setItem("Token", JSON.stringify(response.data.auth_token));
      console.log(localStorage.getItem("Token"));
      setLoading(false);
      history.push("/");
    })
    .catch(function (error) {
      console.log(error);
    });
};
