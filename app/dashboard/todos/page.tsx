import { signOutAction } from '@/app/actions/auth';
import { auth } from '@/auth';
import React from 'react';

const page = async () => {
  const session = await auth();
  return (
    <>
      <h1>
        This is the todos page {session?.user?.name} - {session?.user?.email}
      </h1>
      <form action={signOutAction}>
        <button type="submit">Logout</button>
      </form>
    </>
  );
};

export default page;
