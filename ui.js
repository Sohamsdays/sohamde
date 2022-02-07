class UI {
    constructor(){
        this.profile = document.getElementById('profile')
    }

    showProfile(user){
        console.log(user)
        this.profile.innerHTML = `
            
            <img src="${user.avatar_url}" >
            <h1>NAME: ${user.name}</h1>
            <h2>PUBLIC REPOS: ${user.public_repos}</h2>
            <h2>FOLLOWING:${user.following} </h2>
            <h2>FOLLOWERS: ${user.followers} </h2>
        
        
        
        
        


        
        
        `
    
    
    } 

}