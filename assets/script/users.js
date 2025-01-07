    const usersContainer = document.getElementById('users');
    //reading data from users databases folder
    usersContainer.innerHTML = `
        <div class="shimmer-card">
            <div class="circle"></div>
            <div>
                <div class="space"></div>
                <div class="space2"></div>
            </div>
        </div>

         <div class="shimmer-card">
            <div class="circle"></div>
            <div>
                <div class="space"></div>
                <div class="space2"></div>
            </div>
        </div>


         <div class="shimmer-card">
            <div class="circle"></div>
            <div>
                <div class="space"></div>
                <div class="space2"></div>
            </div>
        </div>
        

         <div class="shimmer-card">
            <div class="circle"></div>
            <div>
                <div class="space"></div>
                <div class="space2"></div>
            </div>
        </div>

         <div class="shimmer-card">
            <div class="circle"></div>
            <div>
                <div class="space"></div>
                <div class="space2"></div>
            </div>
        </div>
    `
   function usersLoader(){
    usersFolder.on('value', function(allusers){
        console.log(allusers);
    usersContainer.innerHTML = ''
        allusers.forEach(function(user){
            console.log(user.val());
            const {emailAddress, name} = user.val();
            usersContainer.innerHTML += `
                <div class="user-card">
                <img src="https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png?20150327203541" alt=${name}>
                   <div>
                    <p>${name}</p>
                    <small>${emailAddress}</small>
                   </div>
                </div>
            `
        });
        
    })
   }
   usersLoader();