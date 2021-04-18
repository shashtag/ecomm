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

  const [usrBaseInfo, setUsrBaseInfo] = useState("");

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
    fetchTrendingProducts(setTrendingProducts, setLoading, setSnackbar);
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

        search,
        setSearch,
      }}>
      {props.children}
    </UIContext.Provider>
  );
};
