import { Card } from "@material-ui/core";
import React, { useContext } from "react";
import CancelIcon from "@material-ui/icons/Cancel";
import { deleteProductImage } from "../API/Delete";
import { UIContext } from "../Context/UIContext";

const SmImg = (props) => {
  const { setSnackbar, setLoading } = useContext(UIContext);
  return (
    <div
      style={{
        position: "relative",
      }}>
      <CancelIcon
        style={{
          position: "absolute",
          zIndex: 1000000000000000,
          right: -14,
          top: -12,
          cursor: "pointer",
        }}
        onClick={() => {
          // console.log(props.data);
          deleteProductImage(props.data.id, setSnackbar, setLoading);
        }}
      />
      <Card
        // onClick={cardClickHandler}
        style={{ position: "relative" }}>
        <div
          style={{
            width: "100%",
            paddingTop: "133.333333%",
            position: "relative",
          }}>
          <div
            style={{
              aspectRatio: "3/4",
              position: "absolute",
              top: "0",
              left: "0",
              bottom: "0",
              right: "0",
              background: `url("${props.img}") no-repeat center center / cover `,
            }}></div>
        </div>
      </Card>
    </div>
  );
};

export default SmImg;
