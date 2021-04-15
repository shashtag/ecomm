import React, { createContext, useEffect, useContext, useState } from "react";
import { fetchArtistProducts } from "../API/Get";
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

  useEffect(() => {
    if (usrBaseInfo) {
      fetchArtistProducts(usrBaseInfo.id);
    }
    return () => {};
  }, [usrBaseInfo]);
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
      }}>
      {props.children}
    </ADashboardContext.Provider>
  );
};
