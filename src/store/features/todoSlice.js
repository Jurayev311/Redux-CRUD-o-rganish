import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: [],
}

export const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    addTodo: (state, action) => {
      // input ichidagi qiymatni consolda ko'rish uchun
      console.log(action.payload); 
      // value ga todo ichidagi qiymatlarni berib yuboramiz
      state.value.push(action.payload)
    }
  },
})

export const { addTodo } = todoSlice.actions

export default todoSlice.reducer