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
        type: "error",
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
        type: "error",
      });
    });
};

export const logout = (setLoading, setUsrBaseInfo, setToken, history) => {
  setLoading(true);

  localStorage.removeItem("Token");

  setUsrBaseInfo(null);
  setToken(false);
  setLoading(false);
  history.push("/");
};

export const addAddress = (data, setLoading, setPage, page, usr) => {
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
      // console.log(JSON.stringify(response.data));
      setPage(page + 1);
      setLoading(false);
      if (usr) {
        window.location.reload();
      }
    })
    .catch(function (error) {
      // console.log(error);
    });
};

export const postArtistDetails = (setLoading, func) => {
  setLoading(true);

  let data = new FormData();
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
      // console.log(JSON.stringify(response.data));
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

      // console.log(JSON.stringify(response.data));
    })
    .catch(function (error) {
      // console.log(error);
    });
};

export const AddToCart = (data, setLoading, setSnackbar) => {
  setLoading(true);

  var config = {
    method: "post",
    url: `${process.env.REACT_APP_URL}orders/create/order_product/`,
    headers: {
      Authorization: `Token ${localStorage.getItem("Token")}`,
    },
    data: data,
  };

  axios(config)
    .then(function (response) {
      setLoading(false);
      setSnackbar({
        value: true,
        message: "Product added to cart successfully",
        type: "success",
      });

      // console.log(JSON.stringify(response.data));
    })
    .catch(function (error) {
      setLoading(false);
      setSnackbar({
        value: true,
        message: error.response.data.details,
        type: "error",
      });
      // console.log(error);
    });
};

export const createOrder = (data, setLoading, setSnackbar, setOrder) => {
  setLoading(true);
  var config = {
    method: "post",
    url: `${process.env.REACT_APP_URL}orders/create/order/`,
    headers: {
      Authorization: `Token ${localStorage.getItem("Token")}`,
    },
    data: data,
  };

  axios(config)
    .then(function (response) {
      setLoading(false);
      setOrder(response.data);
    })
    .catch(function (error) {
      // console.log(error);
    });
};

export const createRazorpayPayment = (
  data,
  setLoading,
  setRazorPay,
  history,
) => {
  setLoading(true);
  var config = {
    method: "post",
    url: `${process.env.REACT_APP_URL}orders/create/payment/`,
    headers: {
      Authorization: `Token ${localStorage.getItem("Token")}`,
    },
    data: data,
  };

  axios(config)
    .then(function (response) {
      setLoading(false);
      setRazorPay(response.data);

      const options = {
        key: "rzp_test_Di6RK8bVcakkJ7",
        currency: "INR",
        order_id: response.data.razorpay_details.id,
        handler: function (response) {
          history.push("/successOrder");
        },
        prefill: {
          name: response.data.razorpay_details.notes.name,
          email: response.data.razorpay_details.notes.email,
          contact: response.data.razorpay_details.notes.phone_number,
        },
        // notes: {
        //   address: "Razorpay Corporate Office",
        // },
      };

      var rzp1 = new window.Razorpay(options);
      rzp1.on("payment.failed", function (response) {
        alert(response.error.code);
        alert(response.error.description);
        alert(response.error.source);
        alert(response.error.step);
        alert(response.error.reason);
        alert(response.error.metadata.order_id);
        alert(response.error.metadata.payment_id);
      });
      rzp1.open();

      // console.log(JSON.stringify(response.data));
    })
    .catch(function (error) {
      // console.log(error);
    });
};

export const cashoutRequest = (setLoading, setSnackbar, oppFunc) => {
  setLoading(true);
  var config = {
    method: "post",
    url: `${process.env.REACT_APP_URL}accounts/request/cashout/`,
    headers: {
      Authorization: `Token ${localStorage.getItem("Token")}`,
    },
  };

  axios(config)
    .then(function (response) {
      setLoading(false);
      setSnackbar({
        value: true,
        message: "Checkout request posted successfully",
        type: "success",
      });
      oppFunc(false);
      // console.log(JSON.stringify(response.data));
    })
    .catch(function (error) {
      setSnackbar({
        value: true,
        message: error.response.data.details,
        type: "error",
      });
      oppFunc(false);
      // console.log(error);
    });
};

export const grantCashout = (data, setLoading, setSnackbar) => {
  setLoading(true);
  var config = {
    method: "post",
    url: `${process.env.REACT_APP_URL}accounts/grant/cashout/`,
    headers: {
      Authorization: `Token ${localStorage.getItem("Token")}`,
      "Content-Type": "application/json",
    },
    data: data,
  };

  axios(config)
    .then(function (response) {
      setLoading(false);
      setSnackbar({
        value: true,
        message: "Cashout granted successfully",
        type: "success",
      });
      window.location.reload();
      // console.log(JSON.stringify(response.data));
    })
    .catch(function (error) {
      // console.log(error);
    });
};

export const orderProductStatus = (data) => {
  var config = {
    method: "post",
    url: `${process.env.REACT_APP_URL}orders/set_handover_status/`,
    headers: {
      Authorization: `Token ${localStorage.getItem("Token")}`,
    },
    data: data,
  };

  axios(config)
    .then(function (response) {
      window.location.reload();
      // console.log(JSON.stringify(response.data));
    })
    .catch(function (error) {
      // console.log(error);
    });
};

export const setDeliveryReceived = (data) => {
  var config = {
    method: "post",
    url: `${process.env.REACT_APP_URL}orders/set_delivery_status/`,
    headers: {
      Authorization: `Token ${localStorage.getItem("Token")}`,
    },
    data: data,
  };

  axios(config)
    .then(function (response) {
      window.location.reload();
      // console.log(JSON.stringify(response.data));
    })
    .catch(function (error) {
      // console.log(error);
    });
};
