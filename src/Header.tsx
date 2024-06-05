import * as React from 'react';
import { NavLink } from 'react-router-dom'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import ListItemText from '@mui/material/ListItemText';
import { useScrollTrigger } from '@mui/material';
import InstagramIcon from '@mui/icons-material/Instagram';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import MailIcon from '@mui/icons-material/Mail';

interface Props {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window?: () => Window;
}

const drawerWidth = 240;

function DrawerAppBar(props: Props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }} >
      <NavLink style={{ color: "black", textDecoration: 'none' }} to="/">
      <Typography variant="h6" sx={{ my: 2 }} fontFamily={'"Zen Kurenaido"'} >
        KARAYAB2024
      </Typography>
      </NavLink>
      <Grid container direction="row" justifyContent="center" alignItems="flex-start">
      <Link href="https://www.instagram.com/karayab_2024">
        <InstagramIcon style={{color:"black"}} />
      </Link>
      <Typography style={{color: "white"}}>__</Typography>
      <Link href="mailto:karayab2024@gmail.com">
        <MailIcon style={{ color: "black" }} />
      </Link>
      </Grid>
      <Divider />
      <List>
          <ListItem disablePadding>
            <ListItemButton sx={{ textAlign: 'center' }} style={{color: "black", textAlign: 'center'}}>
            <NavLink style={{ color: "black", textDecoration: 'none' }} to="/">
              <ListItemText primary="Home" />
            </NavLink>
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton sx={{ textAlign: 'center' }} style={{color: 'black', textAlign: 'center'}}>
              <NavLink style={{ color: "black", textDecoration: 'none' }} to="/contact">
                <ListItemText primary="出演高校生" />
              </NavLink>
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton sx={{ textAlign: 'center' }} style={{color: 'black', textAlign: 'center'}}>
              <NavLink style={{ color: "black", textDecoration: 'none' }} to="/volunteer">
                <ListItemText primary="ボランティア" />
              </NavLink>
            </ListItemButton>
          </ListItem>
      </List>
    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  const trigger = useScrollTrigger();

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar position='fixed' component="nav" style={{color: "white" ,backgroundColor: "black"}} elevation={trigger ? 0 : 4} sx={{backgroundColor: trigger ? 'transparent' : '#fff',}}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <NavLink style={{ color: "white", textDecoration: 'none' }} to="/">
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: {sm: 'none' } }}
            fontFamily={'"Zen Kurenaido"'}
            color={"white"}
            className='text'
        >
            KARAYAB 2024
        </Typography>
        </NavLink>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
            fontFamily={'"Zen Kurenaido"'}
            color={"white"}
          >
          <NavLink style={{ color: 'white', textDecoration: 'none' }} to="/" className='text'>
            KARAYAB 2024
          </NavLink>
          </Typography>
          <Box sx={{ display: { xs: 'none', sm: 'block' } }} >
            <NavLink style={{ color: "white", textDecoration: 'none' }} to="/">
              <Button sx={{ color: "white" }}>
                Home
              </Button>
            </NavLink>
            <NavLink style={{ color: "white", textDecoration: 'none' }} to="/contact">
              <Button sx={{ color: "white" }}>
                出演高校生
              </Button>
            </NavLink>
            <NavLink style={{ color: "white", textDecoration: 'none' }} to="/volunteer">
              <Button sx={{ color: "white" }}>
                ボランティア
              </Button>
            </NavLink>
            <NavLink style={{ color: "white", textDecoration: 'none' }} to="/performer">
              <Button sx={{ color: "white" }}>
                参加者の方へ
              </Button>
            </NavLink>
            <Link href="https://www.instagram.com/karayab_2024">
              <Button sx={{color: "white"}}>
                <InstagramIcon style={{ color: "white" }} />
              </Button>
            </Link>
          </Box>
        </Toolbar>
      </AppBar>
      <nav>
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
      <Box component="main" sx={{ p: 3 }}>
        <Toolbar />
      </Box>
    </Box>
  );
}

export default DrawerAppBar