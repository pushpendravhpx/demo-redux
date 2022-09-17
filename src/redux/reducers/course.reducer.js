import { createSlice } from '@reduxjs/toolkit'

const course = createSlice({
  name: 'course',
  initialState: {
    "physics" : [
      {quarter : 1, marks : 0},
      {quarter : 2, marks : 0},
      {quarter : 3, marks : 0},
      {quarter : 4, marks : 0},
    ],
    "chemistry" : [
      {quarter : 1, marks : 0},
      {quarter : 2, marks : 0},
      {quarter : 3, marks : 0},
      {quarter : 4, marks : 0},
    ],
    "mathematics" : [
      {quarter : 1, marks : 0},
      {quarter : 2, marks : 0},
      {quarter : 3, marks : 0},
      {quarter : 4, marks : 0},
    ],
    "english" : [
      {quarter : 1, marks : 0},
      {quarter : 2, marks : 0},
      {quarter : 3, marks : 0},
      {quarter : 4, marks : 0},
    ],
    "computer" : [
      {quarter : 1, marks : 0},
      {quarter : 2, marks : 0},
      {quarter : 3, marks : 0},
      {quarter : 4, marks : 0},
    ]
  },
  reducers: {
    updateMarks(state, action) {
      
      state[action.payload.course].find(course=>{ return course.quarter == action.payload.quarter;}).marks = Number(action.payload.marks);
    }, 
    todoToggled(state, action) {
      const todo = state.find(todo => todo.id === action.payload)
      todo.completed = !todo.completed
    }
  }
})
export let getAllCourses = (state)=>state
export const { updateMarks, todoToggled } = course.actions;
export default course.reducer