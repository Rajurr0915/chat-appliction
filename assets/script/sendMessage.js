  //message send code
  var messageInput = document.getElementById('message'); //getting message input

  function messageSendhanlder() {
   
      // console.log(messageInput.value);
      if (messageInput.value == '') {
          alert('please enter the message')
      } else {
          let newMessage = {
              message: messageInput.value,
              time: Date.now(),
              userEmail: localStorage.getItem('user')
          }
          console.log(newMessage);
          messageFolder.push(newMessage);
          messageInput.value = '';
      }

      // messageFolder.push()
  }