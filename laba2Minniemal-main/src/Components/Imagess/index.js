import React from "react";

import useStyles from "./style";

const ImgComponents = ({ text, index, path } /*or (props)*/) => {

  // const { path, index, text } = props

  const classes = useStyles();
  return (
    <div className={classes.root}>
      <img src={path} alt={index} />
      <p className="textForAllBlock">{text}</p>
    </div>
  )
}

export default ImgComponents
