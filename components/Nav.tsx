'use client';

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Menu, MenuItem } from '@mui/material';
import React from 'react';
import Link from 'next/link';

export default function Nav() {
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <nav id="nav">
            <Box sx={{ flexGrow: 1 }}>
                <AppBar
                    sx={{ backgroundColor: 'transparent' }}
                    elevation={0}
                    position="static">
                    <Toolbar>
                        <IconButton
                            size="large"
                            edge="start"
                            aria-label="menu"
                            aria-controls={open ? 'basic-menu' : undefined}
                            aria-haspopup="true"
                            aria-expanded={open ? 'true' : undefined}
                            onClick={handleClick}
                            sx={{
                                mr: 0.5,
                                color: 'var(--primary-accent-color)',
                            }}>
                            <MenuIcon />
                        </IconButton>
                        <Menu
                            id="basic-menu"
                            anchorEl={anchorEl}
                            open={open}
                            onClose={handleClose}
                            MenuListProps={{
                                'aria-labelledby': 'basic-button',
                            }}>
                            <MenuItem onClick={handleClose}>
                                <Link href={'/'}>Home</Link>
                            </MenuItem>
                            <MenuItem onClick={handleClose}>
                                <Link href={'/observations'}>
                                    Observations overview
                                </Link>
                            </MenuItem>
                            <MenuItem onClick={handleClose}>
                                <Link href={'/observations/new'}>
                                    New observation
                                </Link>
                            </MenuItem>
                        </Menu>
                        <Typography
                            component="span"
                            sx={{
                                flexGrow: 1,
                                color: 'var(--primary-accent-color)',
                                letterSpacing: '2px',
                                textTransform: 'uppercase',
                                fontWeight: 600,
                            }}>
                            planarifun
                        </Typography>
                        <Button
                            sx={{
                                backgroundColor:
                                    'var(--primary-accent-bg-color)',
                                color: 'var(--secondary-font-color)',
                            }}
                            href="/observations/new"
                            className="theme-primary-accent"
                            variant="contained"
                            size="small">
                            add observation
                        </Button>
                    </Toolbar>
                </AppBar>
            </Box>
        </nav>
    );
}
