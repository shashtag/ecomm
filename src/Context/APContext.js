import React, { createContext, useState } from "react";

export const APContext = createContext();

export const APProvider = (props) => {
  const [customURL, setCustomURL] = useState("");

  return (
    <APContext.Provider value={[customURL, setCustomURL]}>
      {props.children}
    </APContext.Provider>
  );
};
