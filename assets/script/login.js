
let email = document.getElementById('email');
let password = document.getElementById('password');
let button = document.getElementById('btn');




async function loginHandler(){
     btn.innerText = 'Please wait..'
    console.log(email.value);
    console.log(password.value);//printing taht input user entered values

    try {
        const userCredentials = await authenticationRoom.signInWithEmailAndPassword(email.value, password.value); //this method required 2 paramaters
        // console.log(userCredentials);
        // console.log(typeof(userCredentials));
        // console.log(userCredentials.email);
        // console.log(userCredentials.uid);

        btn.innerText ='Sign in'
        alert('login is success')
        //to store data in local storage we need to send two parameters key name and value
        localStorage.setItem('user', userCredentials.email);
        window.location.href = './chat.html';
    } catch (error) {
        console.log(error);
        btn.innerText ='Sign in'
        alert('Invalid Login Credetials')
        
    }
    
}
