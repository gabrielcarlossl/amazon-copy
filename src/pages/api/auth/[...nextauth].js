import NextAuth from "next-auth"
import GithubProvider from "next-auth/providers"


export default NextAuth({
    providers: [
        Providers.Google({
            clientId: process.env.GOOGLE_ID,
            clientSecret: process.env.GOOGLE_SECRET
        })
    ]
})