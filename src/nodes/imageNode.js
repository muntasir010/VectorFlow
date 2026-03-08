import { Position } from 'reactflow';
import { BaseNode } from './BaseNode';

export const ImageNode = ({ id }) => {
  const nodeHandles = [
    { type: 'target', position: Position.Left, id: 'input' },
    { type: 'source', position: Position.Right, id: 'output' }
  ];
  return (
    <BaseNode label="Image Processor" id={id} handles={nodeHandles}>
      <div style={{ fontSize: '11px', textAlign: 'center', padding: '10px', border: '1px dashed #ccc' }}>
        📷 Image Input Selected
      </div>
    </BaseNode>
  );
};