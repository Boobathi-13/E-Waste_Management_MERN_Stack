import * as React from 'react';
import PropTypes from 'prop-types';
import CssBaseline from '@mui/material/CssBaseline';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import Fade from '@mui/material/Fade';

function ScrollTop(props) {
  const { children, window } = props;

  // Trigger scroll event after scrolling down 100px
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
    disableHysteresis: true,
    threshold: 100,
  });

  const handleClick = (event) => {
    const anchor = (event.target.ownerDocument || document).querySelector(
      '#back-to-top-anchor',
    );
  
    if (anchor) {
      // Scroll into view smoothly
      anchor.scrollIntoView({
        block: 'center', // Scroll to the center of the anchor
        behavior: 'smooth', // Smooth scrolling
      });
    } else {
      console.warn('Anchor element not found.');
    }
  };
  
  return (
    <Fade in={trigger}>
      <Box
        onClick={handleClick}
        role="presentation"
        sx={{
          position: 'fixed',
          bottom: 100, // Positioned above the footer
          right: 16,
          zIndex: 100,
        }}
      >
        {children}
      </Box>
    </Fade>
  );
}

ScrollTop.propTypes = {
  children: PropTypes.element,
  window: PropTypes.func,
};

export default function BackToTop(props) {
  return (
    <React.Fragment>
      <CssBaseline />
      <Box component="footer" sx={{ p: 2, textAlign: 'center', backgroundColor: 'gray' }}>
        Footer Section
      </Box>

      {/* ScrollTop button */}
      <ScrollTop {...props}>
        <Fab>
          <KeyboardArrowUpIcon />
        </Fab>
      </ScrollTop>
    </React.Fragment>
  );
}
