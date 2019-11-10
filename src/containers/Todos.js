import {connect} from 'react-redux';
import {toggleTodo} from '../actions';
import Todos from '../components/Todos';

const getTodos = (todos, filter) => {
    switch (filter) {

        case "ALL": // loop array all data
            return todos

            case "COMPLETED":
                return todos.filter(item => item.completed) //loop array where completed = true

                case "ACTIVE":
                    return todos.filter(item => !item.completed) //lopp array where active = true
    
        default: //when error return filter tidak dikenali
           throw new Error("Filer tidak dikenali:" + filter)
    }
}
const mapDispatchToProps = dispatch =>({
    toggleTodo: id => dispatch(toggleTodo(id))
})
const mapStateToProps = state =>({
    todos: getTodos(state.todos, state.filter)
})
export default connect(
    mapStateToProps,
    mapDispatchToProps,
    )(Todos)