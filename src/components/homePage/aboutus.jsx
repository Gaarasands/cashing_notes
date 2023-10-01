import { Container, Typography } from '@mui/material';

const AboutUs = () => (
  <Container maxWidth="md" sx={{ marginTop: 4, marginBottom: 4 }}>
    <Typography  gutterBottom>
      About Us
    </Typography>
    <Typography >
      We are a fast-growing company committed to providing the best products for our customers. 
      We believe in quality, value, and service.
    </Typography>
  </Container>
);
export default AboutUs;