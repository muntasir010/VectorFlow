import { useState } from 'react';
import { BaseNode } from './BaseNode';

export const NoteNode = ({ id, data }) => {
  const [note, setNote] = useState(data?.note || '');
  return (
    <BaseNode label="Note" id={id} handles={[]}>
      <textarea 
        placeholder="Write a note..."
        value={note}
        onChange={(e) => setNote(e.target.value)}
        style={{ width: '100%', borderRadius: '4px', border: '1px solid #ddd' }}
      />
    </BaseNode>
  );
};