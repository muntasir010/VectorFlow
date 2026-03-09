import React from 'react';
import { useReactFlow } from 'reactflow';

export const SubmitButton = () => {
    // Get the current nodes and edges from the ReactFlow instance
    const { getNodes, getEdges } = useReactFlow();

    const handleSubmit = async () => {
        const nodes = getNodes();
        const edges = getEdges();

        try {
            const response = await fetch('http://localhost:8000/pipelines/parse', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ nodes, edges })
            });

            const result = await response.json();
            
            // Display the result in an alert box
            alert(
                `Nodes: ${result.num_nodes}\n` +
                `Edges: ${result.num_edges}\n` +
                `Is DAG: ${result.is_dag}`
            );
        } catch (error) {
            alert('Error: Backend is not responding!');
        }
    };

    return (
        <div style={{ display: 'flex', justifyContent: 'center', padding: '20px' }}>
            <button 
                onClick={handleSubmit}
                style={{
                    padding: '10px 20px',
                    backgroundColor: '#7c3aed',
                    color: 'white',
                    border: 'none',
                    borderRadius: '5px',
                    cursor: 'pointer',
                    fontWeight: 'bold'
                }}
            >
                Submit
            </button>
        </div>
    );
};
