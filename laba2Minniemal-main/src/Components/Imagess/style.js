import { createUseStyles } from "react-jss"
const useStyles = createUseStyles({
  root: {
    "& .textForAllBlock": {
      fontFamily: "Montserrat",
      fontWeight: "400",
      fontSize: "16px",
      lineHeight: "30px",
      color: "white",
    },
  }
})
export default useStyles
