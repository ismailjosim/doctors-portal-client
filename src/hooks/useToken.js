import { useEffect, useState } from 'react';

const useToken = (email) => {
  const [token, setToken] = useState('');
  const [tokenError, setTokenError] = useState('');

  useEffect(() => {
    if (email) {
      const apiUrl = process.env.REACT_APP_BACKEND_API_URL || 'http://localhost:5000';

      fetch(`${apiUrl}/jwt?email=${encodeURIComponent(email)}`)
        .then(async (res) => {
          const data = await res.json();

          if (!res.ok) {
            throw new Error(data.message || data.error || 'Unable to create access token');
          }

          return data;
        })
        .then((data) => {
          if (data.token) {
            localStorage.setItem('userAccessToken', data.token);
            setToken(data.token);
            setTokenError('');
          }
        })
        .catch((error) => {
          setTokenError(error.message);
        });
    }
  }, [email]);
  return [token, tokenError];
};

export default useToken;
