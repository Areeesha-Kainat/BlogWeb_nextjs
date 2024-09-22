// "use client"

// import { signIn, signOut, useSession } from 'next-auth/react'
// import React from 'react'

// const Login = () => {

//     const session = useSession();
//     console.log(session);


//     if(session.status === "loading"){
//    return <p>Loading...</p>
//     }
//     if(session.status === "authenticated"){
// //    return <button onClick={() => signOut('google')}>Logout</button>
//     return <p>User is Authenticated</p>
    
//     }
    
//   //   if(session.status === "unauthenticated"){
//   //  return <p>User is UnAuthenticated</p>
//   //   }


//   return (
//     <div className="bg-black min-h-screen grid place-items-center">
//      <button
//      className="bg-white px-8 py-4 flex gap-2 items-center"
//      onClick={() => signIn("google")}>
//         LogIn with Google
//         </button>
//     </div>
//   )
// }

// export default Login


"use client"

import { signIn, signOut, useSession } from 'next-auth/react'
import React, { useEffect } from 'react'
import { useRouter } from 'next/navigation'

const Login = () => {
    const session = useSession();
    const router = useRouter();

    console.log(session);

    useEffect(() => {
        if (session.status === "authenticated") {
            // Redirect to the new page after login
            router.push("/authenticated");
        }
    }, [session, router]);

    if (session.status === "loading") {
        return <p>Loading...</p>;
    }

    if (session.status === "authenticated") {
        return <p>User is Authenticated</p>;
    }

    return (
        <div className="bg-black min-h-screen grid place-items-center">
            <button
                className="bg-white px-8 py-4 flex gap-2 items-center"
                onClick={() => signIn("google")}>
                Log In with Google
            </button>
        </div>
    );
}

export default Login;
