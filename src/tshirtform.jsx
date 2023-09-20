import React from "react";
import toast from "react-hot-toast";
import { Box, Paper, Typography } from "@mui/material";
import { styled } from "@mui/system";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import image from "../src/imagestshirt/concetto_full_logo.png";
import Form from "react-bootstrap/Form";
import Uu from "./size";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import one from "../src/imagestshirt/1.webp";
import two from "../src/imagestshirt/2.webp";
import three from "../src/imagestshirt/3.webp";
import four from "../src/imagestshirt/4.webp";
import five from "../src/imagestshirt/5.jpeg";
import six from "../src/imagestshirt/6.webp";
import seven from "../src/imagestshirt/7.webp";
import { useState } from "react";
import axios from "axios";
import "./style2.css";
const images = [
  { url: one },
  { url: two },
  { url: three },
  { url: four },
  { url: seven },
  { url: six },
  { url: five },
];

const FormContainer = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(2),
}));

const InputDefault = styled(TextField)({
  "& label.Mui-focused": {
    color: "#2F3C7E",
  },
  "& .MuiInput-underline:after": {
    borderBottomColor: "#8AAAE5", // Change this color
  },
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: "#317773", // Change this color
    },
    "&:hover fieldset": {
      borderColor: "#E2D1F9", // Change this color
    },
    "&.Mui-focused fieldset": {
      borderColor: "#ADD8E6", // Change this color
    },
  },
  "& input": {
    color: "#FFFFFF", // Change the text color
  },
  "& .MuiFormLabel-root": {
    color: "#FFFFFF", // Change the label text color
  },
  "& .MuiInputLabel-root.Mui-focused": {
    color: "#FFFFFF", // Change the focused label text color
  },
  "& .MuiInputBase-input::placeholder": {
    color: "#FFFFFF", // Change the placeholder color
  },
});

const flexContainerStyle = {
  display: "flex",

  justifyContent: "center",
  flexWrap: "wrap", // Allow content to wrap to th next line
};

const responsiveColumn = {
  flexBasis: "100%", // Make each item take full width in a column
  padding: "5px", // Adjust spacing as needed
};
export default function App() {
  const [name, setName] = useState("");
  const [admNo, setAdmNo] = useState("");
  const [email, setEmail] = useState("");
  const [mobNo, setMobNo] = useState("");
  const [branch, setBranch] = useState("");
  const [hostel, setHostel] = useState("");
  const [transId, setTransId] = useState("");
  const [room, setRoom] = useState("");
  const [size, setSize] = useState("");
  const [url, setUrl] = useState("");
  const server = process.env.REACT_APP_DB_URL || "http://localhost:8000";
  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();

      const response = {
        orderID: transId,
        name: name,
        admissionNumber: admNo,
        mobileNumber: mobNo,
        branch: branch,
        tshirtSize: size,
        transactionID: transId,
        hostel: hostel,
        roomNumber: room,
        image: url,
      };

      for (let prop in response) {
        formData.append(prop, response[prop]);
      }

      // console.log(response);
      await axios.post(`${server}/api/purchase`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      // resetting values
      setName("");
      setAdmNo("");
      setEmail("");
      setMobNo("");
      setBranch("");
      setHostel("");
      setTransId("");
      setRoom("");
      setSize("");
      setUrl("");
      toast.success("Order successful !");
    } catch (error) {
      toast.error("Something went wrong ! Try contacting the admins");
      console.log("error", error);
    }
  };
  const handleImageChange = (event) => {
    setUrl(event.target.files[0]);
  };

  return (
    <div id="canvas_container2">
      <div className="m-3" id="canvas_box2">
        <img src={image} className="my-1" height={70} alt="404" />
        <div style={flexContainerStyle}>
          <Box className="tshirt-carousel">
            <Carousel
              showThumbs={false}
              showStatus={false}
              showIndicators={false}
            >
              {images.map((el, idx) => (
                <Box key={idx} className="tshirt-carousel-img">
                  <img src={el.url} alt="tshirt" style={{objectFit: "contain", objectPosition: "bottom"}} />
                </Box>
              ))}
            </Carousel>
          </Box>
          <div className="text-light">
            <Typography variant="h5" className="mb-3 padd" align="center">
              Enter Your Information
            </Typography>
            <Form className="m-3" onSubmit={submitHandler}>
              <div style={responsiveColumn}>
                <InputDefault
                  label="Name"
                  fullWidth
                  required
                  value={name}
                  onChange={(e) => {
                    setName(e.target.value);
                  }}
                />
              </div>
              <div style={responsiveColumn}>
                <InputDefault
                  label="Admission Number"
                  fullWidth
                  required
                  value={admNo}
                  onChange={(e) => {
                    setAdmNo(e.target.value);
                  }}
                />
              </div>
              <div style={responsiveColumn}>
                <InputDefault
                  label="Email"
                  fullWidth
                  required
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                />
              </div>
              <div style={responsiveColumn}>
                <InputDefault
                  label="Phone Number"
                  fullWidth
                  required
                  value={mobNo}
                  onChange={(e) => {
                    setMobNo(e.target.value);
                  }}
                />
              </div>
              <div style={responsiveColumn}>
                <InputDefault
                  label="Branch"
                  fullWidth
                  required
                  value={branch}
                  onChange={(e) => {
                    setBranch(e.target.value);
                  }}
                />
              </div>
              <div style={responsiveColumn} className="hostel">
                <InputDefault
                  label="Hostel"
                  className="w-50"
                  required
                  value={hostel}
                  onChange={(e) => {
                    setHostel(e.target.value);
                  }}
                />

                <InputDefault
                  label="Room No"
                  className="w-49"
                  required
                  value={room}
                  onChange={(e) => {
                    setRoom(e.target.value);
                  }}
                />
              </div>
              <div style={responsiveColumn}>
                <InputDefault
                  label="Transaction id"
                  fullWidth
                  required
                  value={transId}
                  onChange={(e) => {
                    setTransId(e.target.value);
                  }}
                />
              </div>
              {/* <span>Size</span> */}
              {/* <br/> */}
              <Uu size={size} setSize={setSize} />
              <Box>
                <label htmlFor="upload-photo">
                  <input
                    style={{ display: "none" }}
                    id="upload-photo"
                    name="upload-photo"
                    type="file"
                    onChange={handleImageChange}
                    required
                    accept="image/*"
                  />
                  <Button className="m-3" variant="contained" component="span">
                    Upload Screenshot
                  </Button>
                </label>
                <Button
                  type="submit"
                  className="m-3"
                  variant="contained"
                  sx={{ transform: "none", left: "0" }}
                >
                  Place order
                </Button>
              </Box>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
}
