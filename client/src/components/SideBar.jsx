import React from "react";
import { Button } from "@mui/material";

const SideBar = () => {
  const onDragStart = (event, nodeType) => {
    event.dataTransfer.setData("application/reactflow", nodeType);
    event.dataTransfer.effectAllowed = "move";
  };

  const nodes = [
    { name: "Start", type: "start" },
    { name: "Filter Data", type: "filter" },
    { name: "Wait", type: "wait" },
    { name: "Convert Format", type: "convert" },
    { name: "Send POST Request", type: "send" },
    { name: "End", type: "end" },
  ];

  return (
    <>
      {nodes.map((node, index) => {
        return (
          <Button key={index}>
            <div
              onDragStart={(event) => onDragStart(event, node.type)}
              draggable
            >
              {node.name}
            </div>
          </Button>
        );
      })}
    </>
  );
};
export default SideBar;
