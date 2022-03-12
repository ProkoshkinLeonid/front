import React, { FC } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';


export const Nabvar: FC = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Приложеньице
          </Typography>
          <Button color="inherit">
            <Link style={{ color: 'inherit', textDecoration: 'none' }} to={'/'}>
              Логин
            </Link>
          </Button>
          <Button color="inherit">
            <Link style={{ color: 'inherit', textDecoration: 'none' }} to={'/registration'}>
              Регистрация
            </Link>
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
