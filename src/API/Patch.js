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
      console.log(response.data);
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
        setPage(page + 2);
      }
      if (page === 3) {
        console.log("aa");
        history.push("/");
      }
    })
    .catch(function (error) {
      setLoading(false);
      console.log(error);
    });
};

export const patchUsrDetails = (data) => {
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
      console.log(JSON.stringify(response.data));
    })
    .catch(function (error) {
      console.log(error);
    });
};
