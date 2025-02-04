// const Header = () => {
//     return (
//       <header className="bg-green-700 text-white p-4">
//         <div className="container mx-auto flex justify-between items-center">
//           <h1 className="text-2xl font-bold">E-Waste Connect</h1>
//           <nav>
//             <a href="/" className="mx-2"> Home  </a>
//             <a href="/login" className="mx-2">  Login </a>
//             <a href="/register" className="mx-2"> Register  </a>
//           </nav>
//         </div>
//       </header>
//     );
//   };
  
//   export default Header;


// src/components/Header.jsx

import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';

export default function Header({ onToggleSidebar }) {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          {/* Menu Button to open Sidebar */}
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={onToggleSidebar} // Toggle sidebar when clicked
          >
            <MenuIcon />
          </IconButton>

          <Typography variant="h6" component="div" id="back-to-top-anchor" sx={{ flexGrow: 1 }}>
            E-Waste Connect
          </Typography>

          {/* Navigation buttons with React Router Link */}
          <Button color="inherit">
            <Link to="/" style={{ color: 'inherit', textDecoration: 'none' }}>
              Home
            </Link>
          </Button>
          <Button color="inherit">
            <Link to="/login" style={{ color: 'inherit', textDecoration: 'none' }}>
              Login
            </Link>
          </Button>
          <Button color="inherit">
            <Link to="/register" style={{ color: 'inherit', textDecoration: 'none' }}>
              Register
            </Link>
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
