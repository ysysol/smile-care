import { Box, Container } from "@mui/material";
import wpf_profile_image from '../../assets/images/WPF-Patient-Profile.png'

const Notifications = () => {
  return (
    <Box sx={{ display: "flex" }}>
      <Container fixed>


        <Box>
        <img src={wpf_profile_image} alt="nalysis" style={{ width:'1500px', height: 'auto' }} />
        </Box>

      </Container>
    </Box>
  );
};
export default Notifications;
