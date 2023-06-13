import { useState } from "react"
import "./Bubble.css"
import { Link } from "@inertiajs/react";
import lock from "../../images/lock.png"
export default function Bubble({children, imgSrc, hoverMethod, allowedToHide, linkTo = "/", authenticated = true}) {
    const [hidden, setHidden] = useState(true);
    const extraClass = hidden && allowedToHide ? "opacity-50" : ""
    const hoverStart = () => {
        setHidden(false)
        hoverMethod(true)
    }
    const hoverExit = () => {
        setHidden(true)
        hoverMethod(false)
    }
  return (
    <div className={`relative top-0 left-0 bubble align-top inline-block text-center transition ease-in-out delay-50 hover:scale-110 hover:cursor-pointer mt-6 mb-6 ${extraClass}`} onMouseEnter={hoverStart} onMouseLeave={hoverExit}>
    {authenticated ? 
    <Link href={linkTo}>
        <img src={imgSrc} className="relative top-0 left-0 rounded-full w-3/4 m-auto border-solid border-red-400 border-2">
        </img>
        <span className="block text-xl">{children}</span>
    </Link>
    :  
    <div className="uaContainer">
        <img src={imgSrc} className={`uaImg top-0 left-0 rounded-full w-3/4 m-auto border-solid border-red-400 border-2`}>
        </img>
        <div className="overlay rounded-full"><div className="olText">Log In To Access This Function</div></div>
        <img src={lock} className="absolute left-1/2 top-1/2 w-1/3 m-auto"></img>
        <span className="block text-xl">{children}</span>
    </div>
  } 
    
    </div>
  )
}
