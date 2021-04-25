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
      console.log(error);
    });
};
