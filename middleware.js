import withAuth from "next-auth/middleware"
import { NextResponse } from "next/server"

export default withAuth(
    function middleware(req){
        return NextResponse.next()
    },
    {callbacks:{
        authorized({token}){
            return token?true:false
        }
    }}
)

export const config = { matcher: ["/edit"] }

