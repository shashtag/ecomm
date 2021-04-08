import React, { createContext, useContext, useState, useEffect } from "react";
import { UIContext } from "./UIContext";
import { patchArtistDetails } from "../API/Patch";
import { postArtistDetails } from "../API/Post";
import defaultProfilePic from "../assets/defaultProfilePic.png";

export const APContext = createContext();

export const APProvider = (props) => {
  const {
    setLoading,
    usrBaseInfo,
    // setUsrBaseInfo
  } = useContext(UIContext);

  const [customURL, setCustomURL] = useState("");
  const [aadhar, setAadhar] = useState("");
  const [GST, setGST] = useState("");
  const [PAN, setPAN] = useState("");
  const [payment, setPayment] = useState("");
  const [avatar, setAvatar] = useState(defaultProfilePic);

  useEffect(() => {
    // console.log("sss");
    // if (usrBaseInfo.is_first_login) {
    //   console.log("sss");
    //   postArtistDetails(setLoading);
    // }
    if (!usrBaseInfo.is_first_login) {
      patchArtistDetails(
        {},
        null,
        null,
        setLoading,
        null,
        setCustomURL,

        setAadhar,
        setGST,
        setPAN,
        setAvatar,
      );
    }
    return () => {};
  }, []);
  useEffect(() => {
    console.log("sss");
    if (usrBaseInfo.is_first_login) {
      console.log("sss");
      postArtistDetails(setLoading);
    }

    // patchArtistDetails(
    //   {},
    //   null,
    //   null,
    //   setLoading,
    //   null,
    //   setCustomURL,
    //   setAadhar,
    //   setGST,
    //   setPAN,
    // );
    return () => {};
  }, [usrBaseInfo]);

  return (
    <APContext.Provider
      value={{
        customURL,
        setCustomURL,
        aadhar,
        setAadhar,
        GST,
        setGST,
        PAN,
        setPAN,
        payment,
        setPayment,
        avatar,
        setAvatar,
      }}>
      {props.children}
    </APContext.Provider>
  );
};
