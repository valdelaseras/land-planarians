import * as React from 'react';
import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
    palette: {
        primary: {
            main: '#222436',
            contrastText: '#bed2f6',
        },
        secondary: {
            main: '#7862e9',
            contrastText: '#ffffff',
        },
    },
    // components: {
    //   Mui
    // },
});
