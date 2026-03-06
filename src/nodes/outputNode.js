import { useState } from 'react';
import { Position } from 'reactflow';
import { BaseNode } from './BaseNode';

export const OutputNode = ({ id, data }) => {
  const [currName, setCurrName] = useState(data?.outputName || id.replace('customOutput-', 'output_'));
  const [outputType, setOutputType] = useState(data.outputType || 'Text');

  const nodeHandles = [{ type: 'target', position: Position.Left, id: 'value' }];

  return (
    <BaseNode label="Output" id={id} handles={nodeHandles}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
        <label style={{ fontSize: '12px' }}>Name:
          <input type="text" value={currName} onChange={(e) => setCurrName(e.target.value)} style={{ width: '100%' }} />
        </label>
        <label style={{ fontSize: '12px' }}>Type:
          <select value={outputType} onChange={(e) => setOutputType(e.target.value)} style={{ width: '100%' }}>
            <option value="Text">Text</option>
            <option value="File">Image</option>
          </select>
        </label>
      </div>
    </BaseNode>
  );
}