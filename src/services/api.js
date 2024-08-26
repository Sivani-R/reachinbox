export async function fetchOneboxData() {
    const response = await fetch('https://hiring.reachinbox.xyz/api/v1/onebox/list');
    return await response.json();
  }
  
  export async function deleteThread(thread_id) {
    await fetch(`https://hiring.reachinbox.xyz/api/v1/onebox/${thread_id}`, {
      method: 'DELETE',
    });
  }
  
  export async function replyThread(thread_id, replyData) {
    await fetch(`https://hiring.reachinbox.xyz/api/v1/onebox/reply/${thread_id}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(replyData),
    });
  }
  