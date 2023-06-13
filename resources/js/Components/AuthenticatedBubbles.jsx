import Bubble from "@/Components/Bubble";
import apes from "../../images/apes1.png";
import apes2 from "../../images/apes2.png";
import dna from "../../images/dna.png";
import { useState } from "react";
export default function AuthenticatedBubbles({isLoggedIn = false}) {
    const [hoverInProgress, setHoverInProgress] = useState(false);
    const handleHoverInProgress = (toSet) => {
        setHoverInProgress(toSet)
    }
  return (
    <div className="navigationBubbles m-auto w-1/2 flex mt-6 flex-col overflow-hidden md:flex-row md:w-3/4">
            <Bubble linkTo={"/database"} imgSrc={apes2} hoverMethod={handleHoverInProgress } allowedToHide={hoverInProgress}>See Database</Bubble>
            
            <Bubble imgSrc={apes} hoverMethod={handleHoverInProgress} allowedToHide={hoverInProgress} authenticated={isLoggedIn}>Your Animals</Bubble>
            <Bubble linkTo={"/species/new"}  imgSrc={dna} hoverMethod={handleHoverInProgress} allowedToHide={hoverInProgress} authenticated={isLoggedIn}>Add New Species</Bubble>
        </div>
  )
}
