import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import InstagramIcon from '@mui/icons-material/Instagram';
import GitHubIcon from '@mui/icons-material/GitHub';
import Grid from '@mui/material/Grid';
import MailIcon from '@mui/icons-material/Mail';
import './Footer.css'

function Copyright() {
  return (
    <Typography variant="body2" color="white" align="center" className="ftTypography">
      {'© '}
      <Link color="inherit" href="https://karayab2024.web.app/">
        KARAYAB2024
      </Link>
      {' '}舞鶴高校生リーダーズサミット{' '}
      {new Date().getFullYear()}
    </Typography>
  );
}

interface FooterProps {
  description: string;
  title: string;
}

const footerInfo : FooterProps = {description: "みんなの好きが集まる場所", title: "KARAYAB 2024"};

export default function Footer() {
  return (
    <Box component="footer" sx={{ bgcolor: 'black', py: 3 }}>
      <Container maxWidth="lg">
        <Typography variant="h5" align="center" gutterBottom color="white" className="ftTitle">
          {footerInfo.title}
        </Typography>
        <Grid container direction="row" justifyContent="center" alignItems="center">
            <Link href="https://www.instagram.com/karayab_2024">
                <InstagramIcon style={{ color: "white" }}  />
            </Link>
            <Typography>__</Typography>
            <Link href="https://github.com/s-hirata0831/karayab2024">
                <GitHubIcon style={{ color: "white" }} />
            </Link>
            <Typography>__</Typography>
            <Link href="mailto:karayab2024@gmail.com">
                <MailIcon style={{ color: "white" }} />
            </Link>
        </Grid>
        <Typography
          variant="subtitle1"
          align="center"
          color="white"
          component="p"
          className="ftTypography"
        >
          {footerInfo.description}
        </Typography>
        <Copyright />
      </Container>
    </Box>
  );
}