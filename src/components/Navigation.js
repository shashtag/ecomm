import React from "react";
import SubHeader from "./Navigation/SubHeader";

import Header from "./Navigation/Header";
import Categories from "./Navigation/Categories";
import { useMediaQuery, useTheme } from "@material-ui/core";
import { DomainPropTypes } from "@material-ui/pickers/constants/prop-types";

const Navigation = (props) => {
  const theme = useTheme();
  const md = useMediaQuery(theme.breakpoints.up("md"));

  return (
    <>
      {props.noSub ? null : <SubHeader />}
      <Header />
      {md ? props.noCat ? null : <Categories /> : null}
    </>
  );
};

export default Navigation;
