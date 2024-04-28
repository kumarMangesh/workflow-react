import React, { useState } from "react";
import Workflow from "./Workflow";
import { Button, Toolbar } from "@mui/material";
import InputFileUpload from "./UploadFile";

const MainDisplay = () => {
  const [displayFlow, setDisplayFlow] = useState(true);
  const [workflowData, setWorkflowData] = useState([])

  const getWorkFlow = (workflow) => {
    setWorkflowData(workflow);
  };

  const toggleDisplay = () => {
    setDisplayFlow(!displayFlow);
  };

  return (
    <>
      <Toolbar />
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        {displayFlow ? (
          <Workflow workflowCall={(f) => getWorkFlow(f)} />
        ) : (
          <InputFileUpload workflowData={workflowData} />
        )}
        <span>
          <Button variant="contained" color="success" onClick={toggleDisplay}>
            {displayFlow ? "Save Workflow" : "Back"}
          </Button>
        </span>
      </div>
    </>
  );
};

export default MainDisplay;
