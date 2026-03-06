import { useState, useEffect, useRef } from 'react';
import { Position } from 'reactflow';
import { BaseNode } from './BaseNode';

export const TextNode = ({ id, data }) => {
  const [currText, setCurrText] = useState(data?.text || '{{input}}');
  const [variables, setVariables] = useState([]);
  const textAreaRef = useRef(null);

  // Detect variables ({{variable}})
  useEffect(() => {
    const regex = /\{\{\s*([a-zA-Z_$][a-zA-Z0-9_$]*)\s*\}\}/g;
    const matches = [...currText.matchAll(regex)];
    const newVars = [...new Set(matches.map(match => match[1]))];
    setVariables(newVars);
  }, [currText]);

  const handleTextChange = (e) => {
    setCurrText(e.target.value);
    if (textAreaRef.current) {
      textAreaRef.current.style.height = 'auto';
      textAreaRef.current.style.height = textAreaRef.current.scrollHeight + 'px';
    }
  };

  const nodeHandles = [
    { type: 'source', position: Position.Right, id: 'output' },
    ...variables.map((v, index) => ({
      type: 'target',
      position: Position.Left,
      id: v,
      style: { top: `${(index + 1) * (100 / (variables.length + 1))}%` }
    }))
  ];

  return (
    <BaseNode label="Text" id={id} handles={nodeHandles}>
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <label style={{ fontSize: '12px' }}>Text Content:</label>
        <textarea
          ref={textAreaRef}
          value={currText}
          onChange={handleTextChange}
          style={{ width: '100%', border: '1px solid #ddd', borderRadius: '4px', resize: 'none', overflow: 'hidden' }}
        />
      </div>
    </BaseNode>
  );
}