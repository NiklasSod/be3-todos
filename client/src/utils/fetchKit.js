export default class FetchKit{
    static loginFetch = (formData) => {
        const url = "http://localhost:3000/api/usersRoute/login" 

        return fetch(url, {
            method: "POST", 
            headers:{
                "accept": "application/json", 
                "Content-Type": "application/json"
            }, 
            body: JSON.stringify(formData)
        
        })
    }
    static registerFetch = (formData) => {
        const url = "http://localhost:3000/api/usersRoute/register" 

        return fetch(url, {
            method: "POST", 
            headers:{
                "accept": "application/json", 
                "Content-Type": "application/json"
            }, 
            body: JSON.stringify(formData)
            
        
        })
    }
}
