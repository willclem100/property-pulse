import GoogleProvider from 'next-auth/providers/google'

export const authOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      authorization: {
        params: {
          prompt: 'consent',
          access_type: 'offline',
          response_type: 'code',
        },
      },
    }),
  ],
  callbacks: {
    // invoked on successful sign in
    async signIn({ profile }) {
      // 1. Connect to the database
      // 2. Check if the user already exists
      // 3. If the user doesn't exist, create a new user
      // 4. Return true to allow sign in
    },
    // Session callback function that modifies the session object
    async session({ session }) {
      // 1. Get user from the database
      // 2. Assign the userID from the session
      // 3. Return the session object
    },
  },
}
