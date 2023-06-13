import { Link } from "@inertiajs/react";
import { Button } from "@mui/material";
export default function ZooHeader({bgProp = "bg-slate-900", isHome, isLoggedIn = false}) {
  return (
    <>
    <div className={`headerDiv ${bgProp} p-10 border-b-gray-100 shadow-lg`}>
      {/* {isHome ? "" : <div className="inline-block"><Link href="/">Primitive Zoo</Link></div>} */}
      <div className={`buttons text-right`}>
        {(isLoggedIn) ? 
        <>
          <div>You're logged in!</div> 
         <Link href="/logout" method="post"><Button>Logout</Button></Link></>  : 
        <>
          <Link href="/login"><Button variant="contained" color="secondary">Login</Button></Link>
          <Link href="/register"><Button variant="contained" color="secondary">Register</Button></Link>
        </>
          }
          
      </div>
    </div>
    </>
  )
}
