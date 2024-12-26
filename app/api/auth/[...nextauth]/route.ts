import { registerUserService } from "@/data/services/authService";
import NextAuth, { NextAuthOptions } from "next-auth"
//import GithubProvider from "next-auth/providers/github"
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
    /* database: `${process.env.NEXT_PUBLIC_DATABASE_URL}`,
    session: {
    jwt: true,
  }, */
  
 /*  callbacks: {
    session: async (session, user) => {
      session.jwt = user.jwt;
      session.id = user.id;
      return Promise.resolve(session);
    },

    jwt: async (token, user, account) => {
      const isSignIn = user ? true : false;
      if (isSignIn) {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_API_URL}/auth/${account.provider}/callback?access_token=${account?.accessToken}`
        );
        
        const data = await response.json();
        token.jwt = data.jwt;
        token.id = data.user.id;
      }

      return Promise.resolve(token);

    },

  }, */
  // Tomar en cuenta esa parte no más
  callbacks: {
    async jwt({ token, account, user }) {
      const isSignIn = user ? true : false;
      if (isSignIn) {
        //console.log("Account:", account);
        const response = await fetch(
          `${process.env.NEXT_STRAPI_API_BASE_URL}/auth/${account?.provider}/callback?access_token=${account?.access_token}`
        );
        /* const response = await fetch(
          `${process.env.NEXT_PUBLIC_API_URL}/auth/${account?.provider}/callback?access_token=${account?.accessToken}`
        ); */
        const data = await response.json();

        token.jwt = data.jwt;
        token.id = data.user.id;
      }
      return Promise.resolve(token)
      // Si es la primera vez que el usuario se autentica
      /* if (account && profile) {
        try {
          const response = await fetch(`${process.env.NEXT_STRAPI_API_BASE_URL}/auth/local/register`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              username: profile?.name,
              email: profile?.email,
              role: 'author',
              password: account.access_token, // O algún identificador único
            }),
          });

          if (!response.ok) {
            console.error('Error al crear usuario en Strapi:', await response.text());
          }
        } catch (error) {
          console.error('Error en la solicitud a Strapi:', error);
        }
      }

      return token; */
    },
    async session({ session, user }) {
      return session;
    }
  },
}

const handler = NextAuth(authOptions)
export {handler as GET, handler as POST}