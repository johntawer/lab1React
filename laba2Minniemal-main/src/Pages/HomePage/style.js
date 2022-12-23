import { createUseStyles } from "react-jss"

const useStyles = createUseStyles({
  root: {
    background: "#b3d4e9",
    "& .wrapper": {
      display: "flex",
      columnGap: '28px',
    },
    "& .mainBlock": {
      maxWidth: '942px',
      margin: "50px auto",
    },
    "& .wrapperBlock": {
      width: '868px',
    },
    "& .verticalLine": {
      width: "46px",
      height: "1005px",
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
    },
    "& .wrapperNavigation": {
      display: 'flex',
      justifyContent: "center",
    },

    "& .firstWord": {
      fontFamily: "Playfair Display",
      fontWeight: "600",
      lineHeight: "30px",
      fontSize: "25px",
      color: "white",
      marginLeft: "15px",
    },
    "& .secondWord": {
      fontFamily: "Playfair Display",
      fontWeight: "600",
      lineHeight: "30px",
      fontSize: "25px",
      color: "white",
      marginLeft: "15px",
    },

    "& .oneBlock": {
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
      rowGap: "45px",
    },
    "& .twoBlock": {
      height: "475px",
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
    },
    "& .threeRow": {
      width: "24px",
      height: "23px",
      display: "block",
    },
    "& .textInOneBlock": {
      rotate: "-90deg",
      width: "108px",
      height: "100px",
      fontFamily: "Montserrat",
      fontWeight: "700",
      lineHeight: "30px",
      fontSize: "12px",
      letterSpacing: "5px",
      color: "black",
    },
    "& .textInTwoBlock": {
      rotate: "-90deg",
      fontFamily: "Montserrat",
      fontWeight: "400",
      lineHeight: "30px",
      fontSize: "12px",
      letterSpacing: "5px",
      color: "black",
    },
    "& .firstBlock": {
      backgroundColor: "#00042d",
      height: "778px",
      position: "relative",
    },
    "& .h1FirstBlock": {
      fontFamily: "Playfair Display",
      fontWeight: "400",
      lineHeight: "90px",
      fontSize: "90px",
      color: "white",
      marginBottom: "8px",
    },
    "& .pFirstBlock": {
      fontFamily: "Montserrat",
      fontWeight: "400",
      lineHeight: "32px",
      fontSize: "16px",
      color: "white",
      marginBottom: "58px",
    },
    "& .pFirstBlock span": {
      fontWeight: "600",
      fontStyle: "italic",
    },
    "& .downloadCv": {
      fontFamily: "Montserrat",
      fontWeight: "600",
      lineHeight: "24px",
      fontSize: "12px",
      letterSpacing: "5px",
      color: "white",
      backgroundColor: "#00042d",
      border: "2px solid white",
      padding: "5px 10px 5px 10px",
      cursor: "pointer",
    },
    "& .leftBlock": {
      maxWidth: "475px",
      paddingTop: "100px",
      paddingLeft: "80px",
    },
    "& .manWithSunglasses": {
      position: "absolute",
      top: "133px",
      left: "659px",
    },

    "& .secondBlock": {
      height: "640px",
      backgroundColor: "white",
      padding: "80px 0px 0px 80px",
    },
    "& .topText": {
      fontFamily: "Playfair Display",
      fontWeight: "400",
      fontSize: "50px",
      lineHeight: "95px",
    },
    "& .verticalLineinBlock": {
      height: "100px",
      width: "3px",
      background: "black",
      marginTop: "40px",
      marginBottom: "40px",
    },

    "& .h2Text": {
      fontFamily: "Montserrat",
      fontWeight: "600",
      fontSize: "20px",
      lineHeight: "30px",
      margin: "0px 0px 30px 0px",
    },

    "& .bottomText": {
      fontFamily: "Montserrat",
      fontWeight: "400",
      fontSize: "15px",
      lineHeight: "30px",
    },
    "& .thirdBlock": {
      backgroundColor: "#00042d",
      height: "329px",
      display: "flex",
      justifyContent: "space-evenly",
      alignItems: "center",
    },
    // "& .textForAllBlock": {
    //   fontFamily: "Montserrat",
    //   fontWeight: "400",
    //   fontSize: "16px",
    //   lineHeight: "30px",
    //   color: "white",
    // },
    "& .fourthBlock": {
      minHeight: "868px",
      backgroundColor: "white",
      padding: "80px 0px 0px 80px",
    },
    "& .wrapperFourthBlock": {
      maxWidth: "639px",
    },
    "& .textWithMinus": {
      display: "flex",
      justifyContent: "space-between",
      alignItems: 'center',
    },
    "& .textTeam": {
      fontFamily: "Montserrat",
      fontWeight: "600",
      fontSize: "20px",
      lineHeight: "30px",
    },
    "& .minus": {
      width: "5px",
      height: "2px",
      backgroundColor: "black",
    },
    "& .onlyText": {
      fontFamily: "Montserrat",
      fontWeight: "400",
      fontSize: "16px",
      lineHeight: "30px",
      marginTop: '32px',
    },
    "& .textInOnlyText": {
      fontFamily: "Montserrat",
      fontWeight: "400",
      fontSize: "16px",
      lineHeight: "30px",
      marginTop: '32px',
    },

    "& .textInOnlyText": {
      fontWeight: "700",
    },
    "& .horizontalLine": {
      marginTop: "23px",
      backgroundColor: "black",
      height: "2px",
    },

    /* details[open] > summary {
      color: rgb(247, 23, 23),
      background-color: rgb(39, 182, 103),
      transition: all 3s,
    } */
    "& .wrapperTagDetails summary": {
      fontSize: "20px",
      fontWeight: 600,
      fontFamily: "Montserrat",
      lineHeight: "30px",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "baseline",
      padding: "25px 0px 4px 0px",



    },
    "& summary": {
      /* background-color: #eee, */
      /* color: #333, */
      borderBottom: "2px rgb(0, 0, 0) solid",
      cursor: "pointer",
      listStyleType: "none",
    },
    "& summary:after": {
      content: "\"+\"",
      fontSize: "20px",
      fontWeight: "600",
      fontFamily: "Montserrat",
      lineHeight: "30px",
    },

    "& details[open] summary:after": {
      "content": "\"-\"",
      "fontSize": "20px",
      "fontWeight": "600",
      "fontFamily": "\"Montserrat\"",
      "lineHeight": "30px"
    }

  }
})
export default useStyles
