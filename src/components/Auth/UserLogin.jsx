import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Contexts/AuthProvider';
import useToken from '../../hooks/useToken';

const UserLogin = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const { userLogin } = useContext(AuthContext);
    const [loginError, setLoginError] = useState('');


    // todo: navigate user when login
    const navigate = useNavigate()
    const location = useLocation()
    const from = location?.state?.from.pathname || '/';



    // todo: set user email for jwt verification
    const [loginUserEmail, setLoginUserEmail] = useState('')
    const [token] = useToken(loginUserEmail);


    // footer: navigate when we get token
    if (token) {
        navigate(from, { replace: true })
    }





    // TODO: User Login Function
    const onSubmit = data => {
        setLoginError('')
        userLogin(data.email, data.password)
            .then(result => {
                const user = result.user;
                setLoginUserEmail(user.email)

            })
            .catch(error => {
                console.log(error.message);
                setLoginError(error.message)
            })
    }



    return (
        <div className='max-w-sm mx-auto my-28  p-5 rounded-lg shadow-md border border-primary'>
            <h3 className='text-center font-normal text-2xl mb-8'>Login Here</h3>
            <form onSubmit={ handleSubmit(onSubmit) }>

                {/* TODO: input Email */ }
                <div className="form-control w-full">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input type="email" { ...register("email",
                        {
                            required: "Email is Required"
                        }) }
                        className="input input-primary input-bordered w-full" />
                    { errors.email && <p className='text-error font-medium mt-1'>{ errors.email?.message }</p> }

                </div>
                {/* TODO: input Password */ }
                <div className="form-control w-full my-5">
                    <label className="label">
                        <span className="label-text">Password</span>
                    </label>
                    <input { ...register("password") } type="password" className="input input-bordered w-full input-primary" />
                    { errors.password && <p className='text-error font-medium mt-1'>{ errors.password?.message }</p> }
                    { loginError && <p className='text-error text-base my-2'>{ loginError }</p> }

                    {/* TODO: forget Password */ }
                    <span className="label-text-alt text-end mt-1 text-sm capitalize hover:text-primary cursor-pointer">forget Password?</span>
                </div>

                {/* TODO: submit button */ }
                <div className="form-control w-full mt-5">
                    <button type="submit" className="btn btn-secondary text-white w-full font-normal">log in</button>
                </div>

                {/* TODO : show user login error */ }

                {/* TODO: Form submit button */ }
                <div className='mt-3 mb-5 text-center text-sm'>
                    <span>New to Doctors Portal?</span> <Link className='text-accent hover:text-primary' to='/register'>Create new account</Link>
                </div>

                <div className="divider">OR</div>

                {/* TODO: Form Google login button */ }
                <div className="form-control w-full my-5">
                    <button className="btn btn-outline hover:text-white">CONTINUE WITH GOOGLE</button>
                </div>

            </form>
        </div>
    );
};

export default UserLogin;
