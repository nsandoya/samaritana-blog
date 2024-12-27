import { NextAuthOptions } from "next-auth"
import GoogleProvider from "next-auth/providers/google"


export const authOptions: NextAuthOptions = {
    // Configure one or more authentication providers
    providers: [
      GoogleProvider({
        clientId: process.env.NEXT_GOOGLE_CLIENT_ID ?? '',
        clientSecret: process.env.NEXT_GOOGLE_CLIENT_SECRET ?? '',
      }),
      // ...add more providers here
    ],

    secret: process.env.NEXTAUTH_SECRET ?? '',

    callbacks: {
      async jwt({ token, account, user }) {
        const isSignIn = user ? true : false;
        if (isSignIn) {
          //console.log("Account:", account);
          const response = await fetch(
            `${process.env.NEXT_STRAPI_API_BASE_URL}/auth/${account?.provider}/callback?access_token=${account?.access_token}`
          );
  
          const data = await response.json();
  
          token.jwt = data.jwt;
          token.id = data.user.id;
        }
        return Promise.resolve(token)
        
      },
      async session({ session }) {
        return session;
      }
    },
  }
  