import { Position } from 'reactflow';
import { BaseNode } from './BaseNode';

export const AlertNode = ({ id }) => {
  const nodeHandles = [{ type: 'target', position: Position.Left, id: 'trigger' }];
  return (
    <BaseNode label="Alert" id={id} handles={nodeHandles} styles={{ border: '2px solid #ef4444' }}>
      <div style={{ color: '#ef4444', fontWeight: 'bold', fontSize: '12px' }}>
        ⚠️ Trigger System Alert
      </div>
    </BaseNode>
  );
};