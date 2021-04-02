import axios from "axios";

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
        console.log("abc");
        history.push("/artist/profile");
      }
    })
    .catch(function (error) {
      console.log(error);
    });
};
