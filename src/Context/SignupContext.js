import React, { createContext, useState } from "react";

export const SignupContext = createContext();

export const SignupProvider = (props) => {
  const [selectedDate, handleDateChange] = useState(new Date(2001, 0, 1));
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [pass, setPass] = useState("");
  const [rePass, setRePass] = useState("");
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
