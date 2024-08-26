import React, { useState } from 'react';
import axios from 'axios';

function ReplyBox({ threadId }) {
  const [replyBody, setReplyBody] = useState('');

  const handleReply = async () => {
    try {
      await axios.post(`https://hiring.reachinbox.xyz/api/v1/onebox/reply/${threadId}`, {
        from: 'your-email@example.com',
        to: 'recipient-email@example.com',
        subject: 'Re: Subject',
        body: replyBody,
      });
      alert('Reply sent!');
    } catch (error) {
      console.error('Reply error:', error);
    }
  };

  return (
    <div className="reply-box">
      <textarea value={replyBody} onChange={(e) => setReplyBody(e.target.value)} />
      <button onClick={handleReply}>Send Reply</button>
    </div>
  );
}

export default ReplyBox;
