import React, { createContext, useContext, useState, useEffect } from "react";
import { UIContext } from "./UIContext";
import { patchArtistDetails } from "../API/Patch";
import { postArtistDetails } from "../API/Post";

export const APContext = createContext();

export const APProvider = (props) => {
  const {
    setLoading,
    usrBaseInfo,

    setAadhar,

    setGST,

    setPAN,
    setAcc,
    setIfsc,
    setAccName,
    setBranch,
    setUPI,
    avatar,
    setAvatar,
  } = useContext(UIContext);

  const [customURL, setCustomURL] = useState("");

  const [payment, setPayment] = useState("");

  useEffect(() => {
    // console.log("sss");
    // if (usrBaseInfo.is_first_login) {
    //   console.log("sss");
    //   postArtistDetails(setLoading);
    // }
    if (!usrBaseInfo.is_first_login) {
      patchArtistDetails(
        {},
        () => {},
        null,
        setLoading,
        null,
        setCustomURL,

        setAadhar,
        setGST,
        setPAN,
        setAvatar,
        setAcc,
        setIfsc,
        setAccName,
        setBranch,
        setUPI,
      );
    }
    return () => {};
  }, []);
  useEffect(() => {
    if (usrBaseInfo.is_first_login) {
      postArtistDetails(setLoading, () => {
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
          setAcc,
          setIfsc,
          setAccName,
          setBranch,
          setUPI,
        );
      });
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

        payment,
        setPayment,
        avatar,
        setAvatar,
      }}>
      {props.children}
    </APContext.Provider>
  );
};
