import { useState } from 'react';
import { Position } from 'reactflow';
import { BaseNode } from './BaseNode';

export const TimerNode = ({ id }) => {
  const [seconds, setSeconds] = useState(5);
  const nodeHandles = [{ type: 'source', position: Position.Right, id: 'trigger' }];
  return (
    <BaseNode label="Timer" id={id} handles={nodeHandles}>
      <label style={{ fontSize: '12px' }}>Delay (s):</label>
      <input 
        type="number" 
        value={seconds} 
        onChange={(e) => setSeconds(e.target.value)} 
        style={{ width: '100%' }}
      />
    </BaseNode>
  );
};