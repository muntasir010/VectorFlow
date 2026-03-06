// inputNode.js edited to use BaseNode for consistent styling and structure
import { useState } from 'react';
import { Position } from 'reactflow';
import { BaseNode } from './BaseNode';

export const InputNode = ({ id, data }) => {
  const [currName, setCurrName] = useState(data?.inputName || id.replace('customInput-', 'input_'));
  const [inputType, setInputType] = useState(data.inputType || 'Text');

  // Define the handles for this node
  const nodeHandles = [
    { type: 'source', position: Position.Right, id: 'value' }
  ];

  return (
    <BaseNode label="Input" id={id} handles={nodeHandles}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
        <label style={{ fontSize: '12px' }}>
          Name:
          <input 
            type="text" 
            value={currName} 
            onChange={(e) => setCurrName(e.target.value)} 
            style={{ width: '100%', marginTop: '3px' }}
          />
        </label>
        <label style={{ fontSize: '12px' }}>
          Type:
          <select value={inputType} onChange={(e) => setInputType(e.target.value)} style={{ width: '100%' }}>
            <option value="Text">Text</option>
            <option value="File">File</option>
          </select>
        </label>
      </div>
    </BaseNode>
  );
}