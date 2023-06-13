import TreeBranch from "@/Components/TreeBranch";
import ZooFooter from "@/Components/ZooFooter";
import ZooHeader from "@/Components/ZooHeader";
import { Head } from "@inertiajs/react";
import { ExpandMore, ExpandLess } from "@mui/icons-material";
import { Collapse, List, ListItemButton, ListItemText, ListSubheader } from "@mui/material";
import { useEffect } from "react";
import { useState } from "react";

export default function DatabaseView() {
  const [hierarchy, setHierarchy] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const [isOpen, setOpen] = useState(false);
  const handleClick = () => {
    setOpen(!isOpen);
  };
  useEffect(() => {
    fetch("api/classifications/getTree")
    .then(res => res.json())
    .then((data) =>{
      setHierarchy(data);
      setIsLoaded(true);
    })
  }, [])
  return (
    <>
    <Head title="Database" />
    <ZooHeader bgProp={"bg-slate-900"}/>
      <List subheader={<ListSubheader>Tree Structure</ListSubheader>}>
       {isLoaded ?<TreeBranch classificaton={hierarchy[0]} visible/> : ""}
      </List>
      <ZooFooter bgProp={"bg-slate-900"}/>
    </>
  )
}
