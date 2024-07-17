import {useState} from "react";
import {
  CssBaseline,
  Container,
  Avatar,
  Typography,
  Tabs,
  Tab,
  Box,
  Paper,
  Button,
} from "@mui/material";
import {createTheme, ThemeProvider} from "@mui/material/styles";
import {styled} from "@mui/system";

import LabIcon from "../../assets/images/dental-teeth/dentist-tools.png";
import ImplantIcon from "../../assets/images/dental-teeth/dental-implant.png";
import ToothCareIcon from "../../assets/images/dental-teeth/tooth-care.png";
import PatientCareIcon from "../../assets/images/dental-teeth/patient.png";
import TeethCareIcon from "../../assets/images/dental-teeth/tooth.png";

// Importing images
import tooth1 from "../../assets/images/teeth-Images/Teeth-1.png";
import tooth2 from "../../assets/images/teeth-Images/Teeth-2.png";
import tooth3 from "../../assets/images/teeth-Images/Teeth-3.png";
import tooth4 from "../../assets/images/teeth-Images/Teeth-4.png";
import tooth5 from "../../assets/images/teeth-Images/Teeth-5.png";
import tooth6 from "../../assets/images/teeth-Images/Teeth-6.png";
import tooth7 from "../../assets/images/teeth-Images/Teeth-7.png";
import tooth8 from "../../assets/images/teeth-Images/Teeth-8.png";
import tooth9 from "../../assets/images/teeth-Images/Teeth-9.png";
import tooth10 from "../../assets/images/teeth-Images/Teeth-10.png";
import tooth11 from "../../assets/images/teeth-Images/Teeth-11.png";
import tooth12 from "../../assets/images/teeth-Images/Teeth-12.png";
import tooth13 from "../../assets/images/teeth-Images/Teeth-13.png";
import tooth14 from "../../assets/images/teeth-Images/Teeth-14.png";
import tooth15 from "../../assets/images/teeth-Images/Teeth-15.png";
import tooth16 from "../../assets/images/teeth-Images/Teeth-16.png";

import tooth17 from "../../assets/images/teeth-Images/Teeth-17.png";
import tooth18 from "../../assets/images/teeth-Images/Teeth-18.png";
import tooth19 from "../../assets/images/teeth-Images/Teeth-19.png";
import tooth20 from "../../assets/images/teeth-Images/Teeth-20.png";
import tooth21 from "../../assets/images/teeth-Images/Teeth-21.png";
import tooth22 from "../../assets/images/teeth-Images/Teeth-22.png";
import tooth23 from "../../assets/images/teeth-Images/Teeth-23.png";
import tooth24 from "../../assets/images/teeth-Images/Teeth-24.png";
import tooth25 from "../../assets/images/teeth-Images/Teeth-25.png";
import tooth26 from "../../assets/images/teeth-Images/Teeth-26.png";
import tooth27 from "../../assets/images/teeth-Images/Teeth-27.png";
import tooth28 from "../../assets/images/teeth-Images/Teeth-28.png";
import tooth29 from "../../assets/images/teeth-Images/Teeth-29.png";
import tooth30 from "../../assets/images/teeth-Images/Teeth-30.png";
import tooth31 from "../../assets/images/teeth-Images/Teeth-31.png";
import tooth32 from "../../assets/images/teeth-Images/Teeth-32.png";
import ToothImages from "../../data/ToothUpperImagesData";
// Importing images
import avatarImage from "../../assets/images/avatars/2017-06-24_133243.png"; // Make sure this path is correct

import "../TeethChart/teethChart.css";
const theme = createTheme();

const HeaderAvatar = styled(Box)({
  display: "flex",
  alignItems: "center",
  width: "120%",
  backgroundColor: "#fff",
  // borderBottom: "1px solid #ddd",
  borderRadius: "18px", // Added for rounded corners
  marginBottom: theme.spacing(2), // Adjusts spacing below the header
  boxShadow: "0 0px 28px rgba(0,0,0,0.05)",
  paddingTop: '10px',
  paddingBottom: '10px'
});

