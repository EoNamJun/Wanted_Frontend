import { createSlice } from '@reduxjs/toolkit';

const todosSlice = createSlice({
  name: 'TODOS',
  initialState: [
    { id: '1', title: '할 일 1', desc: '할 일 1 설명', completed: false },
    { id: '2', title: '할 일 2', desc: '할 일 2 설명', completed: false },
    { id: '3', title: '할 일 3', desc: '할 일 3 설명', completed: false },
  ],
  reducers: {
    addTodo(state, action) {
      state.push({
        id: action.payload.id,
        title: action.payload.title,
        desc: action.payload.desc,
        completed: false,
      });
    },
    toggleTodo: (state, action) => {
      const todo = state.find((todo) => todo.id === action.payload.id);
      if (todo) {
        todo.completed = !todo.completed;
      }
    },
    deleteTodo: (state, action) => {
      const index = state.findIndex((todo) => todo.id === action.payload.id);
      if (index !== -1) {
        state.splice(index, 1);
      }
    },
    modifyTodo: (state, action) => {
      const { id, title, desc, completed } = action.payload;
      const todo = state.find((todo) => todo.id === id);
      if (todo) {
        todo.title = title;
        todo.desc = desc;
        todo.completed = completed;
      }
    },
  },
});

export const { addTodo, toggleTodo, deleteTodo, modifyTodo } =
  todosSlice.actions;

export const selectTodos = (state, todoId) =>
  state.todos.find((todo) => todo.id === todoId);
export default todosSlice.reducer;
