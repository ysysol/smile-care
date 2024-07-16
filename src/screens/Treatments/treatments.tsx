import {Box, Container} from "@mui/material";
import wpf_treatment_image from "../../assets/images/wpf-patient-treatment.png";
const Treatments = () => {
  return (
    <Box sx={{display: "flex"}}>
      <Container fixed>
        {/* <h1>Treatments</h1>
        <p>a long established fact that a reader will be</p> */}
        <Box>
          <img
            src={wpf_treatment_image}
            alt="nalysis"
            style={{width: "1500px", height: "auto"}}
          />
        </Box>
      </Container>
    </Box>
  );
};
export default Treatments;
