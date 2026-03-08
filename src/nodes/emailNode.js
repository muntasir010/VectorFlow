import { useState } from 'react';
import { Position } from 'reactflow';
import { BaseNode } from './BaseNode';

export const EmailNode = ({ id }) => {
  const [email, setEmail] = useState('');
  const nodeHandles = [{ type: 'target', position: Position.Left, id: 'data' }];
  return (
    <BaseNode label="Email Notification" id={id} handles={nodeHandles}>
      <input 
        type="email" 
        placeholder="recipient@example.com"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        style={{ width: '100%', fontSize: '12px' }}
      />
    </BaseNode>
  );
};