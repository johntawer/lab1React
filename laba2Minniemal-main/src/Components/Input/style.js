import { createUseStyles } from "react-jss"
const useStyles = createUseStyles({
  root: {

    "& .inputName": {
      background: "none",
      border: "none",
      borderBottom: "2px solid white",
      fontFamily: "Montserrat",
      fontWeight: "600",
      fontSize: "12px",
      lineHeight: "24px",
      letterSpacing: "5px",
      padding: "0px 0px 10px 10px",
      color: "white",
      width: '100%',
    },
    "& .inputMessage": {
      marginTop: "12px",
    },
  },

})
export default useStyles
