import React, { useContext } from "react";
import "react-dropzone-uploader/dist/styles.css";
import Dropzone from "react-dropzone-uploader";
import { ADashboardContext } from "../Context/ADashboardContext";
import { Typography, useTheme } from "@material-ui/core";

const DropZone = (props) => {
  const theme = useTheme();
  const { setImg } = useContext(ADashboardContext);
  // const getUploadParams = ({ meta }) => {
  //   return { url: "https://httpbin.org/post" };
  // };

  // called every time a file's `status` changes

  // const [images, setImages] = useState([]);
  const handleChangeStatus = ({ meta, file }, status) => {
    if (status === "removed") {
      if (!props.addImg) {
        props.setDisabled(true);
      }
    }
    if (status === "done") {
      if (!props.addImg) {
        props.setDisabled(false);
      }
    }
    setImg(file);
  };

  // const fetchImg = async () => {
  //   if (props.addImg) {
  //     for (let i = 0; i < props.imgs.length; i++) {
  //       console.log(i);
  //       await fetch(props.imgs[i].image, {
  //         method: "GET",
  //         // mode: "no-cors",
  //       }).then((res) => {
  //         res.arrayBuffer().then(async (buf) => {
  //           const file = new File([buf], `image_data_url.png`, {
  //             type: "image/png",
  //           });
  //           await setImages([...images, file]);
  //           console.log(images);
  //         });
  //       });
  //     }
  //   }
  // };
  // useEffect(() => {
  //   fetchImg();
  //   return () => {};
  // }, []);
  return (
    <div style={{ position: "relative" }}>
      {/* <img src={images[0]} alt='aaaaa' /> */}
      {props.addImg ? null : (
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
          Cover Image
        </Typography>
      )}
      <Dropzone
        inputContent={
          props.addImg ? "Add Images" : "Drag Files or Click to Browse"
        }
        // initialFiles={props.addImg ? (images.length !== 0 ? images : []) : []}
        styles={{
          inputLabel: { textAlign: "center" },
          dropzone: props.addImg ? { width: "100%" } : null,
          // inputLabelWithFiles: props.addImg ? { padding: "0" } : null,
          dropzoneReject: {
            border: "red",
            background: theme.palette.error.main,
          },
          preview: { minHeight: "80px", padding: "30px 4%" },
          previewImage: { maxHeight: "80px", maxWidth: "280px" },
        }}
        {...props}
        // getUploadParams={getUploadParams}
        onChangeStatus={handleChangeStatus}
        maxFiles={props.addImg ? "1" : "1"}
        maxSizeBytes={104857600}
        // onSubmit={handleSubmit}
        accept='image/x-png,image/gif,image/jpeg,image/png'></Dropzone>
      {props.addImg ? null : (
        <Typography
          style={{
            background: "#FAFAFA",
            fontWeight: "400",
            color: "#262626",
            fontSize: "0.9rem",
            padding: theme.spacing(0, 0.5),
          }}>
          ** For best results, upload 3:4 aspect ratio images
        </Typography>
      )}
    </div>
  );
};

export default DropZone;
