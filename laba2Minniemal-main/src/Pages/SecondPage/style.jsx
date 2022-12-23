import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  root: {
    background: "#b3d4e9",
    "& .wrapper": {
      display: 'flex',
      columnGap: "28px",
    },
    "& .wrapperNavigation": {
      display: 'flex',
      justifyContent: 'center',
      paddingTop: "20px"
    },
    "& .mainBlock": {
      maxWidth: "942px",
      margin: "50px auto 0px auto"
    },
    "& .wrapperBlock": {
      width: "868px"
    },
    "& .verticalLine": {
      width: "46px",
      height: "1005px",
      display: 'flex',
      flexDirection: "column",
      justifyContent: "space-between"
    },

    "& .firstBlock": {
      backgroundColor: '#00042d',
      height: '1348px',
      position: 'relative',
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
    "& .topText": {
      fontFamily: "Playfair Display",
      fontWeight: "400",
      fontSize: "50px",
      lineHeight: "95px",
      color: "white",
      marginLeft: "80px"
    },
    "& .verticalLineinBlock": {
      height: "100px",
      width: "3px",
      marginBottom: "40px",
      backgroundColor: "white",
      marginLeft: "80px",
    },
    "& .wrapperImg": {
      marginLeft: "80px",
      display: 'flex',
      flexWrap: "wrap",
    },
    "& .bigSizeText": {
      fontFamily: "Playfair Display",
      fontWeight: "400",
      fontSize: "50px",
      lineHeight: "95px",
      color: "white",
    },
    "& .smallSizeText": {
      fontFamily: "Playfair Display",
      fontWeight: "400",
      fontSize: "50px",
      lineHeight: "95px",
      color: "white",
    },
    "& .wrapperText": {
      marginTop: "13px",
      marginLeft: "80px",
    },
    "& .smallSizeText": {
      fontSize: "20px",
      marginRight: "15px",
    },
    "& .secondBlock": {
      height: "1207px",
      padding: "78px 0px 0px 80px",
      backgroundColor: "white"
    },
    "& .customColorText": {
      color: "black",
      marginLeft: "0px",
      marginBottom: "40px",
    },
    "& .customColor": {
      backgroundColor: "black",
      marginLeft: "0px",
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
    "& .ball": {
      borderRadius: "100%",
      border: "2px solid black",
      width: "35px",
      height: "35px",
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
    "& .ball .ballInBall": {
      borderRadius: "100%",
      border: "2px solid black",
      width: "20px",
      height: "20px",
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
    "& .lineBall": {
      width: "2px",
      height: "53px",
      backgroundColor: "black"
    },
    "& .step": {
      display: 'flex',
      height: "385px"
    },
    "& .wrapperBall": {
      display: 'flex',
      flexDirection: "column",
      rowGap: "16px",
      width: "35px",
      alignItems: 'center',
    },
    "& .ballInBall": {
      width: "20px",
      height: "20px",
      backgroundColor: "black",
      border: "none",
    },
    "& .yearText": {
      fontFamily: "Montserrat",
      fontWeight: "700",
      fontSize: "15px",
      lineHeight: "30px",
      display: 'flex',
      flexDirection: "column",
      justifyContent: "space-between"
    },
    "& .blockYear": {
      display: 'flex',
      flexDirection: "column",
      justifyContent: "space-between",
      marginRight: "35px",
    },
    "& .blockText": {
      fontFamily: "Montserrat",
      fontWeight: "400",
      fontSize: "15px",
      lineHeight: "30px",
      marginBottom: "32px",
    },
    "& .wrapperBlockStep": {
      display: 'flex',
      marginTop: "115px",
    },
    "& .wrapperTextStep": {
      marginLeft: "58px",
    },
    "& .thirdBlock": {
      height: "702px",
      backgroundColor: "#00042d",
      paddingTop: "70px",
    },
    "& .marginB": {
      marginBottom: "40px",
    },
    "& .wrapperLoading": {
      maxWidth: "485px",
      marginLeft: "80px",
      display: 'flex',
      flexDirection: "column"
    },
    "& .textOneBlock": {
      fontFamily: "Montserrat",
      fontWeight: "500",
      fontSize: "10px",
      lineHeight: "30px",
      letterSpacing: "6px",
      color: "white",
      paddingLeft: "10px",
    },
    "& .line": {
      width: "389px",
      height: "2px",
      backgroundColor: "white",
      position: "absolute",
      top: "50%",
      zIndex: "1",
    },
    "& .textWithLine": {
      position: "relative",
      width: "389px",
      height: "30px",
    },
    "& .percent": {
      fontFamily: "Montserrat",
      fontWeight: "400",
      fontSize: "22px",
      letterSpacing: "-1px",
      color: "white",
      margin: "0px 20px 0px 20px",
    },
    "& .blocks": {
      display: 'flex',
      alignItems: 'center',
      marginBottom: "23px",
    },
    "& .wrapperTextOneBlock": {
      border: "2px solid white",
      width: "225px",
      zIndex: "2",
      backgroundColor: "#00042d",
      position: "absolute",
    },
    "& .widthForTwoBlock": {
      width: "317px",
    },
    "& .widthForThreeBlock": {
      width: "276px",
    },
    "& .widthForFourBlock": {
      width: "361px",
    },
    "& .widthForFiveBlock": {
      width: "225px",
    },
    "& .mgBtm": {
      marginBottom: "61px",
    },
    "& .fourthBlock": {
      paddingTop: "106px",
      paddingLeft: "80px",
      height: "914px",
      backgroundColor: "white",
    },
    "& .mgTop": {
      marginTop: "20px",
    },
    "& .fifthBlock": {
      paddingTop: "78px",
      height: "1064px",
      backgroundColor: "#00042d",
    },
    "& .colorW": {
      color: "white"
    },
    "& .textEmail": {
      marginTop: "30px",
      marginBottom: "5px",
    },
    "& .contactBlockText": {
      marginLeft: "80px",
    },
    "& .emailWebsite": {
      fontFamily: "Montserrat",
      fontWeight: "600",
      fontSize: "16px",
      lineHeight: "30px",
      color: "white",
      marginRight: "5px",
    },
    "& .inputBtnWrapper": {
      marginTop: "30px",
      width: "480px",
      marginLeft: "80px",
      display: 'flex',
      flexDirection: "column",
      rowGap: "37px"
    },
    // "& .inputName": {
    //   background: "none",
    //   border: "none",
    //   borderBottom: "2px solid white",
    //   fontFamily: "Montserrat",
    //   fontWeight: "600",
    //   fontSize: "12px",
    //   lineHeight: "24px",
    //   letterSpacing: "5px",
    //   padding: "0px 0px 10px 10px",
    //   color: "white",
    // },
    // "& .inputMessage": {
    //   marginTop: "12px",
    // },
    "& .sendMes": {
      marginTop: "20px",
      fontFamily: "Montserrat",
      fontWeight: "600",
      lineHeight: "24px",
      fontSize: "12px",
      letterSpacing: "5px",
      color: "white",
      backgroundColor: "#00042d",
      border: "2px solid white",
      padding: "16px 40px 16px 40px",
      cursor: "pointer",
      width: "244px",
    },
    "& .sixthBlock": {
      height: "160px",
      backgroundColor: "white",
      width: "868px",
    },
    "& .wrapperIcons": {
      paddingTop: "56px",
      paddingLeft: "112px",
    },
    "& .footerImg": {
      marginRight: "26px",
    },
    "& .footerText": {
      paddingLeft: "112px",
      marginTop: "25px",
      fontFamily: "Montserrat",
      fontWeight: "400",
      lineHeight: "30px",
      fontSize: "14px",
    },
    "& .marginForFooter": {
      width: "74px"
    },
    "& .wrapperFooter": {
      width: "942px",
      margin: "0px auto",
      display: 'flex',
    }

  }
});
export default useStyles;
