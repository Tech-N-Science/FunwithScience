export const initialstate={
    user:null
}

export default (initialState,action)=>{
    if(action.type === "Login")
    {
        return{
            ...initialState,
            user:action.payload
        }
    }
    else if(action.type === "Logout")
    {
        return{
            ...initialState,
            user:null
        }
    }
    else{
        return initialState
    }
}