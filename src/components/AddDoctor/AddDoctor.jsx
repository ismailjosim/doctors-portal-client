import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import Loading from '../Shared/Loading';

const AddDoctor = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  // const { UserRegister, updateUserInfo } = useContext(AuthContext);
  const navigate = useNavigate();

  const { data: specialties = [], isLoading } = useQuery({
    queryKey: ['specialty'],
    queryFn: async () => {
      const res = await fetch('https://doctor-portal-server-tawny.vercel.app/appointmentSpecialty');
      const data = await res.json();
      return data?.specialty;
    },
  });

  // section: imageBB api
  const imageHostKey = process.env.REACT_APP_imgbb_key;

  const handleAddDoctor = (data) => {
    const image = data.image[0];
    const formData = new FormData();
    formData.append('image', image);
    const url = `https://api.imgbb.com/1/upload?key=${imageHostKey}`;
    fetch(url, {
      method: 'POST',
      body: formData,
    })
      .then((res) => res.json())
      .then((imgData) => {
        if (imgData.success) {
          const doctor = {
            name: data.name,
            email: data.email,
            specialty: data.specialty,
            image: imgData.data.url,
          };

          // save doctor info to the database
          const url = 'https://doctor-portal-server-tawny.vercel.app/doctors';
          fetch(url, {
            method: 'POST',
            headers: {
              'content-type': 'application/json',
              authorization: `bearer ${localStorage.getItem('userAccessToken')}`,
            },
            body: JSON.stringify(doctor),
          })
            .then((res) => res.json())
            .then((result) => {
              // console.log(result.doctors);
              toast.success('New Doctor Added Successfully 🎉', { autoClose: 1000 });
              navigate('/dashboard/managedoctors');
            });
        }
      });
  };

  if (isLoading) {
    return <Loading></Loading>;
  }

  return (
    <div className="bg-slate-300 w-full h-full p-10">
      <h3 className="text-3xl font-medium capitalize">add a doctor</h3>

      <div className="w-1/2 rounded-lg bg-white mt-10">
        <form onSubmit={handleSubmit(handleAddDoctor)} className="p-10">
          {/* TODO: input name */}
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Name</span>
            </label>

            <input
              type="text"
              {...register('name', {
                required: 'Name is Required',
              })}
              className="input input-primary input-bordered w-full"
            />
            {errors.name && <p className="text-error font-medium mt-1">{errors.name?.message}</p>}
          </div>

          {/* TODO: input Email */}
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Email</span>
            </label>

            <input
              type="email"
              {...register('email', {
                required: 'Email is Required',
              })}
              className="input input-primary input-bordered w-full"
            />

            {errors.email && <p className="text-error font-medium mt-1">{errors.email?.message}</p>}
          </div>

          {/* TODO: Select Specialty Specialty */}

          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Specialty</span>
            </label>

            <select className="select select-accent w-full" {...register('specialty')}>
              {specialties?.map((specialty) => {
                return (
                  <option key={specialty._id} value={specialty.name}>
                    {specialty.name}
                  </option>
                );
              })}
            </select>
          </div>

          {/* TODO: input name */}
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">image</span>
            </label>

            <input
              type="file"
              {...register('image', {
                required: 'image is Required',
              })}
              className="input input-primary input-bordered w-full"
            />
            {errors.image && <p className="text-error font-medium mt-1">{errors.image?.message}</p>}
          </div>

          {/* TODO: submit button */}
          <div className="form-control w-full mt-5">
            <button type="submit" className="btn btn-secondary text-white w-full font-normal">
              Add A Doctor
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddDoctor;

/*
Three place to store images

1. images hosting server
2. file system of your server.
3. mongodb based 64.

*/
