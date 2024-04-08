import {
  signInWithGithubAction,
  signInWithGoogleAction,
} from '@/app/actions/auth';
import React from 'react';

const SignIn = () => {
  return (
    <>
      <h1>SignIn</h1>
      <form action={signInWithGithubAction}>
        <button type="submit" className="py-2 px-3 bg-orange-500 rounded-xl">
          SignIn with Github
        </button>
      </form>
      <form action={signInWithGoogleAction}>
        <button type="submit" className="py-2 px-3 bg-orange-500 rounded-xl">
          SignIn with Google
        </button>
      </form>
    </>
  );
};

export default SignIn;
