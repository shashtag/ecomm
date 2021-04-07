import React, { createContext, useContext, useState, useEffect } from "react";
import { UIContext } from "./UIContext";

export const ADashboardContext = createContext();

export const ADashboardProvider = (props) => {
  const { setLoading, usrBaseInfo, setUsrBaseInfo } = useContext(UIContext);
  const [category, setCategory] = useState("");
  const [name, setName] = useState("");
  const [desc, setDesc] = useState("");
  const [price, setPrice] = useState("");
  const [quantity, setQuantity] = useState("");

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
