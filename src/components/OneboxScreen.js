import React, { useEffect, useState } from 'react';
import TextEditor from './TextEditor';
import { fetchOneboxData, deleteThread, replyThread } from '../services/api';

function OneboxScreen() {
  const [threads, setThreads] = useState([]);

  useEffect(() => {
    fetchOneboxData().then((data) => setThreads(data));
  }, []);

  const handleDelete = (thread_id) => {
    deleteThread(thread_id);
  };

  const handleReply = (thread_id, replyData) => {
    replyThread(thread_id, replyData);
  };

  return (
    <div className="onebox-container">
      <h1>Onebox</h1>
      <ul>
        {threads.map((thread) => (
          <li key={thread.id}>
            {thread.subject}
            <button onClick={() => handleDelete(thread.id)}>Delete</button>
            <button onClick={() => handleReply(thread.id, {})}>Reply</button>
          </li>
        ))}
      </ul>
      <TextEditor />
    </div>
  );
}

export default OneboxScreen;
