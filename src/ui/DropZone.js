import React, { useContext } from "react";
import "react-dropzone-uploader/dist/styles.css";
import Dropzone from "react-dropzone-uploader";
import { ADashboardContext } from "../Context/ADashboardContext";
import { Typography, useTheme } from "@material-ui/core";

const DropZone = (props) => {
  const theme = useTheme();
  const { img, setImg } = useContext(ADashboardContext);
  const getUploadParams = ({ meta }) => {
    return { url: "https://httpbin.org/post" };
  };

  // called every time a file's `status` changes
  const handleChangeStatus = ({ meta, file }, status) => {
    console.log(status, meta, file);
    setImg(file);
  };

  // receives array of files that are done uploading when submit button is clicked
  const handleSubmit = (files, allFiles) => {
    console.log(files.map((f) => f.meta));
    allFiles.forEach((f) => f.remove());
  };

  return (
    <div style={{ position: "relative" }}>
      <Typography
        style={{
          position: "absolute",
          background: "#FAFAFA",
          top: "-7px",
          zIndex: "1",
          color: "#262626",
          fontSize: "0.9rem",
          left: "10px",
          padding: theme.spacing(0, 0.5),
        }}>
        Product Image
      </Typography>
      <Dropzone
        styles={{ inputLabel: { textAlign: "center" } }}
        {...props}
        getUploadParams={getUploadParams}
        onChangeStatus={handleChangeStatus}
        maxFiles='1'
        // onSubmit={handleSubmit}
        accept='image/*,audio/*,video/*'></Dropzone>
      <Typography
        style={{
          background: "#FAFAFA",
          fontWeight: "400",
          color: "#262626",
          fontSize: "0.9rem",
          padding: theme.spacing(0, 0.5),
        }}>
        ** Upload 3/4 aspect ratio images for best results
      </Typography>
    </div>
  );
};

export default DropZone;
