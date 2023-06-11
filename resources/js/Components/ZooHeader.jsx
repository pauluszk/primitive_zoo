import { Link } from "@inertiajs/react";
import { Button } from "@mui/material";
export default function ZooHeader({bgProp, isHome}) {
  return (
    <>
    <div className={`headerDiv ${bgProp} p-10 border-b-gray-100 shadow-lg`}>
      {isHome ? "" : <div className="inline-block"><Link href="/">Primitive Zoo</Link></div>}
      <div className={`buttons text-right`}>
          <Link href="/"> <Button variant="contained" color="secondary">Login</Button></Link>
          <Link href="/"> <Button variant="contained" color="secondary">Register</Button></Link>
      </div>
    </div>
    </>
  )
}
