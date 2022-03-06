export const RegistrationAPI = (user: any) => fetch('http://localhost:5000/auth/registration', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json;charset=utf-8'
    },
    body: JSON.stringify(user)
  });