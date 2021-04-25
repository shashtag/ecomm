import React, { useContext } from "react";
import SubHeader from "./Navigation/SubHeader";

import Header from "./Navigation/Header";
import Categories from "./Navigation/Categories";
import { useMediaQuery, useTheme } from "@material-ui/core";
import { DomainPropTypes } from "@material-ui/pickers/constants/prop-types";
import { UIContext } from "../Context/UIContext";

const Navigation = (props) => {
  const { token } = useContext(UIContext);
  const theme = useTheme();
  const md = useMediaQuery(theme.breakpoints.up("md"));

  return (
    <>
      {props.noSub || token ? null : <SubHeader />}
      <Header />
      {md ? props.noCat ? null : <Categories /> : null}
    </>
  );
};

export default Navigation;
