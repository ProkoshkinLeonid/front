import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { loginAPI } from './loginApi';
import { LoadingButton } from '@mui/lab';
import { Box } from '@mui/system';
import { Alert } from '@mui/material';
import { redirect } from '../../helpes';

const theme = createTheme();

export const Login = () => {

  const [authError, setAuthError] = React.useState('')
  const [isLoading, setIsLoading] = React.useState(false)

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    setIsLoading(true)
    await loginAPI({
      email: data.get('email'),
      password: data.get('password'),
    }).then(() => {
      setAuthError('')
      redirect('/mainsite')
    })
    .catch(() => {
      setAuthError('Произошла ошибка сервера :(')
    })
  setIsLoading(false)
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
          </Avatar>
          <Typography component="h1" variant="h5">
            Авторизация
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <LoadingButton
              loading={isLoading}
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Войти
            </LoadingButton>
            {authError && <Alert severity="warning">{authError}</Alert>}
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}