import axios from "axios";
import React, { useContext, useEffect } from "react";
import { useHistory, useParams } from "react-router";
import { UIContext } from "../Context/UIContext";

const Verification = (props) => {
  const history = useHistory();
  const { setLoading, setSnackbar } = useContext(UIContext);
  const { id, code } = useParams();
  useEffect(() => {
    setLoading(true);
    var data = JSON.stringify({
      uid: id,
      token: code,
    });

    var config = {
      method: "post",
      url: `${process.env.REACT_APP_URL}auth/users/activation/`,
      headers: {
        "Content-Type": "application/json",
      },
      data: data,
    };

    axios(config)
      .then(function (response) {
        setLoading(false);
        history.push("/login");
        setSnackbar({
          value: true,
          message:
            "Congratulation! your account has been successfully verified",
          type: "success",
        });
      })
      .catch(function (error) {
        setSnackbar({
          value: true,
          message: "Not verified please try again",
          type: "error",
        });
      });

    return () => {};
  }, []);
  return <div></div>;
};

export default Verification;
