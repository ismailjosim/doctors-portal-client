import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FaGoogle, FaLock, FaRegCalendarCheck } from 'react-icons/fa';
import { AuthContext } from '../../Contexts/AuthProvider';
import useToken from '../../hooks/useToken';
import loginImg from '../../assets/images/login.png';

const UserLogin = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const { userLogin } = useContext(AuthContext);
  const [loginError, setLoginError] = useState('');

  // todo: navigate user when login
  const navigate = useNavigate();
  const location = useLocation();
  const from = location?.state?.from.pathname || '/';

  // todo: set user email for jwt verification
  const [loginUserEmail, setLoginUserEmail] = useState('');
  const [token] = useToken(loginUserEmail);

  // footer: navigate when we get token
  if (token) {
    navigate(from, { replace: true });
  }

  // TODO: User Login Function
  const onSubmit = (data) => {
    setLoginError('');
    userLogin(data.email, data.password)
      .then((result) => {
        const user = result.user;
        setLoginUserEmail(user.email);
      })
      .catch((error) => {
        console.log(error.message);
        setLoginError(error.message);
      });
  };

  return (
    <div className="page-shell my-12 lg:my-20">
      <div className="grid overflow-hidden rounded-lg border border-primary/10 bg-white shadow-2xl lg:grid-cols-[1.05fr_0.95fr]">
        <div className="relative flex min-h-[520px] flex-col justify-between bg-secondary p-8 text-white lg:p-10">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_20%,rgba(14,124,134,0.55),transparent_22rem)]"></div>
          <div className="relative">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-accent">
              Patient access
            </p>
            <h1 className="mt-4 max-w-xl text-4xl font-bold leading-tight lg:text-5xl">
              Welcome back to your care dashboard.
            </h1>
            <p className="mt-5 max-w-lg leading-8 text-white/72">
              Review appointments, keep payments organized, and continue your treatment plan
              without the front-desk back-and-forth.
            </p>
          </div>

          <div className="relative mt-8 grid gap-4 sm:grid-cols-2">
            <div className="rounded-lg border border-white/10 bg-white/10 p-4 backdrop-blur">
              <FaRegCalendarCheck className="text-2xl text-accent" />
              <p className="mt-3 text-sm font-semibold">Live bookings</p>
              <p className="mt-1 text-xs text-white/60">See upcoming visits instantly.</p>
            </div>
            <div className="rounded-lg border border-white/10 bg-white/10 p-4 backdrop-blur">
              <FaLock className="text-2xl text-accent" />
              <p className="mt-3 text-sm font-semibold">Secure portal</p>
              <p className="mt-1 text-xs text-white/60">Protected access for patient records.</p>
            </div>
          </div>

          <img
            src={loginImg}
            alt="Patient portal illustration"
            className="relative mx-auto mt-8 max-h-56 object-contain lg:max-h-64"
          />
        </div>

        <div className="flex items-center p-6 sm:p-8 lg:p-10">
          <div className="w-full">
            <div className="mb-8">
              <p className="section-kicker text-xs">Sign in</p>
              <h2 className="mt-2 text-3xl font-bold text-secondary">Continue your care</h2>
              <p className="mt-2 text-sm text-secondary/60">
                Use the email and password connected to your Doctors Portal account.
              </p>
            </div>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
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
                <div className="label">
                  <span className="label-text font-medium text-secondary">Password</span>
                  <button type="button" className="label-text-alt text-primary hover:text-accent">
                    Forgot password?
                  </button>
                </div>
                <input
                  {...register('password')}
                  type="password"
                  placeholder="Enter your password"
                  className="input input-bordered w-full bg-[#f6faf9] focus:border-primary"
                />
                {errors.password && (
                  <p className="mt-1 font-medium text-error">{errors.password?.message}</p>
                )}
                {loginError && <p className="my-2 text-base text-error">{loginError}</p>}
              </div>

              <button type="submit" className="btn btn-primary w-full text-white">
                Log in
              </button>
            </form>

            <div className="divider my-6 text-secondary/40">or</div>

            <button type="button" className="btn btn-outline w-full gap-3 hover:text-white">
              <FaGoogle />
              Continue with Google
            </button>

            <div className="mt-6 rounded-lg bg-[#eef5f4] p-4 text-center text-sm">
              <span className="text-secondary/70">New to Doctors Portal?</span>{' '}
              <Link className="font-semibold text-primary hover:text-accent" to="/register">
                Create new account
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserLogin;
