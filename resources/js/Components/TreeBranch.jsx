import { ExpandLess, ExpandMore } from "@mui/icons-material";
import { Collapse, List, ListItemButton, ListItemText } from "@mui/material";
import { useState } from "react"

export default function TreeBranch({classificaton, visible = false, striped = false}) {
  const [isOpen, setOpen] = useState(visible);
  const [childless, setChildless] = useState(classificaton.children == 0);
  const handleClick = () => {
    setOpen(!isOpen);
  };
  return (
    <>
    <ListItemButton onClick={handleClick} sx={{ pl: classificaton.level + 1, backgroundColor: striped ? "silver" : "", color: striped ? "black" : "whitesmoke" }}>
          <ListItemText primary={`${classificaton.level}: ${classificaton.name}`} />    
          {childless ? "" : isOpen ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
        {childless ? "" :
        <Collapse in={isOpen} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          {classificaton.children.map((child) => <TreeBranch classificaton={child} striped={!striped}/>)}
          </List>
        </Collapse> }
    </>
  )
}
