import React, { useContext } from "react";
import { PersonOutline, Menu } from "@material-ui/icons";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import { IconButton, useTheme } from "@material-ui/core";
import ShoppingCartOutlinedIcon from "@material-ui/icons/ShoppingCartOutlined";
import DashboardOutlinedIcon from "@material-ui/icons/DashboardOutlined";
import { UIContext } from "../../Context/UIContext";
import { useHistory } from "react-router-dom";
import { logout } from "../../API/Post";

const HeaderIcons = () => {
  const theme = useTheme();
  const {
    setLoading,
    setUsrBaseInfo,
    setToken,
    usrBaseInfo,
    token,
  } = useContext(UIContext);
  const history = useHistory();
  return (
    <div style={{ margin: theme.spacing(0, "auto") }}>
      {token ? (
        <IconButton
          onClick={() => {
            history.push("/user/profile");
          }}
          style={{}}>
          <PersonOutline
            style={{
              color: theme.palette.secondary.main,
            }}
          />
        </IconButton>
      ) : null}

      {usrBaseInfo?.is_artist ? (
        <IconButton
          onClick={() => {
            history.push("/artist/dashboard");
          }}
          style={{ marginLeft: theme.spacing(2) }}>
          <DashboardOutlinedIcon
            style={{
              color: theme.palette.secondary.main,
            }}
          />
        </IconButton>
      ) : null}

      <IconButton
        onClick={() => {
          history.push("/cart");
        }}
        style={{ marginLeft: theme.spacing(2) }}>
        <ShoppingCartOutlinedIcon
          style={{
            color: theme.palette.secondary.main,
          }}
        />
      </IconButton>

      {token ? (
        <IconButton
          style={{ marginLeft: theme.spacing(2) }}
          onClick={() => {
            logout(setLoading, setUsrBaseInfo, setToken, history);
          }}>
          <ExitToAppIcon
            style={{
              color: theme.palette.secondary.main,
            }}
          />
        </IconButton>
      ) : null}
    </div>
  );
};

export default HeaderIcons;
