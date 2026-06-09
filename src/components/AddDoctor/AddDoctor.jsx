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
      const res = await fetch(`${process.env.REACT_APP_BACKEND_API_URL}/appointmentSpecialty`);
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
          const url = `${process.env.REACT_APP_BACKEND_API_URL}/doctors`;
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
    <div className="rounded-lg border border-primary/10 bg-white p-6 shadow-xl">
      <div className="mb-6">
        <p className="section-kicker text-xs">Clinical team</p>
        <h3 className="mt-2 text-2xl font-bold capitalize text-secondary">Add a doctor</h3>
      </div>

      <div className="max-w-2xl rounded-lg bg-[#f6faf9]">
        <form onSubmit={handleSubmit(handleAddDoctor)} className="p-6">
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
              className="input input-bordered w-full"
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
              className="input input-bordered w-full"
            />

            {errors.email && <p className="text-error font-medium mt-1">{errors.email?.message}</p>}
          </div>

          {/* TODO: Select Specialty Specialty */}

          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Specialty</span>
            </label>

            <select className="select select-bordered w-full" {...register('specialty')}>
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
                required: 'Image is required',
              })}
              className="file-input file-input-bordered w-full"
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
