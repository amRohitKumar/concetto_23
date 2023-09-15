import styled from "@emotion/styled";
import Box from "@mui/material/Box";
import BGImg from "../assets/bg-footer.png";

export const Wrapper = styled(Box)({
  // border: "1px solid red",
  minHeight: "250px",
  width: "100%",
  backgroundImage: `url(${BGImg})`,
  backgroundRepeat: "no-repeat",
  backgroundPosition: "bottom",
  backgroundSize: "contain",
  backgroundColor: "#0c0c0c57",
  backdropFilter: "blur(5px)",
  color: "white",
  // padding: "0 2rem",
  paddingTop: "3rem",
  paddingBottom: "1rem",
  flexDirection: "column",

  ".top-box": {
    display: "flex",
    justifyContent: "center",

    ul:{
      paddingLeft: "0 !important"
    },

    ".row-title": {
      marginBottom: "1em",
    },

    li: {
      marginBottom: "0.25em",
      cursor: "pointer",
      display: 'block',
      padding: "0.25rem",
      "&:hover": {
        color: "#e87d01",
      },

      a: {
        all: "unset",
      },
    },

    "@media (max-width: 450px)": {
      flexWrap: "wrap",
    },
  },
  ".bottom-box": {
    minHeight: "100px",
    display: "flex",
    justifyContent: "center",
    alignItems: "flex-end",
    gap: "1em",
  },
});