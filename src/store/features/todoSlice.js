import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  // localstorageda ma'lumot bo'lsa oladi bulmasa [] qaytaradi
  value: JSON.parse(localStorage.getItem('todos')) || [],
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

      //localstorage saqlash uchun ishlatiladi
      localStorage.setItem("todos", JSON.stringify(state.value))
    }
  },
})

export const { addTodo } = todoSlice.actions

export default todoSlice.reducer