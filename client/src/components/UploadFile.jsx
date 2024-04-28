import * as React from "react";
import { styled } from "@mui/material/styles";
import { Button, Card } from "@mui/material";
import { postWorkflow } from "../axios";

const VisuallyHiddenInput = styled("input")({
  clip: "rect(0 0 0 0)",
  clipPath: "inset(50%)",
  height: 1,
  overflow: "hidden",
  position: "absolute",
  bottom: 0,
  left: 0,
  whiteSpace: "nowrap",
  width: 1,
});

export default function InputFileUpload({ workflowData }) {
  const [file, setFile] = React.useState(null);

  const handleChange = (e) => {
    console.log(e.target.files[0]);
    setFile(e.target.files[0]);
  };

  const handleSave = () => {
    if (workflowData.length && file) {
      const flow = workflowData.map((flow) => flow.source);
      console.log(flow);

      const formData = new FormData();

      formData.append("workflow", flow);
      formData.append("file", file);

      console.log(formData.get("file"))
      postWorkflow(formData)
    }
  };

  return (
    <Card
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "20vh",
        minWidth: "50vw",
        flexDirection: "column",
      }}
    >
      <Button
        component="label"
        role={undefined}
        variant="contained"
        tabIndex={-1}
        // startIcon={<CloudUploadIcon />}
      >
        Upload file
        <VisuallyHiddenInput type="file" onChange={handleChange} />
      </Button>

      <Button
        variant="contained"
        color="success"
        onClick={handleSave}
        style={{ marginTop: "10px" }}
      >
        Run Workflow
      </Button>
    </Card>
  );
}
