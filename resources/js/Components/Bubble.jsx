import { useState } from "react"
import "./Bubble.css"
export default function Bubble({children, imgSrc, hoverMethod, allowedToHide}) {
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
    <div className={`bubble align-top inline-block text-center transition ease-in-out delay-50 hover:scale-110 hover:cursor-pointer ${extraClass}`} onMouseEnter={hoverStart} onMouseLeave={hoverExit}>
        <img src={imgSrc} className="rounded-full w-3/4 m-auto border-solid border-red-400 border-2">
        </img>
        <span className="block text-xl">{children}</span>
    </div>
  )
}
