import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { FaShieldAlt, FaTooth } from 'react-icons/fa';
import { AuthContext } from '../../Contexts/AuthProvider';
import useToken from '../../hooks/useToken';
import loginImg from '../../assets/images/login.png';
import SocialLogin from './SocialLogin';

const UserSignUp = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const { UserRegister, updateUserInfo } = useContext(AuthContext);

  const [signupError, setSignupError] = useState('');
  const [newUserEmail, setNewUserEmail] = useState('');
  const [token] = useToken(newUserEmail);
  const navigate = useNavigate();

  if (token) {
    navigate('/');
  }

  const strongRegex = new RegExp('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])');

  // TODO: User Login Function
  const onSubmit = (data) => {
    setSignupError('');
    // 1. Create New User
    UserRegister(data.email, data.password)
      .then((result) => {
        // user profile
        const user = result.user;
        const profile = {
          displayName: data.name,
        };
        // 2. Update New User
        updateUserInfo(profile)
          .then(() => {
            // 3. save user email & pass to database
            saveUserInfo(data.name, user.email);
          })
          .catch((error) => console.log(error.message));
      })
      .catch((error) => {
        console.log(error.message);
        setSignupError(error.message);
      });
  };

  // todo 3 : save user info to database function
  const saveUserInfo = (name, email) => {
    const user = { name, email };
    fetch(`${process.env.REACT_APP_BACKEND_API_URL}/users`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        setNewUserEmail(email);
      });
  };

  return (
    <div className="page-shell my-12 lg:my-20">
      <div className="grid overflow-hidden rounded-lg border border-primary/10 bg-white shadow-2xl lg:grid-cols-[0.95fr_1.05fr]">
        <div className="order-2 flex items-center p-6 sm:p-8 lg:order-1 lg:p-10">
          <div className="w-full">
            <div className="mb-8">
              <p className="section-kicker text-xs">Create account</p>
              <h2 className="mt-2 text-3xl font-bold text-secondary">Join Doctors Portal</h2>
              <p className="mt-2 text-sm text-secondary/60">
                Create your patient profile once, then book visits faster every time.
              </p>
            </div>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text font-medium text-secondary">Full name</span>
                </label>
                <input
                  type="text"
                  placeholder="Your full name"
                  {...register('name', {
                    required: 'Name is Required',
                  })}
                  className="input input-bordered w-full bg-[#f6faf9] focus:border-primary"
                />
                {errors.name && (
                  <p className="mt-1 font-medium text-error">{errors.name?.message}</p>
                )}
              </div>

              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text font-medium text-secondary">Email address</span>
                </label>
                <input
                  type="email"
                  placeholder="name@example.com"
                  {...register('email', {
                    required: 'Email is Required',
                  })}
                  className="input input-bordered w-full bg-[#f6faf9] focus:border-primary"
                />
                {errors.email && (
                  <p className="mt-1 font-medium text-error">{errors.email?.message}</p>
                )}
              </div>

              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text font-medium text-secondary">Password</span>
                </label>
                <input
                  {...register('password', {
                    required: 'Invalid Password',
                    minLength: { value: 6, message: 'Password Must Be 6 Characters Or longer.' },
                    pattern: {
                      value: strongRegex,
                      message: 'Password Must Be Strong!',
                    },
                  })}
                  type="password"
                  placeholder="Use 6+ characters with a symbol"
                  className="input input-bordered w-full bg-[#f6faf9] focus:border-primary"
                />
                {errors.password && (
                  <p className="mt-1 font-medium text-error">{errors.password?.message}</p>
                )}
                {signupError && <p className="my-2 text-base text-error">{signupError}</p>}
              </div>

              <button type="submit" className="btn btn-primary w-full text-white">
                Create account
              </button>
            </form>

            <div className="divider my-6 text-secondary/40">or</div>

            <SocialLogin
              setLoginError={setSignupError}
              setLoginUserEmail={setNewUserEmail}
              saveUserInfo={saveUserInfo}
            />

            <div className="mt-6 rounded-lg bg-[#eef5f4] p-4 text-center text-sm">
              <span className="text-secondary/70">Already have an account?</span>{' '}
              <Link className="font-semibold text-primary hover:text-accent" to="/login">
                Login
              </Link>
            </div>
          </div>
        </div>

        <div className="relative order-1 flex min-h-[520px] flex-col justify-between bg-primary p-8 text-white lg:order-2 lg:p-10">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_20%,rgba(215,122,97,0.48),transparent_22rem)]"></div>
          <div className="relative">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-white/70">
              New patient portal
            </p>
            <h1 className="mt-4 max-w-xl text-4xl font-bold leading-tight lg:text-5xl">
              Start booking dental care with less waiting.
            </h1>
            <p className="mt-5 max-w-lg leading-8 text-white/78">
              Save your details, choose available treatment slots, and keep every appointment
              connected to your profile.
            </p>
          </div>

          <div className="relative mt-8 grid gap-4 sm:grid-cols-2">
            <div className="rounded-lg border border-white/15 bg-white/12 p-4 backdrop-blur">
              <FaTooth className="text-2xl text-white" />
              <p className="mt-3 text-sm font-semibold">Personalized care</p>
              <p className="mt-1 text-xs text-white/65">Services matched to your visit needs.</p>
            </div>
            <div className="rounded-lg border border-white/15 bg-white/12 p-4 backdrop-blur">
              <FaShieldAlt className="text-2xl text-white" />
              <p className="mt-3 text-sm font-semibold">Protected account</p>
              <p className="mt-1 text-xs text-white/65">Secure booking and payment access.</p>
            </div>
          </div>

          <img
            src={loginImg}
            alt="Patient account illustration"
            className="relative mx-auto mt-8 max-h-56 object-contain lg:max-h-64"
          />
        </div>
      </div>
    </div>
  );
};

export default UserSignUp;
