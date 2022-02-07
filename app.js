        // search input
    const github = new GitHub;
    const ui = new UI;
    const searchUser = document.getElementById("searchUser")

        //search input event listener
    searchUser.addEventListener("keyup",(e)=>{
            //get input text
    const userText = e.target.value;
    console.log(userText)
            if(userText !==""){
            // console.log(userText)

                // make http call
                github.getUser(userText)
                .then(data => {
                    if(data.profile.message === "Not Found"){
                        //show alert


                    }
                    else{

                        //show profile
                        ui.showProfile(data.profile);
                    
                    }

                    console.log(data);
                })



            }

            else {
                //clear profile

            }
        
            
        })