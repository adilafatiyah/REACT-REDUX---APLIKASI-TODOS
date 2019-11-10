const filter = (state = "ALL", action)=>{ //menampilkan semua data
    switch (action.type) { //action type cuma 1
        case "SET_FILTER": //nama function
            return action.filter //return filter
            break;
    
        default:
            return state
    }
}
export default filter