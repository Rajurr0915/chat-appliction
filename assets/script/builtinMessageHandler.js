var allbuttons = document.querySelectorAll('.button');
console.log('all = ', allbuttons);

for(let btn of allbuttons){
    console.log(btn.innerText);

    btn.addEventListener('click', function(){
        messageInput.value = btn.innerText;
        messageSendhanlder();
    })
}



