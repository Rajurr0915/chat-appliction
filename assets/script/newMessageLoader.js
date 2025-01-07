  //check new messages added or not
  let audioTag = document.getElementById('audiotag');
  messageFolder.on('child_added', async (data)=>{
      audioTag.play().catch(error=>{
          console.log('error playing audio');
          
      })
      chatScreen.scrollTop = chatScreen.scrollHeight;
  })
