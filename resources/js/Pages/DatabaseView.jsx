import ZooFooter from "@/Components/ZooFooter";
import ZooHeader from "@/Components/ZooHeader";
import { Head } from "@inertiajs/react";

export default function DatabaseView() {
  return (
    <>
    <Head title="Database" />
    <ZooHeader bgProp={"bg-slate-900"}/>
        <div>DatabaseView</div>
    <ZooFooter bgProp={"bg-slate-900"}/>
    </>
  )
}
