import NextAuth from 'next-auth/next'
import GoogleProvider from 'next-auth/providers/google'
import { signIn } from 'next-auth/react'

import connectMongoDB from "@/libs/mongodb";
import Admin from "@/models/admin";

const connection = await connectMongoDB();

export default NextAuth({
    providers:[
        GoogleProvider({
            clientId:process.env.GOOGLE_CLIENT_ID,
            clientSecret:process.env.GOOGLE_CLIENT_SECRET
        })
    ],
    secret:process.env.NEXTAUTH_SECRET,
    callbacks:{
        async signIn({user,account}){
            let result
            try{
                 result = await Admin.find(user)//{id:user.id,email:user.email,name:user.name,image:user.image});
            }catch(e){
                console.log("USER NOT FOUND !!",e)
            }
            if (result) return user
            else return null
        },
    },
    pages:{
        signIn:'/login',
    }
  
})