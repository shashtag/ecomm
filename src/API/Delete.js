import axios from "axios";

export const deleteAddress = (url, setLoading) => {
  setLoading(true);
  var config = {
    method: "delete",
    url: `${process.env.REACT_APP_URL}accounts/modify_address/${url}`,
    headers: {
      Authorization: `Token ${localStorage.getItem("Token")}`,
    },
  };

  axios(config)
    .then(function (response) {
      setLoading(false);
      window.location.reload();
    })
    .catch(function (error) {
      // console.log(error);
    });
};

export const delCartItem = (url, setLoading, setSnackbar) => {
  setLoading(true);
  var config = {
    method: "delete",
    url: `${process.env.REACT_APP_URL}orders/modify/order_product/${url}/`,
    headers: {
      Authorization: `Token ${localStorage.getItem("Token")}`,
    },
  };

  axios(config)
    .then(function (response) {
      setLoading(false);
      window.location.reload();
      // console.log(JSON.stringify(response.data));
    })
    .catch(function (error) {
      // console.log(error);
    });
};

export const deleteProduct = (pid, setLoading, setSnackbar) => {
  setLoading(true);
  var config = {
    method: "delete",
    url: `${process.env.REACT_APP_URL}store/modify/product/${pid}/`,
    headers: {
      Authorization: `Token ${localStorage.getItem("Token")}`,
    },
  };

  axios(config)
    .then(function (response) {
      setLoading(false);
      setSnackbar({
        value: true,
        message: "Product successfully deleted.",
        type: "success",
      });
      window.location.reload();
    })
    .catch(function (error) {
      setLoading(false);
      setSnackbar({
        value: true,
        message: "An error occurred. Please try again.",
        type: "error",
      });
    });
};
