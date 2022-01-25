import * as React from 'react';
import Box from '@mui/material/Box';
import { FiImage } from 'react-icons/fi';

export default function Logo() {
  return (
    <Box>
      <Box sx={{
        textAlign: 'center',
        padding: '1em',
        fontFamily: 'Nunito Sans',
        fontSize: '1.75em',
        '> span': {
          margin: '.25em',
        },
      }}
      >
        <Box
          component="span"
          sx={{
            color: '#55abff',
            position: 'relative',
            top: '7px',
          }}
        >
          <FiImage />
        </Box>
        <Box
          component="span"
          sx={{
            fontWeight: '700',
          }}
        >
          gifinder
        </Box>
      </Box>
    </Box>
  );
}
