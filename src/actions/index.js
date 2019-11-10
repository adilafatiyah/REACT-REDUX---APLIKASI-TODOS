let nextTodoid=0

export const addTodo = text=>({
    type:"ADD_TODO",
    id: nextTodoid++,
    text
})
export const toggleTodo =id=>({
    type:"TOGGLE_TODO",
    id
})

export const setFilter = filter =>({ //memanggil set filter
    type:"SET_FILTER",
    filter
})