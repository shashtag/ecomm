import React, { createContext, useState } from "react";

export const UIContext = createContext();

export const UIProvider = (props) => {
  const [loading, setLoading] = useState(false);
  return (
    <UIContext.Provider value={{ loading: loading, setLoading: setLoading }}>
      {props.children}
    </UIContext.Provider>
  );
};
