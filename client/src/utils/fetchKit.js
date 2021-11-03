export default class FetchKit{
    static loginFetch = (formData) => {
        const url = "http://localhost:5000/api/usersRoute/signin"; 
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
        const url = "http://localhost:5000/api/usersRoute/signup"; 
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
