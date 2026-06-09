import { useContext } from 'react';
import { AuthContext } from '../../Contexts/AuthProvider';
import { FaGoogle } from 'react-icons/fa';

const SocialLogin = ({ setLoginError, setLoginUserEmail, saveUserInfo }) => {
  const { googleLogin } = useContext(AuthContext);
  const handleGoogleLogin = () => {
    if (setLoginError) {
      setLoginError('');
    }
    googleLogin()
      .then((result) => {
        const user = result.user;
        if (saveUserInfo) {
          saveUserInfo(user.displayName, user.email);
          return;
        }
        if (setLoginUserEmail) {
          setLoginUserEmail(user.email);
        }
      })
      .catch((error) => {
        console.log(error.message);
        if (setLoginError) {
          setLoginError(error.message);
        }
      });
  };
  return (
    <button
      onClick={handleGoogleLogin}
      type="button"
      className="btn btn-outline w-full gap-3 hover:text-white"
    >
      <FaGoogle />
      Continue with Google
    </button>
  );
};

export default SocialLogin;
