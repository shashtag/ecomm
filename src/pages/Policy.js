// import { makeStyles } from "@material-ui/core";
import React from "react";
// const useStyles = makeStyles((theme) => ({
//   root: {
//     padding: "0px 15px",
//     marginBottom: "80px",
//     [theme.breakpoints.up("md")]: {
//       padding: "0px 3.2%",
//     },
//   },
// }));

const Policy = (props) => {
  // const classes = useStyles();
  return (
    <div
    // className={classes.root}
    >
      <embed src={props.data} width='100%' height='2100px' />
    </div>
  );
};

export default Policy;
