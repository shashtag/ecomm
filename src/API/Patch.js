import axios from "axios";

export const patchArtistDetails = (
  data,
  setPage,
  page,
  setLoading,
  history,
  setCustomURL,
  setAadhar,
  setGST,
  setPAN,
  setAvatar,
) => {
  setLoading(true);
  var config = {
    method: "patch",
    url: `${process.env.REACT_APP_URL}accounts/modify_artist/`,
    headers: {
      Authorization: `Token ${localStorage.getItem("Token")}`,
      // ...data.getHeaders(),
    },
    data: data,
  };

  axios(config)
    .then(function (response) {
      // console.log(response.data);
      setLoading(false);
      setCustomURL(response.data.custom_url);
      setAadhar(response.data.aadhar_card_no);
      setGST(response.data.gst_no);
      setPAN(response.data.pan_card_no);
      setAvatar({ decode: undefined, encoded: response.data.profile_picture });

      // const reader = new FileReader();
      // reader.onload = () => {
      //   if (reader?.readyState === 2) {
      //     setAvatar(reader?.result);
      //   }
      // };
      // reader?.readAsDataURL(response?.data?.profile_picture);

      if (data.entries) {
        var res = Array.from(data.entries(), ([key, prop]) => ({
          [key]: {
            ContentLength: typeof prop === "string" ? prop.length : prop.size,
          },
        }));
      }

      if (res !== 0 && page !== 3) {
        setPage(page + 1);
      }
      if (page === 3) {
        history.push("/artist/dashboard");
      }
    })
    .catch(function (error) {
      setLoading(false);
      console.log(error);
    });
};

export const patchUsrDetails = (data, setLoading, setSnackbar) => {
  setLoading(true);
  var config = {
    method: "patch",
    url: `${process.env.REACT_APP_URL}auth/users/me/`,
    headers: {
      Authorization: `Token ${localStorage.getItem("Token")}`,
      "Content-Type": "application/json",
    },
    data: data,
  };

  axios(config)
    .then(function (response) {
      setLoading(false);
      // console.log(JSON.stringify(response.data));
      if (data.phone_number) {
        setSnackbar({
          value: true,
          message: "Phone number changed successfully",
          type: "success",
        });
      }
    })
    .catch(function (error) {
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
      // console.log(error);
    });
};
