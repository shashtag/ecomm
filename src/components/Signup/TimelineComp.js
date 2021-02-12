import React from "react";

import { makeStyles, Typography } from "@material-ui/core";

import Timeline from "@material-ui/lab/Timeline";
import TimelineItem from "@material-ui/lab/TimelineItem";
import TimelineSeparator from "@material-ui/lab/TimelineSeparator";
import TimelineConnector from "@material-ui/lab/TimelineConnector";
import TimelineContent from "@material-ui/lab/TimelineContent";
import TimelineDot from "@material-ui/lab/TimelineDot";

import basicDetailsIcon from "../../assets/authImgs/basicDetailsIcon";
import verifyIcon from "../../assets/authImgs/verifyIcon";
import protectIcon from "../../assets/authImgs/protectIcon";

const useStyles = makeStyles((theme) => ({
  timeDot: {
    height: "32px",
    width: "32px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  tRoot: {
    "& .MuiTimelineItem-missingOppositeContent:before": {
      content: "none",
    },
    "& .MuiTimelineContent-root": {
      padding: "20px 16px",
    },
    padding: "6px 8px 6px 0",
  },
  tSep: {
    height: "14vh",
  },
}));

const TimelineComp = (props) => {
  const classes = useStyles();
  const tDot = [basicDetailsIcon, verifyIcon, protectIcon];

  return (
    <Timeline
      align='right'
      className={classes.tRoot}
      style={
        {
          // position: "absolute",
          // top: "50%",
          // right: "-2%",
          // transform: "translateY(-50%)",
          // display: "flex",
          // justifyContent: "center",
          // alignItems: "center",
        }
      }>
      {["Basic Details", "Verify", "Protect"].map((content, i) => (
        <TimelineItem
          key={i}
          // style={{ width: "130px" }}
        >
          <TimelineSeparator className={classes.tSep}>
            <TimelineDot
              className={classes.timeDot}
              style={{
                backgroundColor: i === props.step ? "#40567A" : "#E1E1E1",
              }}>
              {tDot[i](i, props.step)}
            </TimelineDot>
            {i === tDot.length - 1 ? null : (
              <TimelineConnector style={{ backgroundColor: "#E4E4E4" }} />
            )}
          </TimelineSeparator>
          <TimelineContent>
            <Typography
              variant='caption'
              style={{
                color: i === props.step ? "#40567A" : "#0A0A0A",
                fontWeight: "500",
              }}
              noWrap>
              {content}
            </Typography>
          </TimelineContent>
        </TimelineItem>
      ))}
    </Timeline>
  );
};

export default TimelineComp;
