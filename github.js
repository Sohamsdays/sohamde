class GitHub{
    constructor(){
        this.client_id = '0a6a16d2ec19a3ff7a9f'
        this.client_secret = '25c3812654eae2b11edefbf288b9a591124faeda'

    }

    async getUser(user){

        try{
        const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&
        client_secret=${this.client_secret}`)
        //const profileResponse = await fetch(`https://api.github.com/users/${user}`)

        
        const profile = await profileResponse.json()

        return {
                profile
        }
    
    
    }

    catch(e){
        //console.log(e)
    }



}



}