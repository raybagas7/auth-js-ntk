import {
  signInWithEmailAction,
  signInWithGithubAction,
  signInWithGoogleAction,
  signInWithZoomAction,
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
      <form action={signInWithZoomAction}>
        <button type="submit" className="py-2 px-3 bg-orange-500 rounded-xl">
          SignIn with Zoom
        </button>
      </form>
      <br />
      <form action={signInWithEmailAction}>
        Email:{' '}
        <input className="text-black" name="email-address" type="email" />
        <button type="submit" className="py-2 px-3 bg-orange-500 rounded-xl">
          SignIn via email
        </button>
      </form>
    </>
  );
};

export default SignIn;
