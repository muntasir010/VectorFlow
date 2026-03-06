// BaseNode.js
import { Handle } from 'reactflow';

export const BaseNode = ({ label, id, children, minWidth = 200, minHeight = 80, styles = {}, handles = [] }) => {
  return (
    <div style={{
      minWidth: minWidth, 
      minHeight: minHeight, 
      border: '2px solid #7c3aed',
      borderRadius: '10px',
      background: '#fff',
      padding: '10px',
      display: 'flex',
      flexDirection: 'column',
      boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
      ...styles
    }}>
      {/* Node Header */}
      <div style={{ 
        marginBottom: '10px', 
        borderBottom: '1px solid #eee', 
        paddingBottom: '5px',
        fontWeight: 'bold',
        color: '#4c1d95'
      }}>
        <span>{label}</span>
      </div>

      {/* Node Content */}
      <div style={{ flex: 1 }}>
        {children}
      </div>

      {/* Dynamic Handles or Connection Points */}
      {handles.map((handle, index) => (
        <Handle
          key={index}
          type={handle.type} // "source" or "target"
          position={handle.position} // Position.Left or Position.Right
          id={`${id}-${handle.id}`}
          style={{ 
            background: '#7c3aed', 
            width: '8px', 
            height: '8px',
            ...handle.style 
          }}
        />
      ))}
    </div>
  );
};