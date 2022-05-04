// import React from 'react';
// import { Link } from 'react-router-dom';
// import './styles.css';

// import Auth from '../../utils/auth';

// const Header = () => {
//   const logout = (event) => {
//     event.preventDefault();
//     Auth.logout();
//   };
//   return (
//     <>
//       <nav className="navbar navbar-expand-custom navbar-mainbg">
//         <button className="navbar-toggler" type="button" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
//           <i className="fas fa-bars text-white"></i>
//         </button>
//         <div className="collapse navbar-collapse" id="navbarSupportedContent">
//           <ul className="navbar-nav ml-auto">
//             <div className="hori-selector"><div className="left"></div><div className="right"></div></div>
//             <li className="nav-item">
//               <Link to="/">
//                 <a className="nav-link"><i className="fas fa-tachometer-alt"></i>Home</a>
//               </Link>
//             </li>
//             <li className="nav-item">
//               <Link to="/me">
//                 <a className="nav-link"><i className="fas fa-tachometer-alt"></i>Profile</a>
//               </Link>
//             </li>
//           </ul>
//           {
//             Auth.loggedIn() ? (
//               <button className="navBtn" onClick={logout}>
//                 Logout
//               </button>
//             ) : (
//               <>
//                 <Link className="navBtn" to="/login">
//                   Login
//                 </Link>
//                 <Link className="navBtn" to="/signup">
//                   Signup
//                 </Link>
//               </>
//             )
//           }

//         </div>
//       </nav>
//     </>
//   );
// };

// export default Header;






import React from 'react';
import { Link } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import Auth from '../../utils/auth';
const pages = [{
  name: 'Home',
  link: '/'
},
{
  name: 'profile',
  link: '/me'
}, {
  name: 'Blog',
  link: '/blog'
}];

const settings = [{
  name: 'profile',
  link: '/me'
}];

const Header = () => {

  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  };
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}
          >
            Go OutSide
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' }
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page.name} onClick={handleCloseNavMenu}>
                  <Link to={page.link}> <Typography textAlign="center">{page.name}</Typography></Link>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}
          >
            Go OutSide
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Button
                key={page.name}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                {page.name}
              </Button>
            ))}
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting.name} onClick={handleCloseUserMenu}>
                  <Link to={setting.link}><Typography textAlign="center">{setting.name}</Typography></Link>
                </MenuItem>
              ))}
              {Auth.loggedIn() ? (
                <button className="navBtn" onClick={logout}>
                  Logout
                </button>
              ) : (
                <>
                  <Link className="navBtn" to="/login">
                    Login
                  </Link>
                  <Link className="navBtn" to="/signup">
                    Signup
                  </Link>
                </>
              )}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default Header;
