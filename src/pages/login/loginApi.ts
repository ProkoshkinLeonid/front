type User = {
    email: string,
    password: string,
}


export const loginAPI = (user: any) => fetch('http://localhost:5000/auth/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json;charset=utf-8'
    },
    body: JSON.stringify(user)
  });