import React, { createContext, useContext, useState, useEffect } from "react";
import { UIContext } from "./UIContext";
import { patchArtistDetails } from "../API/Patch";

export const APContext = createContext();

export const APProvider = (props) => {
  const { setLoading } = useContext(UIContext);

  const [customURL, setCustomURL] = useState("");
  const [aadhar, setAadhar] = useState("");
  const [GST, setGST] = useState("");
  const [PAN, setPAN] = useState("");
  const [payment, setPayment] = useState("");

  useEffect(() => {
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
    );
    return () => {};
  }, []);

  return (
    <APContext.Provider
      value={[
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
      ]}>
      {props.children}
    </APContext.Provider>
  );
};
