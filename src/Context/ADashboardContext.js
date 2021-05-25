import React, { createContext, useEffect, useContext, useState } from "react";
import { fetchArtistProducts, fetchArtistProfile } from "../API/Get";
import { patchArtistDetails } from "../API/Patch";
import { UIContext } from "./UIContext";

export const ADashboardContext = createContext();

export const ADashboardProvider = (props) => {
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
  } = useContext(UIContext);

  const [topListings, setTopListings] = useState(false);
  const [insights, setInsights] = useState(false);
  const [img, setImg] = useState(false);
  useEffect(() => {
    if (usrBaseInfo) {
      fetchArtistProducts(usrBaseInfo.id, setTopListings, setLoading);
    }
    return () => {};
  }, [usrBaseInfo]);
  useEffect(() => {
    fetchArtistProfile(setInsights, setLoading, () => {
      patchArtistDetails(
        {},
        () => {},
        null,
        setLoading,
        null,
        () => {},

        setAadhar,
        setGST,
        setPAN,
        () => {},
        setAcc,
        setIfsc,
        setAccName,
        setBranch,
        setUPI,
      );
    });
    return () => {};
  }, []);
  return (
    <ADashboardContext.Provider
      value={{
        topListings,
        setTopListings,
        img,
        setImg,
        insights,
        setInsights,
      }}>
      {props.children}
    </ADashboardContext.Provider>
  );
};
