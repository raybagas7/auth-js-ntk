import NextAuth from 'next-auth';
import Github from '@auth/core/providers/github';
export const {
  handlers: { GET, POST },
  auth,
  signIn,
  signOut,
} = NextAuth({
  pages: {
    signIn: '/auth/signIn',
  },
  providers: [
    Github({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
  ],
  callbacks: {
    authorized: (params) => {
      console.log('in authorized');
      return !!params.auth?.user;
    },
  },
});
