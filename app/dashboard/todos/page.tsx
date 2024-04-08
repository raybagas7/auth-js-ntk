import { signOutAction } from '@/app/actions/auth';
import React from 'react';

const page = () => {
  return (
    <>
      <h1>This is the todos page</h1>
      <form action={signOutAction}>
        <button type="submit">Logout</button>
      </form>
    </>
  );
};

export default page;
