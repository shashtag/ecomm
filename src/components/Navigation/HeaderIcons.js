import React, { useContext } from "react";
import { PersonOutline, Menu } from "@material-ui/icons";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import { IconButton, useTheme } from "@material-ui/core";
import ShoppingCartOutlinedIcon from "@material-ui/icons/ShoppingCartOutlined";
import axios from "axios";
import DashboardOutlinedIcon from "@material-ui/icons/DashboardOutlined";
import { UIContext } from "../../Context/UIContext";
import { useHistory } from "react-router-dom";
import { Link } from "@material-ui/core";

const HeaderIcons = () => {
  const theme = useTheme();
  const { setLoading, setUsrBaseInfo, setToken, usrBaseInfo } = useContext(
    UIContext,
  );
  const history = useHistory();
  return (
    <div style={{ margin: theme.spacing(0, "auto") }}>
      <IconButton aria-label='cart' style={{}}>
        <PersonOutline
          style={{
            color: theme.palette.secondary.main,
          }}
        />
      </IconButton>

      {usrBaseInfo?.is_artist ? (
        <IconButton
          onClick={() => {
            history.push("/artist/dashboard");
          }}
          aria-label='cart'
          style={{ marginLeft: theme.spacing(2) }}>
          <DashboardOutlinedIcon
            style={{
              color: theme.palette.secondary.main,
            }}
          />
        </IconButton>
      ) : null}

      <IconButton aria-label='cart' style={{ marginLeft: theme.spacing(2) }}>
        <ShoppingCartOutlinedIcon
          style={{
            color: theme.palette.secondary.main,
          }}
        />
      </IconButton>
      <IconButton
        aria-label='cart'
        style={{ marginLeft: theme.spacing(2) }}
        onClick={() => {
          var config = {
            method: "post",
            url: `${process.env.REACT_APP_URL}auth/token/logout/`,
            headers: {
              Authorization: `Token ${localStorage.getItem("Token")}`,
            },
          };
          setLoading(true);

          axios(config)
            .then(function (response) {
              console.log(JSON.stringify(response.data));
              localStorage.removeItem("Token");
              setLoading(false);
              setUsrBaseInfo(null);
              setToken(false);
              history.push("/");
            })
            .catch(function (error) {
              console.log(error);
            });
        }}>
        <ExitToAppIcon
          style={{
            color: theme.palette.secondary.main,
          }}
        />
      </IconButton>
    </div>
  );
};

export default HeaderIcons;
