'use server';

import { signIn, signOut } from '@/auth';

export async function signInWithGithubAction(formData: FormData) {
  console.log('singin in with github');
  await signIn('github', {
    redirectTo: '/dashboard/todos',
  });
}
export async function signInWithGoogleAction(formData: FormData) {
  console.log('singin in with google');
  await signIn('google', {
    redirectTo: '/dashboard/todos',
  });
}
export async function signInWithZoomAction(formData: FormData) {
  console.log('singin in with zoom');
  await signIn('zoom', {
    redirectTo: '/dashboard/todos',
  });
}

export async function signInWithEmailAction(formData: FormData) {
  console.log('singin in with email');
  const emailAddress = (formData.get('email-address') as string) || '';
  await signIn('sendgrid', {
    redirectTo: '/dashboard/todos',
    email: emailAddress,
  });
}

export async function signOutAction() {
  await signOut({
    redirectTo: '/auth/signIn',
  });
}
