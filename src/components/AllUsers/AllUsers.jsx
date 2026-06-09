import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { toast } from 'react-toastify';

const AllUsers = () => {
  const { data: users = [], refetch } = useQuery({
    queryKey: ['users'],
    queryFn: async () => {
      const res = await fetch(`${process.env.REACT_APP_BACKEND_API_URL}/users`);
      const data = await res.json();
      return data.users;
    },
  });

  const handleMakeAdmin = (id) => {
    fetch(`${process.env.REACT_APP_BACKEND_API_URL}/users/admin/${id}`, {
      method: 'PUT',
      headers: {
        authorization: `bearer ${localStorage.getItem('userAccessToken')}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.admin.modifiedCount > 0) {
          toast.success('Admin Make Successfully', { autoClose: 1000 });
          refetch();
        }
      });
  };

  return (
    <div className="rounded-lg border border-primary/10 bg-white p-6 shadow-xl">
      <div className="mb-6">
        <p className="section-kicker text-xs">Administration</p>
        <h3 className="mt-2 text-2xl font-bold text-secondary">All Users</h3>
      </div>

      <div className="overflow-x-auto rounded-lg border border-primary/10">
        <table className="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, idx) => {
              return (
                <tr key={user._id}>
                  <th>{idx + 1}</th>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>
                    {user?.role !== 'admin' && (
                      <button
                        onClick={() => handleMakeAdmin(user._id)}
                        className="btn btn-xs btn-primary text-white"
                      >
                        Make Admin
                      </button>
                    )}
                    {user?.role === 'admin' && (
                      <span className="badge badge-success text-white">Admin</span>
                    )}
                  </td>
                  <td>
                    <button className="btn btn-xs btn-error text-white">Delete</button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllUsers;
