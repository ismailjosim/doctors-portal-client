import React, { useContext } from 'react';
import { AuthContext } from '../../Contexts/AuthProvider';

const UserProfile = () => {
  const { user } = useContext(AuthContext);
  const userInitial = user?.displayName?.charAt(0) || user?.email?.charAt(0) || 'U';

  return (
    <section className="rounded-lg border border-primary/10 bg-white p-6 shadow-lg lg:p-8">
      <p className="section-kicker text-xs">Account</p>
      <h1 className="mt-2 text-3xl font-bold text-secondary">User Profile</h1>

      <div className="mt-8 flex flex-col gap-6 md:flex-row md:items-center">
        <div className="avatar">
          <div className="h-28 w-28 rounded-full border border-primary/15 bg-[#eef5f4]">
            {user?.photoURL ? (
              <img src={user.photoURL} alt={user.displayName || 'User profile'} />
            ) : (
              <div className="flex h-full w-full items-center justify-center text-4xl font-bold uppercase text-primary">
                {userInitial}
              </div>
            )}
          </div>
        </div>

        <div className="min-w-0">
          <h2 className="truncate text-2xl font-bold text-secondary">
            {user?.displayName || 'Doctors Portal User'}
          </h2>
          <p className="mt-2 text-secondary/60">{user?.email}</p>
        </div>
      </div>

      <div className="mt-8 grid gap-4 md:grid-cols-2">
        <div className="rounded-lg border border-primary/10 p-4">
          <p className="text-sm font-semibold text-secondary/60">Name</p>
          <p className="mt-1 font-medium text-secondary">
            {user?.displayName || 'Not added yet'}
          </p>
        </div>
        <div className="rounded-lg border border-primary/10 p-4">
          <p className="text-sm font-semibold text-secondary/60">Email</p>
          <p className="mt-1 break-all font-medium text-secondary">{user?.email}</p>
        </div>
      </div>
    </section>
  );
};

export default UserProfile;
