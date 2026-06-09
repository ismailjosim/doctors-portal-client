import { useEffect, useState } from 'react';

const useToken = (email) => {
  const [token, setToken] = useState('');

  useEffect(() => {
    if (email) {
      const apiUrl = process.env.REACT_APP_BACKEND_API_URL || 'http://localhost:5000';

      fetch(`${apiUrl}/jwt?email=${encodeURIComponent(email)}`)
        .then((res) => res.json())
        .then((data) => {
          // console.log(data);
          if (data.token) {
            localStorage.setItem('userAccessToken', data.token);
            setToken(data.token);
          }
        })
        .catch((error) => {
          console.log(error.message);
        });
    }
  }, [email]);
  return [token];
};

export default useToken;