const ProfileInfo = styled(Box)({
  marginLeft: theme.spacing(1),
});

const Navigation = styled(Box)({
  marginTop: theme.spacing(2),
  marginLeft: theme.spacing(14),
  borderBottom: "0px solid #ddd",
  fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif', // Add the font family here
});

// MainContent styled component
const MainContent = styled(Paper)({
  borderTop: 0,
  borderRadius: "20px",
  padding: theme.spacing(2),
  backgroundColor: "#EEEDF4",
  boxShadow: "0 0px 28px rgba(0,0,0,0.05)",
  overflow: "hidden",
  display: "flex",
  flexDirection: "column",
  width: "120%", // Increase the width
  height: "590px",
  margin: "0 auto", // Center align within the parent container
});

// DentalChart styled component
const DentalChart = styled(Box)({
  display: "grid",
  gridTemplateColumns: "repeat(16, minmax(40px, 1fr))",
  gap: theme.spacing(2),
  justifyContent: "center",
  width: "100%",
  minHeight: "400px",
  padding: theme.spacing(2),
});

const teethBottonsChart = {
  margin: theme.spacing(1),
  marginRight: "10px",
  backgroundColor: "white",
  color: "#828385", // Set the text color to black for contrast
  borderRadius: "20px", // Add border radius,
  fontSize: "12px",
  boxShadow: 0,
  "&:hover": {
    backgroundColor: "#FAF8F3", // Optional: change the hover color
  },
  textTransform: "capitalize",
  // Additional styles if needed
};
const Tooth = styled("img")({
  width: "100%",
  cursor: "pointer",
});

