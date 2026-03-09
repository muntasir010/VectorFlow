import { ReactFlowProvider } from "reactflow";
import { PipelineToolbar } from "./toolbar";
import { PipelineUI } from "./ui";
import { SubmitButton } from "./submit";

function App() {
  return (
    <div style={{ height: "100vh", width: "100vw" }}>
      {/* Pipeline Toolbar */}
      <ReactFlowProvider>
        <PipelineToolbar />

        {/* Pipeline UI */}
        <PipelineUI />

        {/* Submit Button */}
        <SubmitButton />
      </ReactFlowProvider>
    </div>
  );
}

export default App;
