        //to display the message

        let chatScreen = document.getElementById('chat');

        chatScreen.innerHTML = `
            <li class="loader"><div></div></li>
            <li class="loader"><div></div></li>
            <li class="loader"><div></div></li>
            <li class="loader"><div></div></li>
            <li class="loader"><div></div></li>
            <li class="loader"><div></div></li>
        `

        function MessageLoader() {
            messageFolder.on('value', (data) => {
                //we are checking if value is there or not in messagesFOlder if it is tehre we are runnig one callbackfunction that bis arrow function
                console.log(data);
                chatScreen.innerHTML = '';
                data.forEach((msg) => {
                    console.log(msg.val());

                    const {
                        message,
                        userEmail,
                        time
                    } = msg.val();
                    console.log(message);
                    console.log(userEmail);
                    console.log(time);
                    const messageTime = new Date(time) || new Date();
                   
                    if(userEmail==localStorage.getItem('user')){
                        chatScreen.innerHTML +=
                        `
                           <li class="my_message">
                            <div class="msg">
                          <p>  ${message} </p>
                            <small>${messageTime.getDate()}<sup>th</sup> ${messageTime.getHours()}:${messageTime.getMinutes()}:${messageTime.getSeconds()}</small>
                            <small class="name">${userEmail.split('@')[0]}</small>
                            </div>
                            <div class="icon" onclick="speekMessage('${message}')">  <i class="fa-solid fa-play"></i>  </div> 
                             <img src="https://static.vecteezy.com/system/resources/thumbnails/003/337/584/small/default-avatar-photo-placeholder-profile-icon-vector.jpg" alt="">
                            </li>`
                    }else{
                        chatScreen.innerHTML +=
                        `
                             <li class="friend_message">
                                
                             <img src="https://static.vecteezy.com/system/resources/thumbnails/003/337/584/small/default-avatar-photo-placeholder-profile-icon-vector.jpg" alt="">
                             <div class="icon" onclick="speekMessage('${message}')">  <i class="fa-solid fa-play"></i>  </div> 
                           <div class="msg">
                             <p>  ${message} </p>
                            <small>${messageTime.getDate()}<sup>th</sup> ${messageTime.getHours()}:${messageTime.getMinutes()}:${messageTime.getSeconds()}</small>
                             <small class="name">${userEmail.split('@')[0]}</small>
                            </div>
                            
                            </li>`
                    }


                })


            })
        }
        // <b>User:</b> ${userEmail}<br>
        //             <b>date:</b> ${new Date(time).toLocaleDateString()} <br>
        //             <b>Time:</b> ${new Date(time).toLocaleTimeString()}<br>

        MessageLoader();