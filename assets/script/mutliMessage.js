var multi_message = document.getElementById('multi_message');
var multi_count = document.getElementById('multiCount');
var multi_send = document.getElementById('multi_send');

var single_message = document.getElementById('message');
var single_send = document.getElementById('single_send');

var multi_display_btn = document.getElementById('multi');

var isDisplay = false;
function displayMultiMessage(){
    if(isDisplay == true){
        //display normal messages
        single_message.style.display = 'block'
        single_send.style.display = 'block'

      
        multi_message.style.display = 'none'
        multi_count.style.display = 'none'
        multi_send.style.display = 'none'

        multi_display_btn.innerHTML = '<i class="fa-solid fa-star-of-life"></i>'

    }else{
        single_message.style.display = 'none'
        single_send.style.display = 'none';

        multi_message.style.display = 'block'
        multi_count.style.display = 'block'
        multi_send.style.display = 'block'

        multi_display_btn.innerHTML = '<i class="fa-solid fa-xmark"></i>'
    }
    isDisplay = !isDisplay;
}


//multiple message
function sendMultipleMessages(){
          
    for(let i=0; i<=multi_count.value-1; i++){
        sendHandler();
    }
    multi_message.value ='';
    multi_count.value = '';
       
}

function sendHandler(){
    const newMessage ={ message: multi_message.value,
            time: Date.now(),
            userEmail: localStorage.getItem('user')
        }
        // console.log(newMessage);
        messageFolder.push(newMessage);
        return;
}
