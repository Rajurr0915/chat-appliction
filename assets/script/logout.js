  function logoutHanlder() {
            if (confirm('Do you want to logout?')) {
                //if user clicks ok button this will be execute
                localStorage.removeItem('user');
                window.location.reload(); //to refresh the page
            } else {
                //if user clicks cancel button this will be  execute

            }

            // window.location.reload()
        }