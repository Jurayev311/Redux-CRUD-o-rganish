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
    },
    deleteTodo: (state, action) => {
      // Yangi massiv yaratmiz va localstorage ga saqlaymiz
      const updateTodo = state.value.filter(todo => todo.id !== action.payload)

      // redux storeni yangilaymiz
      state.value = updateTodo

      // yangilangan ma'lumotni localstoragega saqlaymiz
      localStorage.setItem("todos", JSON.stringify(updateTodo))     
    }
  },
})

export const { addTodo, deleteTodo } = todoSlice.actions

export default todoSlice.reducer