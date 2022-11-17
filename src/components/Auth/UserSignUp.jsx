import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Contexts/AuthProvider';

const UserSignUp = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const { UserRegister, updateUserInfo } = useContext(AuthContext);

    const navigate = useNavigate()

    const strongRegex = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])");



    // TODO: User Login Function
    const onSubmit = data => {
        UserRegister(data.email, data.password)
            .then(result => {

                const user = result.user;
                console.log(user);

                const profile = {
                    displayName: data.name,
                }
                console.log(profile);
                updateUserInfo(profile)
                    .then(() => {
                        navigate('/');

                    })
                    .catch(error => console.log(error.message))
            })
            .catch(error => {
                console.log(error.message);
            })
    }

    return (
        <div className='max-w-sm mx-auto my-28  p-5 rounded-lg shadow-md border border-primary'>
            <h3 className='text-center font-normal text-2xl mb-8'>Login Here</h3>
            <form onSubmit={handleSubmit(onSubmit)}>

                {/* TODO: input Email */}
                <div className="form-control w-full">
                    <label className="label">
                        <span className="label-text">Name</span>
                    </label>
                    <input type="text" {...register("name",
                        {
                            required: "Name is Required"
                        })}
                        className="input input-primary input-bordered w-full" />
                    {errors.name && <p className='text-error font-medium mt-1'>{errors.name?.message}</p>}

                </div>

                {/* TODO: input Email */}
                <div className="form-control w-full">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input type="email" {...register("email",
                        {
                            required: "Email is Required"
                        })}
                        className="input input-primary input-bordered w-full" />
                    {errors.email && <p className='text-error font-medium mt-1'>{errors.email?.message}</p>}

                </div>
                {/* TODO: input Password */}
                <div className="form-control w-full my-5">
                    <label className="label">
                        <span className="label-text">Password</span>
                    </label>
                    <input {...register("password", {
                        required: 'Invalid Password',
                        minLength: { value: 6, message: "Password Must Be 6 Characters Or longer." },
                        pattern: {
                            value: strongRegex,
                            message: "Password Must Be Strong!"
                        }

                    })} type="password" className="input input-bordered w-full input-primary" />
                    {errors.password && <p className='text-error font-medium mt-1'>{errors.password?.message}</p>}

                </div>

                {/* TODO: submit button */}
                <div className="form-control w-full mt-5">
                    <button type="submit" className="btn btn-secondary text-white w-full font-normal">Sign Up</button>
                </div>

                {/* TODO: Form submit button */}
                <div className='mt-3 mb-5 text-center text-sm'>
                    <span>Already have account on Doctors Portal?</span> <Link className='text-accent hover:text-primary' to='/login'>Login</Link>
                </div>

                <div className="divider">OR</div>

                {/* TODO: Form Google login button */}
                <div className="form-control w-full my-5">
                    <button className="btn btn-outline hover:text-white">CONTINUE WITH GOOGLE</button>
                </div>

            </form>
        </div>
    );
};

export default UserSignUp;
