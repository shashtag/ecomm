import React, { createContext, useState, useEffect } from "react";
import { fetchBaseDetailsUser, fetchTrendingProducts } from "../API/Get";
import { useHistory } from "react-router-dom";

export const UIContext = createContext();

export const UIProvider = (props) => {
  const history = useHistory();
  const [loading, setLoading] = useState(false);
  const [token, setToken] = useState(false);
  const [snackbar, setSnackbar] = useState(false);
  const [trendingProducts, setTrendingProducts] = useState({
    count: 2,
    next: null,
    previous: null,
    results: [
      {
        pid: "5f6b92be-ed0d-44cc-a328-560136d0e581",
        name: "Art Piece one",
        artist: 2,
        category: "accessories",
        subcategory: "bands",
        original_price: "500.00",
        kalafex_price: "525.00",
        display_image:
          "https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3145&q=80",
      },
      {
        pid: "45752f8c-4e5b-4fc7-abb1-c993fb6cc235",
        name: "Art Piece two",
        artist: 2,
        category: "accessories",
        subcategory: "bands",
        original_price: "525.00",
        kalafex_price: "551.25",
        display_image:
          "https://images.unsplash.com/flagged/photo-1572392640988-ba48d1a74457?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YXJ0fGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
      },
      {
        pid: "5f6b92be-ed0d-44cc-a328-560136d0e581",
        name: "Art Piece one",
        artist: 2,
        category: "accessories",
        subcategory: "bands",
        original_price: "500.00",
        kalafex_price: "525.00",
        display_image:
          "https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3145&q=80",
      },
      {
        pid: "45752f8c-4e5b-4fc7-abb1-c993fb6cc235",
        name: "Art Piece two",
        artist: 2,
        category: "accessories",
        subcategory: "bands",
        original_price: "525.00",
        kalafex_price: "551.25",
        display_image:
          "https://images.unsplash.com/flagged/photo-1572392640988-ba48d1a74457?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YXJ0fGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
      },
    ],
  });
  const [search, setSearch] = useState("");
  const [pass, setPass] = useState("");
  const [rePass, setRePass] = useState("");
  const [curPass, setCurPass] = useState("");
  const [aadhar, setAadhar] = useState("");
  const [GST, setGST] = useState("");
  const [PAN, setPAN] = useState("");
  const [acc, setAcc] = useState("");
  const [ifsc, setIfsc] = useState("");
  const [accName, setAccName] = useState("");
  const [branch, setBranch] = useState("");
  const [UPI, setUPI] = useState("");

  const [usrBaseInfo, setUsrBaseInfo] = useState("");
  const [usrAdresses, setUsrAdresses] = useState(false);
  const [avatar, setAvatar] = useState({
    decode: {},
    encoded: null,
  });

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
        aadhar,
        setAadhar,
        GST,
        setGST,
        PAN,
        setPAN,
        acc,
        setAcc,
        ifsc,
        setIfsc,
        accName,
        setAccName,
        branch,
        setBranch,
        UPI,
        setUPI,
        avatar,
        setAvatar,
      }}>
      {props.children}
    </UIContext.Provider>
  );
};
