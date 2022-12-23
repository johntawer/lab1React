import React from "react";

import useStyles from "./style";

const Input = ({ styles, type, placeholder }) => {


  const classes = useStyles();
  return (
    <div className={classes.root}>
      <input className={styles} type={type} placeholder={placeholder} />
    </div>
  )
}

export default Input
