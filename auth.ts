import NextAuth from 'next-auth';
export const { handlers, auth } = NextAuth({
  providers: [],
  callbacks: {
    authorized: (params) => {
      console.log('in authorized');

      return true;
    },
  },
});
