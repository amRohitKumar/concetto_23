import styled from "@emotion/styled";
import { Box } from "@mui/material";

const Wrapper = styled(Box)({
    ".navbar": {
        "width": "auto",
        "height": "65px",
        "position": "absolute",
        "top": "0",
        "left": "0",
        "right": "0",
        "justifyContent": "center",
        "alignSelf": "center",
        "borderRadius": "25px",
        "zIndex": "9999",
        "backgroundColor": "#141313c2",
        "boxShadow": "0 0 10px rgba(220, 220, 220, 0.716)!important",
        "transition": "all 0.3s ease",
        "color": "#000",
        "margin": "1.5rem"
    },
    "@media only screen and (max-width: 600px)": {
        ".navbar": {
            "height": "50px",
            "lineHeight": "50px",
            "backgroundColor": "#000",
            "margin": "1.5rem",
        },
        ".toolbar": {
            "flexDirection": "row-reverse",
        }
    },
    ".nav": {
        "display": "flex",
        "justifyContent": "space-between",
        "alignItems": "center",
        "width": "100%",
        "margin": "0 auto",
        "padding": "0 1rem",
        "color": "#fff",
    },
    ".nav-header": {
        "display": "flex",
        "justifyContent": "space-between",
        "alignItems": "center",
        "width": "100%",
        "margin": "0 auto",
        "padding": "0 1rem",
        "color": "#fff",
    },
    ".nav-links": {
        "display": "flex",
        "justifyItems": "center",
        "margin": "0 1rem",
        "alignItems": "center",
        "color": "#fff",
    },
    ".nav-link": {
        "margin": "0 1rem",
        "justifyContent": "center",
        "textTransform": "uppercase",
        "color": "white",
    },
    ".white": {
        color: "white",
    },
    ".logo": {
        "width": "35px",
        "height": "35px",
        "margin": "0 1rem",
        "justifyContent": "center",
        "alignItems": "center",
        "color": "#fff",
    },
    ".d-center": {
        "display": "flex",
        "justifyContent": "center",
        "alignItems": "center",
    },
    ".w-full": {
        "width": "100%",
    },
    ".glassBg": {
        "border": "1px solid red !important",
        "borderRadius": "25px",
        "zIndex": "9999",
        "backgroundColor": "#141313c2 !important",
        "boxShadow": "0 0 10px rgba(220, 220, 220, 0.716)!important",
        "transition": "all 0.3s ease",
        "color": "#000",
    }
})

export default Wrapper;