import axios from "axios";

export const signup = async ({name,barber}) => {
try{

    await axios.post("/api/users/reserve",{name,barber});
}

catch(error) {
    if(error.response && error.response.data.message){
        throw new Error(error.response.data.message)
    
    }
}

}

export const line = async () => {
    try{
        const {data} = await axios.get("/api/users/reserve")
        return data
    }
    
    catch(error) {
        if(error.response && error.response.data.message){
            throw new Error(error.response.data.message)
        
        }
    }}