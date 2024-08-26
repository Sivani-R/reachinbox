import React from 'react';

function TextEditor() {
  return (
    <div className="editor-container">
      <textarea placeholder="Type your reply here..."></textarea>
      <button>SAVE</button>
      <button>Variables</button>
    </div>
  );
}

export default TextEditor;
