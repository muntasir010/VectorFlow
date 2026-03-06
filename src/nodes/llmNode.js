import { Position } from 'reactflow';
import { BaseNode } from './BaseNode';

export const LLMNode = ({ id }) => {
  const nodeHandles = [
    { type: 'target', position: Position.Left, id: 'system', style: { top: `${100/3}%` } },
    { type: 'target', position: Position.Left, id: 'prompt', style: { top: `${200/3}%` } },
    { type: 'source', position: Position.Right, id: 'response' }
  ];

  return (
    <BaseNode label="LLM" id={id} handles={nodeHandles}>
      <div style={{ fontSize: '13px' }}>
        <span>This is an LLM node for processing prompts.</span>
      </div>
    </BaseNode>
  );
}