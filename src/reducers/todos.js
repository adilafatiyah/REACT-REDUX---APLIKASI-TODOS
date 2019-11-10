import { switchCase, switchStatement } from "@babel/types"

const todos = (state = [], action) =>{
switch (action.type) {
    case "ADD_TODO":
        return[
            ...state,
            {
                id: action.id,
                text: action.text,
                completed: false
            }
        ]
        
        break;

    case "TOGGLE_TODO":
        return state.map(
            todo =>(todo.id === action.id)
                    ? {...todo, completed : !todo.completed}//true
                    : todo //false
                    )
        break;

    default:
        return state
    }
}
export default todos