const TeethChart = () => {
  const handleClick = (toothNumber: number) => {
    console.log(`Tooth ${toothNumber} clicked`);
    alert(`Tooth ${toothNumber} clicked`);
  };

  const handleTabItemClick = (
    event: React.SyntheticEvent,
    newValue: number,
  ) => {
    setValue(newValue);
  };
  const [value, setValue] = useState(0);
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container>
        <HeaderAvatar>
          <Avatar
            alt="Julia Smith"
            style={{width: "10%", height: "10%", marginRight: "10px"}}
            src={avatarImage}
          />
          <ProfileInfo>
            <Typography variant="body2">P456#L272</Typography>
            <Typography variant="h6" style={{}}>
              <span
                style={{fontSize: "30px", fontWeight: "Bold", color: "#000"}}>
                Julia
              </span>{" "}
              <span
                style={{fontSize: "30px", fontWeight: "light", color: "gray"}}>
                Smith
              </span>
            </Typography>
            <Typography variant="body2">Active, 01.10.2020</Typography>
          </ProfileInfo>
        </HeaderAvatar>
        <Navigation>
          <Tabs
            value={value}
            sx={{borderBottom: 0}}
            onChange={handleTabItemClick}
            scrollButtons="auto"
            indicatorColor="primary"
            textColor="primary">
            <Tab
              label="General"
              icon={
                <img src={LabIcon} alt="Lab Icon" style={{height: "28px"}} />
              }
              sx={{textTransform: "capitalize"}}
            />
            <Tab
              label="Charts"
              icon={
                <img
                  src={ImplantIcon}
                  alt="Lab Icon"
                  style={{height: "28px"}}
                />
              }
              sx={{textTransform: "capitalize"}}
            />
            <Tab
              label="eClaims"
              icon={
                <img
                  src={ToothCareIcon}
                  alt="Lab Icon"
                  style={{height: "30px"}}
                />
              }
              sx={{textTransform: "capitalize"}}
            />
            <Tab
              label="Ledger"
              icon={
                <img
                  src={PatientCareIcon}
                  alt="Lab Icon"
                  style={{height: "30px"}}
                />
              }
              sx={{textTransform: "capitalize"}}
            />
            <Tab
              label="Implant exam"
              icon={
                <img
                  src={TeethCareIcon}
                  alt="Lab Icon"
                  style={{height: "30px"}}
                />
              }
              sx={{textTransform: "capitalize"}}
            />
            <Tab
              label="Smile"
              icon={
                <img
                  src={ToothCareIcon}
                  alt="Lab Icon"
                  style={{height: "30px"}}
                />
              }
              sx={{textTransform: "capitalize"}}
            />
            <Tab
              label="Checklists"
              icon={
                <img
                  src={ToothCareIcon}
                  alt="Lab Icon"
                  style={{height: "30px"}}
                />
              }
              sx={{textTransform: "capitalize"}}
            />
            <Tab
              label="Lab"
              icon={
                <img
                  src={ToothCareIcon}
                  alt="Lab Icon"
                  style={{height: "30px"}}
                />
              }
              sx={{textTransform: "capitalize"}}
            />
          </Tabs>
        </Navigation>

        <MainContent>
          <Box
            display="flex"
            textTransform="capitalize"
            justifyContent="space-between"
            marginBottom={1}>
            {/* <Typography>Charts</Typography> */}
            <Box sx={{marginLeft: theme.spacing(12)}}>
              <Button variant="contained" sx={teethBottonsChart}>
                Quick Select
              </Button>
              <Button variant="contained" sx={teethBottonsChart}>
                Quick Select
              </Button>
              <Button variant="contained" sx={teethBottonsChart}>
                Periodontal Probing
              </Button>
            </Box>
            <Box>
              <Button variant="contained" sx={teethBottonsChart}>
                Dental
              </Button>
              <Button variant="contained" sx={teethBottonsChart}>
                Prio
              </Button>
              <Button variant="contained" sx={teethBottonsChart}>
                Endo
              </Button>
              <Button variant="contained" sx={teethBottonsChart}>
                All
              </Button>
            </Box>
          </Box>
          <Box
            style={{
              padding: theme.spacing(4),
              backgroundColor: "#fff",
              borderRadius: "26px",
              marginBottom: theme.spacing(10),
              marginLeft: theme.spacing(12),
              marginRight: theme.spacing(12),
              boxShadow:
                "0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22)",
            }}>
            <DentalChart>
              <Tooth
                src={tooth1}
                style={{cursor: "pointer", width: "52px", height: "121px"}}
                alt="Tooth 1"
                onClick={() => handleClick(1)}
              />
              <Tooth
                src={tooth2}
                style={{cursor: "pointer", width: "52px", height: "121px"}}
                alt="Tooth 2"
                onClick={() => handleClick(2)}
              />
              <Tooth
                src={tooth3}
                style={{cursor: "pointer", width: "52px", height: "121px"}}
                alt="Tooth 3"
                onClick={() => handleClick(3)}
              />

              <Tooth
                src={tooth4}
                style={{cursor: "pointer", width: "39px", height: "121px"}}
                alt="Tooth 4"
                onClick={() => handleClick(4)}
              />
              <Tooth
                src={tooth5}
                style={{cursor: "pointer", width: "39px", height: "121px"}}
                alt="Tooth 5"
                onClick={() => handleClick(5)}
              />
              <Tooth
                src={tooth6}
                style={{cursor: "pointer", width: "39px", height: "121px"}}
                alt="Tooth 6"
                onClick={() => handleClick(6)}
              />
              <Tooth
                src={tooth7}
                style={{cursor: "pointer", width: "39px", height: "121px"}}
                alt="Tooth 7"
                onClick={() => handleClick(7)}
              />
              <Tooth
                src={tooth8}
                style={{cursor: "pointer", width: "39px", height: "121px"}}
                alt="Tooth 8"
                onClick={() => handleClick(8)}
              />
              <Tooth
                src={tooth9}
                style={{cursor: "pointer", width: "39px", height: "121px"}}
                alt="Tooth 9"
                onClick={() => handleClick(9)}
              />
              <Tooth
                src={tooth10}
                style={{cursor: "pointer", width: "39px", height: "121px"}}
                alt="Tooth 10"
                onClick={() => handleClick(10)}
              />
              <Tooth
                src={tooth11}
                style={{cursor: "pointer", width: "39px", height: "121px"}}
                alt="Tooth 11"
                onClick={() => handleClick(11)}
              />
              <Tooth
                src={tooth12}
                style={{cursor: "pointer", width: "39px", height: "121px"}}
                alt="Tooth 12"
                onClick={() => handleClick(12)}
              />
              <Tooth
                src={tooth13}
                style={{cursor: "pointer", width: "39px", height: "121px"}}
                alt="Tooth 13"
                onClick={() => handleClick(13)}
              />
              <Tooth
                src={tooth14}
                style={{cursor: "pointer", width: "52px", height: "121px"}}
                alt="Tooth 14"
                onClick={() => handleClick(14)}
              />
              <Tooth
                src={tooth15}
                style={{cursor: "pointer", width: "52px", height: "121px"}}
                alt="Tooth 15"
                onClick={() => handleClick(15)}
              />
              <Tooth
                src={tooth16}
                style={{cursor: "pointer", width: "52px", height: "121px"}}
                alt="Tooth 16"
                onClick={() => handleClick(16)}
              />

              <Tooth
                src={tooth17}
                style={{cursor: "pointer", width: "52px", height: "121px"}}
                alt="Tooth 17"
                onClick={() => handleClick(17)}
              />
              <Tooth
                src={tooth18}
                style={{cursor: "pointer", width: "52px", height: "121px"}}
                alt="Tooth 18"
                onClick={() => handleClick(18)}
              />
              <Tooth
                src={tooth19}
                style={{cursor: "pointer", width: "52px", height: "121px"}}
                alt="Tooth 19"
                onClick={() => handleClick(19)}
              />
              <Tooth
                src={tooth20}
                style={{cursor: "pointer", width: "39px", height: "121px"}}
                alt="Tooth 20"
                onClick={() => handleClick(20)}
              />
              <Tooth
                src={tooth21}
                style={{cursor: "pointer", width: "39px", height: "121px"}}
                alt="Tooth 21"
                onClick={() => handleClick(21)}
              />
              <Tooth
                src={tooth22}
                style={{cursor: "pointer", width: "39px", height: "121px"}}
                alt="Tooth 22"
                onClick={() => handleClick(22)}
              />
              <Tooth
                src={tooth23}
                style={{cursor: "pointer", width: "39px", height: "121px"}}
                alt="Tooth 23"
                onClick={() => handleClick(23)}
              />
              <Tooth
                src={tooth24}
                style={{cursor: "pointer", width: "39px", height: "121px"}}
                alt="Tooth 24"
                onClick={() => handleClick(24)}
              />
              <Tooth
                src={tooth25}
                style={{cursor: "pointer", width: "39px", height: "121px"}}
                alt="Tooth 25"
                onClick={() => handleClick(25)}
              />
              <Tooth
                src={tooth26}
                style={{cursor: "pointer", width: "39px", height: "121px"}}
                alt="Tooth 26"
                onClick={() => handleClick(26)}
              />
              <Tooth
                src={tooth27}
                style={{cursor: "pointer", width: "39px", height: "121px"}}
                alt="Tooth 27"
                onClick={() => handleClick(27)}
              />
              <Tooth
                src={tooth28}
                style={{cursor: "pointer", width: "39px", height: "121px"}}
                alt="Tooth 28"
                onClick={() => handleClick(28)}
              />
              <Tooth
                src={tooth29}
                style={{cursor: "pointer", width: "39px", height: "121px"}}
                alt="Tooth 29"
                onClick={() => handleClick(29)}
              />
              <Tooth
                src={tooth30}
                style={{cursor: "pointer", width: "52px", height: "121px"}}
                alt="Tooth 30"
                onClick={() => handleClick(30)}
              />
              <Tooth
                src={tooth31}
                style={{cursor: "pointer", width: "52px", height: "121px"}}
                alt="Tooth 31"
                onClick={() => handleClick(31)}
              />
              <Tooth
                src={tooth32}
                style={{cursor: "pointer", width: "52px", height: "121px"}}
                alt="Tooth 32"
                onClick={() => handleClick(32)}
              />
            </DentalChart>
          </Box>
        </MainContent>
      </Container>
    </ThemeProvider>
  );
};

export default TeethChart;
