import NextAuth from 'next-auth';
import Github from '@auth/core/providers/github';
import Google from '@auth/core/providers/google';
import Zoom from '@auth/core/providers/zoom';

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
    Google({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
    Zoom({
      clientId: process.env.ZOOM_CLIENT_ID,
      clientSecret: process.env.ZOOM_CLIENT_SECRET,
    }),
  ],
  callbacks: {
    authorized: (params) => {
      console.log('in authorized');
      return !!params.auth?.user;
    },
  },
});
