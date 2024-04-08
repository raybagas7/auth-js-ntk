'use server';

import { signIn, signOut } from '@/auth';

export async function signInWithGithubAction(formData: FormData) {
  console.log('singin in');
  await signIn('github', {
    redirectTo: '/dashboard/todos',
  });
}

export async function signOutAction() {
  await signOut({
    redirectTo: '/auth/signIn',
  });
}
