import React, { createContext, useContext, useState } from "react";
import { UIContext } from "./UIContext";

export const SignupContext = createContext();

export const SignupProvider = (props) => {
  const { pass, setPass, rePass, setRePass } = useContext(UIContext);
  const [selectedDate, handleDateChange] = useState(new Date(2001, 0, 1));
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  return (
    <SignupContext.Provider
      value={{
        selectedDate: selectedDate,
        handleDateChange: handleDateChange,
        name: name,
        setName: setName,
        email: email,
        setEmail: setEmail,
        phone: phone,
        setPhone: setPhone,
        pass: pass,
        setPass: setPass,
        rePass: rePass,
        setRePass: setRePass,
      }}>
      {props.children}
    </SignupContext.Provider>
  );
};
