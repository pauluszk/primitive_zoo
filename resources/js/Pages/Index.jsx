
import ZooFooter from "@/Components/ZooFooter";
import ZooHeader from "@/Components/ZooHeader";
import { Head } from "@inertiajs/react";
import "./Index.css"
import AuthenticatedBubbles from "@/Components/AuthenticatedBubbles";
export default function Index({auth}) {
   
    const bgColor = "bg-slate-900";
    return (
    <>
    <Head title="Home Page" />
    <ZooHeader bgProp={bgColor} isHome={true} isLoggedIn={auth.user}/>
        <div className="hTagContainer m-auto text-center"><h1 className="text-3xl mt-9 mb-3">Primitive Zoo</h1></div>
    
        <AuthenticatedBubbles isLoggedIn={auth.user}/>
        
    <ZooFooter bgProp={bgColor}/>
    </>
  )
}