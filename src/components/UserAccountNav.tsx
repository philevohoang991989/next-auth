'use client'

import { signOut } from "next-auth/react"

const UserAccoutNav = () =>{
    return <a className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium" href="/login">
        Sign in
    </a>
}
export default UserAccoutNav