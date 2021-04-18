import axios from "axios";
import { v4 as uuidv4 } from "uuid";

export const signup1 = (data, setLoading, setSnackbar, setOpen) => {
  setLoading(true);
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
      setLoading(false);
      setOpen(true);
    })
    .catch((error) => {
      setLoading(false);
      setSnackbar({
        value: true,
        message:
          error.response.data.email?.[0] ||
          error.response.data.password?.[0] ||
          error.response.data.phone_number?.[0] ||
          error.response.data.date_of_birth?.[0] ||
          error.response.data.full_name?.[0],
      });
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
      localStorage.setItem("Token", response.data.auth_token);
      setToken(true);
      setLoading(false);
      history.push("/");
    })
    .catch(function (error) {
      setLoading(false);
      setSnackbar({
        value: true,
        message:
          error?.response?.data?.email?.[0] ||
          error?.response?.data?.non_field_errors?.[0] ||
          error?.response?.data?.password?.[0],
      });
    });
};

export const logout = (setLoading, setUsrBaseInfo, setToken, history) => {
  var config = {
    method: "post",
    url: `${process.env.REACT_APP_URL}auth/token/logout/`,
    headers: {
      Authorization: `Token ${localStorage.getItem("Token")}`,
    },
  };
  setLoading(true);

  axios(config)
    .then(function (response) {
      console.log(JSON.stringify(response.data));
      localStorage.removeItem("Token");
      setLoading(false);
      setUsrBaseInfo(null);
      setToken(false);
      history.push("/");
    })
    .catch(function (error) {
      console.log(error);
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

export const postArtistDetails = (setLoading, func) => {
  setLoading(true);
  console.log();
  var data = new FormData();
  data.append("custom_url", uuidv4());
  var config = {
    method: "post",
    url: `${process.env.REACT_APP_URL}accounts/artist/`,
    headers: {
      Authorization: `Token ${localStorage.getItem("Token")}`,
    },
    data: data,
  };
  axios(config)
    .then(function (response) {
      setLoading(false);
      console.log(JSON.stringify(response.data));
    })
    .catch(function (error) {
      setLoading(false);
      func();
    });
};

export const addProduct = (data, setLoading) => {
  setLoading(true);
  var config = {
    method: "post",
    url: `${process.env.REACT_APP_URL}store/create/product/`,
    headers: {
      Authorization: `Token ${localStorage.getItem("Token")}`,
    },
    data: data,
  };

  axios(config)
    .then(function (response) {
      setLoading(false);
      window.location.reload();

      console.log(JSON.stringify(response.data));
    })
    .catch(function (error) {
      console.log(error);
    });
};
