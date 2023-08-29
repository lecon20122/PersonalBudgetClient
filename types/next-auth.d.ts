import NextAuth from "next-auth"
import { JWT } from "next-auth/jwt"

declare module "next-auth" {
    /**
     * Returned by `useSession`, `getSession` and received as a prop on the `SessionProvider` React Context
     */
    interface Session {
        user: {
            /** The user's postal address. */
            name: string,
            email: string,
            expiration: string
        },
        accessToken: string,
    }

    /**
    * The shape of the user object returned in the OAuth providers' `profile` callback,
    * or the second parameter of the `session` callback, when using a database.
    */
    interface User {
        /** The user's postal address. */
        name: string,
        email: string,
        accessToken: string,
        expiration: string

    }
}

declare module "next-auth/jwt" {
    interface JWT {
        accessToken: string,
    }
}