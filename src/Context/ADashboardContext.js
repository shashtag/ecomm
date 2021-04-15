import React, { createContext, useEffect, useContext, useState } from "react";
import { fetchArtistProducts, fetchArtistProfile } from "../API/Get";
import { UIContext } from "./UIContext";

export const ADashboardContext = createContext();

export const ADashboardProvider = (props) => {
  const { setLoading, usrBaseInfo, setUsrBaseInfo } = useContext(UIContext);
  const [category, setCategory] = useState("");
  const [name, setName] = useState("");
  const [desc, setDesc] = useState("");
  const [price, setPrice] = useState("");
  const [quantity, setQuantity] = useState("");
  const [topListings, setTopListings] = useState("");
  const [insights, setInsights] = useState("");
  const [img, setImg] = useState("");
  useEffect(() => {
    if (usrBaseInfo) {
      fetchArtistProducts(usrBaseInfo.id, setTopListings);
    }
    return () => {};
  }, [usrBaseInfo]);
  useEffect(() => {
    fetchArtistProfile(setInsights);
    console.log(insights);
    return () => {};
  }, []);
  return (
    <ADashboardContext.Provider
      value={{
        category,
        setCategory,
        name,
        setName,
        desc,
        setDesc,
        price,
        setPrice,
        quantity,
        setQuantity,
        topListings,
        setTopListings,
        img,
        setImg,
      }}>
      {props.children}
    </ADashboardContext.Provider>
  );
};
