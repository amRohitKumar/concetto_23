import { Box, Link, Container, Typography } from "@mui/material";
import { Link as RRLink } from "react-router-dom";
// import iitism2 from "../../assets/iitism.png";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import YouTubeIcon from "@mui/icons-material/YouTube";
// import NVCTILogo from "../logo/logo";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import PhoneInTalkIcon from "@mui/icons-material/PhoneInTalk";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { Wrapper } from "./Styles";
import { Email, Phone } from "@mui/icons-material";

const socialNetworks = [
  {
    socialHandle: "facebook",
    link: "https://www.facebook.com/nvcti/",
    icon: <FacebookIcon sx={{ fontSize: "2em" }} />,
    iconColor: "#3b5998",
  },
  {
    socialHandle: "linkeldn",
    link: "https://www.linkedin.com/company/nvcti-iitism/",
    icon: <LinkedInIcon sx={{ fontSize: "2em" }} />,
    iconColor: "#0e76a8",
  },
  {
    socialHandle: "instagram",
    link: "https://www.instagram.com/nvcti.iitism/",
    icon: <InstagramIcon sx={{ fontSize: "2em" }} />,
    iconColor: "#cc2467",
  },
  {
    socialHandle: "twitter",
    link: "https://twitter.com/nvcti1",
    icon: <TwitterIcon sx={{ fontSize: "2em" }} />,
    iconColor: "#1da1f2",
  },
  {
    socialHandle: "youtube",
    link: "https://www.youtube.com/channel/UC4Uw9mJgYrssRq6vC7fO3fA",
    icon: <YouTubeIcon sx={{ fontSize: "2em" }} />,
    iconColor: "#ff0000",
  },
];

export default function Footer() {
  return (
    <Wrapper>
      <Box className="top-box">
        <Container>
          <Typography variant="h6" className="row-title">
            Quick Contact
          </Typography>
          <Typography variant="body2" sx={{ mb: 2 }}>
            If you have any questions or need help, feel free to contact with
            our team.
          </Typography>
          <Box sx={{ fontSize: "1.25em", color: "#fa9119", mb: 2, mx: "auto" }}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                gap: "1rem",
              }}
            >
              <Email sx={{ fontSize: "1.25em" }} /> example@gmail.com
            </Box>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                gap: "1rem",
                // mx: "auto"
              }}
            >
              <Phone sx={{ fontSize: "1.25em" }} /> 1234567890
            </Box>
          </Box>
          <Typography variant="body2">
            2307 Beverley Rd Brooklyn, New York 11226 United States.
          </Typography>
        </Container>
        <Container sx={{ mx: 0 }}>
          <Typography variant="h6" className="row-title">
            About Us
          </Typography>
          <ul>
            <li>
              <Typography variant="body2" component={RRLink}>
                Leadership Team
              </Typography>
            </li>
            <li>
              <Typography variant="body2" component={RRLink}>
                About Us
              </Typography>
            </li>
            <li>
              <Typography variant="body2" component={RRLink}>
                News & Media
              </Typography>
            </li>
            <li>
              <Typography variant="body2" component={RRLink}>
                Sustainability
              </Typography>
            </li>
            <li>
              <Typography variant="body2" component={RRLink}>
                Careers
              </Typography>
            </li>
          </ul>
        </Container>
        <Container>
          <Typography variant="h6" className="row-title">
            About Us
          </Typography>
          <ul>
            <li>
              <Typography variant="body2" component={RRLink}>
                Leadership Team
              </Typography>
            </li>
            <li>
              <Typography variant="body2" component={RRLink}>
                About Us
              </Typography>
            </li>
            <li>
              <Typography variant="body2" component={RRLink}>
                News & Media
              </Typography>
            </li>
            <li>
              <Typography variant="body2" component={RRLink}>
                Sustainability
              </Typography>
            </li>
            <li>
              <Typography variant="body2" component={RRLink}>
                Careers
              </Typography>
            </li>
          </ul>
        </Container>
        <Container>
          <Typography variant="h6" className="row-title">
            Links
          </Typography>
          <ul>
            <li>
              <Typography variant="body2" component={RRLink}>
                Leadership Team
              </Typography>
            </li>
            <li>
              <Typography variant="body2" component={RRLink}>
                About Us
              </Typography>
            </li>
            <li>
              <Typography variant="body2" component={RRLink}>
                News & Media
              </Typography>
            </li>
            <li>
              <Typography variant="body2" component={RRLink}>
                Sustainability
              </Typography>
            </li>
            <li>
              <Typography variant="body2" component={RRLink}>
                Careers
              </Typography>
            </li>
          </ul>
        </Container>
      </Box>
      <Box className="bottom-box">
        {socialNetworks.map(({ socialHandle, link, icon, iconColor }) => (
          <Link
            key={socialHandle}
            href={link}
            target="_blank"
            style={{
              color: "#fff",
              "&:hover": { color: `${iconColor} !important` },
              mx: "0.25rem",
            }}
          >
            {icon}
          </Link>
        ))}
      </Box>
    </Wrapper>
  );
}
