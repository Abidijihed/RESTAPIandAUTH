const { GET_POSTE } = require("../actionType/posteType")

const initialState={
    poste: []
}

const posteReducer=(state=initialState,{type,payload})=>{
    switch(type){
        case GET_POSTE:
            return ({...state,poste:payload})
            default:
                return state
    }
}
export default posteReducer