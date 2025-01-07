let email = document.getElementById('email');
let password = document.getElementById('password');
let username = document.getElementById('username');
let button = document.getElementById('btn');

async function registerHanlder(){
     btn.innerText = 'Please wait..'
    console.log(email.value);
    console.log(password.value);//printing taht input user entered values

    try {
        const newUser = await authenticationRoom.createUserWithEmailAndPassword(email.value, password.value); //this method required 2 paramaters
        console.log(newUser);
        //if the success
            const user = {
                name:username.value,
                emailAddress:email.value,
            }
            console.log(user);
            usersFolder.push(user);//inserting user object to users folder in firebase database
            
          btn.innerText ='Create Account';
          alert('registered successfully');
          window.location.href = './index.html'; //after success we are visting to index.html page to login
        
    } catch (error) {
        //if error
        console.log(error);
        btn.innerText ='Create Account'
        alert('Failed to create the account')
        
    }
    
}