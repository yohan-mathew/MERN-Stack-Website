import axios from "axios";

export const signup = async ({name,barber,arrivalTime, service}) => {
try{
    console.log(arrivalTime)

    await axios.post("/api/users/reserve",{name,barber,arrivalTime, service});
}

catch(error) {
    if(error.response && error.response.data.message){
        throw new Error(error.response.data.message)
    
    }
}

};

export const line = async () => {
    try{
        const {data} = await axios.get("/api/users/reserve")
        return await data
    }
    
    catch(error) {
        if(error.response && error.response.data.message){
            throw new Error(error.response.data.message)
        
        }
    }};

export const signin = async ({email,password}) => {
    try{

        const {data} = await axios.post("/api/users/login",{email,password})
        return data
    }
    
    catch(error) {
        if(error.response && error.response.data.message){
            throw new Error(error.response.data.message)
        
        }
    }};

    export const adminauth = async () => {
        try{
    
            const {data} = await axios.post("/api/users/dashboard")
            return data
            
        }
        
        catch(error) {
            if(error.response && error.response.data.message){
                throw new Error(error.response.data.message)
            
            }
        }};

    export const deleteUser = async (objectId) => {
        try{
            await axios.delete(`/api/users/dashboard/${objectId}`)
        }
        catch(error){
            if(error.response && error.response.data.message){
                throw new Error(error.response.data.message)
            
            }
        }
    }

    export const addBarber = async (name) => {
        try{
            await axios.post(`/api/users/dashboard/${name}`)
        }
        catch(error){
            if(error.response && error.response.data.message){
                throw new Error(error.response.data.message)
            
            }
        }
    }


