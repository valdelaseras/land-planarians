import * as React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

export default function Spinner() {
    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                textAlign: 'center',
                color: 'var(--primary-accent-bg-color)',
            }}>
            <div>
                <CircularProgress color="inherit" />
            </div>
            <div>
                <p>Fetching data...</p>
            </div>
        </Box>
    );
}
