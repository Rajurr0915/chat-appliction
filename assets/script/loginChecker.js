var user = localStorage.getItem('user');
     //we are getting thed data from local storage with key name is user and storing in user variable
    console.log(user);

    if (user == null) {
        //if user is not present in local storage that will be null that time send that user to login page
        //in html we can visit from page to onother one page using anchor tag inn javascript we can use window.location.href=destination link
        window.location.href = './index.html'
    }