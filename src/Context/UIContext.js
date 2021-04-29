import React, { createContext, useState, useEffect } from "react";
import { fetchBaseDetailsUser, fetchTrendingProducts } from "../API/Get";
import { useHistory } from "react-router-dom";

export const UIContext = createContext();

export const UIProvider = (props) => {
  const history = useHistory();
  const [loading, setLoading] = useState(false);
  const [token, setToken] = useState(false);
  const [snackbar, setSnackbar] = useState(false);
  const [trendingProducts, setTrendingProducts] = useState(null);
  const [search, setSearch] = useState("");
  const [pass, setPass] = useState("");
  const [rePass, setRePass] = useState("");
  const [curPass, setCurPass] = useState("");

  const [usrBaseInfo, setUsrBaseInfo] = useState("");
  const [usrAdresses, setUsrAdresses] = useState(false);

  useEffect(() => {
    if (!localStorage.getItem("Token")) {
      setUsrBaseInfo(null);
      return;
    }
    if (localStorage.getItem("Token")) {
      setToken(true);
    }
    if (token) {
      fetchBaseDetailsUser(setUsrBaseInfo, setLoading, history, setSnackbar);
    }
    return () => {};
  }, [token]);

  useEffect(() => {
    fetchTrendingProducts(null, setTrendingProducts, setLoading, setSnackbar);
    return () => {};
  }, []);

  return (
    <UIContext.Provider
      value={{
        loading,
        setLoading,
        token,
        setToken,
        snackbar,
        setSnackbar,
        trendingProducts,
        setTrendingProducts,
        usrBaseInfo,
        setUsrBaseInfo,
        pass,
        setPass,
        search,
        setSearch,
        rePass,
        setRePass,
        curPass,
        setCurPass,
        usrAdresses,
        setUsrAdresses,
      }}>
      {props.children}
    </UIContext.Provider>
  );
};
