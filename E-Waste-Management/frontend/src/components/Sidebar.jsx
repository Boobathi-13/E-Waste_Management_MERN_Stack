// const Sidebar = () => {
//     return (
//       <aside className="w-64 bg-gray-200 h-screen p-4">
//         <ul>
//           <li><a href="/dashboard">Dashboard</a></li>
//           <li><a href="/add-ewaste">Add E-Waste</a></li>
//           <li><a href="/tracking">Tracking</a></li>
//           <li><a href="/profile">Profile</a></li>
//         </ul>
//       </aside>
//     );
//   };
  
//   export default Sidebar;
// src/components/Sidebar.jsx



// import * as React from 'react';
// import Box from '@mui/material/Box';
// import Drawer from '@mui/material/Drawer';
// import List from '@mui/material/List';
// import ListItem from '@mui/material/ListItem';
// import ListItemText from '@mui/material/ListItemText';
// import { Link } from 'react-router-dom';

// const Sidebar = ({ open, onClose }) => {
//   return (
//     <Drawer anchor="left" open={open} onClose={onClose}>
//       <Box sx={{ width: 250 }} role="presentation">
//         <List>
//           <ListItem button component={Link} to="/dashboard">
//             <ListItemText primary="Dashboard" />
//           </ListItem>
//           <ListItem button component={Link} to="/add-ewaste">
//             <ListItemText primary="Add E-Waste" />
//           </ListItem>
//           <ListItem button component={Link} to="/tracking">
//             <ListItemText primary="Tracking" />
//           </ListItem>
//           <ListItem button component={Link} to="/profile">
//             <ListItemText primary="Profile" />
//           </ListItem>
//         </List>
//       </Box>
//     </Drawer>
//   );
// };

// export default Sidebar;


import * as React from 'react';
import { Link } from 'react-router-dom';
import { Box, List, ListItem, ListItemText, Divider } from '@mui/material';
import DashboardIcon from '@mui/icons-material/Dashboard';
import AddBoxIcon from '@mui/icons-material/AddBox';
import TrackChangesIcon from '@mui/icons-material/TrackChanges';
import PersonIcon from '@mui/icons-material/Person';

const Sidebar = () => {
  return (
    <Box
      sx={{
        width: 250,
        backgroundColor: '#f4f4f4',
        height: '100vh',
        paddingTop: '20px',
      }}
    >
      <List>
        {/* Dashboard Link */}
        <ListItem button component={Link} to="/dashboard">
          <DashboardIcon />
          <ListItemText primary="Dashboard" />
        </ListItem>

        <Divider />

        {/* Add E-Waste Link */}
        <ListItem button component={Link} to="/add-ewaste">
          <AddBoxIcon />
          <ListItemText primary="Add E-Waste" />
        </ListItem>

        <Divider />

        {/* Tracking Link */}
        <ListItem button component={Link} to="/tracking">
          <TrackChangesIcon />
          <ListItemText primary="Tracking" />
        </ListItem>

        <Divider />

        {/* Profile Link */}
        <ListItem button component={Link} to="/profile">
          <PersonIcon />
          <ListItemText primary="Profile" />
        </ListItem>

        <Divider />
      </List>
    </Box>
  );
};

export default Sidebar;

