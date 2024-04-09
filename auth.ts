import NextAuth from 'next-auth';
import Github from '@auth/core/providers/github';
import Google from '@auth/core/providers/google';
import Zoom from '@auth/core/providers/zoom';
import { PrismaAdapter } from '@auth/prisma-adapter';
import prisma from './prismaClient';

export const {
  handlers: { GET, POST },
  auth,
  signIn,
  signOut,
} = NextAuth({
  adapter: PrismaAdapter(prisma),
  session: {
    strategy: 'jwt',
  },
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
    // @ts-ignore
    {
      id: 'sendgrid',
      type: 'email',
      async sendVerificationRequest({
        identifier,
        url,
      }: {
        identifier: string;
        url: string;
      }) {
        console.log(url, identifier);
      },
    },
  ],
  callbacks: {
    authorized: (params) => {
      console.log('in authorized');
      return !!params.auth?.user;
    },
  },
});
