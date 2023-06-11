import Bubble from "@/Components/Bubble";
import ZooFooter from "@/Components/ZooFooter";
import ZooHeader from "@/Components/ZooHeader";
import { Head, Link } from "@inertiajs/react";
import apes from "../../images/apes1.png";
import apes2 from "../../images/apes2.png";
import dna from "../../images/dna.png";
import { useState } from "react";
import "./Index.css"
export default function Index() {
    const [hoverInProgress, setHoverInProgress] = useState(false);
    const handleHoverInProgress = (toSet) => {
        setHoverInProgress(toSet)
    }
    
    return (
    <>
    <Head title="Home Page" />
    <ZooHeader bgProp={"bg-slate-900"} isHome={true}/>
        <div className="hTagContainer m-auto text-center"><h1 className="text-3xl mt-9 mb-3">Primitive Zoo</h1></div>
    
        <div className="navigationBubbles m-auto w-1/2 flex mt-6 flex-col overflow-hidden">
            <Link href="/database" className="overflow-y-auto"><Bubble imgSrc={apes} hoverMethod={handleHoverInProgress } allowedToHide={hoverInProgress}>See The Database</Bubble>
            </Link>
            <Link href="/"><Bubble imgSrc={apes2} hoverMethod={handleHoverInProgress} allowedToHide={hoverInProgress}>See The Animals</Bubble>
            </Link>
            <Link href="/"><Bubble imgSrc={dna} hoverMethod={handleHoverInProgress} allowedToHide={hoverInProgress}>Add New Species</Bubble>
        </Link>
            </div>
    
    <ZooFooter bgProp={"bg-slate-900"}/>
    </>
  )
}