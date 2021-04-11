import axios from "axios";
import React, { useEffect } from "react";
import { useHistory, useParams } from "react-router";

const Verification = (props) => {
  const { id, code } = useParams();
  useEffect(() => {
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
        console.log(JSON.stringify(response.data));
        props.history.push("/login");
      })
      .catch(function (error) {
        console.log(error);
      });

    return () => {};
  }, []);
  return <div></div>;
};

export default Verification;
