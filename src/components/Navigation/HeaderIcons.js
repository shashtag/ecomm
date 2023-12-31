import React, { useContext } from "react";
import { PersonOutline } from "@material-ui/icons";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import { IconButton, useTheme, Tooltip } from "@material-ui/core";
import ShoppingCartOutlinedIcon from "@material-ui/icons/ShoppingCartOutlined";
import DashboardOutlinedIcon from "@material-ui/icons/DashboardOutlined";
import { UIContext } from "../../Context/UIContext";
import { useHistory } from "react-router-dom";
import { logout } from "../../API/Post";
import BallotOutlinedIcon from "@material-ui/icons/BallotOutlined";

const HeaderIcons = () => {
  const theme = useTheme();
  const { setLoading, setUsrBaseInfo, setToken, usrBaseInfo, token } =
    useContext(UIContext);
  const history = useHistory();
  return (
    <div style={{ margin: theme.spacing(0, "auto") }}>
      {token ? (
        usrBaseInfo?.is_kalafex_admin ? null : (
          <Tooltip title="Profile">
            <IconButton
              onClick={() => {
                history.push("/user/profile");
              }}
              style={{}}
            >
              <PersonOutline
                style={{
                  color: theme.palette.secondary.main,
                }}
              />
            </IconButton>
          </Tooltip>
        )
      ) : null}

      {usrBaseInfo?.is_artist ? (
        <Tooltip title="Dashboard">
          <IconButton
            onClick={() => {
              history.push("/artist/dashboard");
            }}
            style={{ marginLeft: theme.spacing(2) }}
          >
            <DashboardOutlinedIcon
              style={{
                color: theme.palette.secondary.main,
              }}
            />
          </IconButton>
        </Tooltip>
      ) : null}

      {token ? (
        usrBaseInfo?.is_kalafex_admin ? (
          <Tooltip title="Logout">
            <IconButton
              style={{ marginLeft: theme.spacing(2) }}
              onClick={() => {
                logout(setLoading, setUsrBaseInfo, setToken, history);
              }}
            >
              <ExitToAppIcon
                style={{
                  color: theme.palette.secondary.main,
                }}
              />
            </IconButton>
          </Tooltip>
        ) : (
          <>
            <Tooltip title="Cart">
              <IconButton
                onClick={() => {
                  history.push("/cart");
                }}
                style={{ marginLeft: theme.spacing(2) }}
              >
                <ShoppingCartOutlinedIcon
                  style={{
                    color: theme.palette.secondary.main,
                  }}
                />
              </IconButton>
            </Tooltip>
            <Tooltip title="Track Order">
              <IconButton
                style={{ marginLeft: theme.spacing(2) }}
                onClick={() => {
                  history.push("/user/trackOrder");
                }}
              >
                <BallotOutlinedIcon
                  style={{
                    color: theme.palette.secondary.main,
                  }}
                />
              </IconButton>
            </Tooltip>
            <Tooltip title="Logout">
              <IconButton
                style={{ marginLeft: theme.spacing(2) }}
                onClick={() => {
                  logout(setLoading, setUsrBaseInfo, setToken, history);
                }}
              >
                <ExitToAppIcon
                  style={{
                    color: theme.palette.secondary.main,
                  }}
                />
              </IconButton>
            </Tooltip>
          </>
        )
      ) : null}
    </div>
  );
};

export default HeaderIcons;
