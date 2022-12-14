import { createSlice } from '@reduxjs/toolkit'

const course = createSlice({
  name: 'course',
  initialState: {
    courseSelected:'physics',
    courses:{
      "physics" : [
        {quarter : 1, marks : 0, grade : 'F'},
        {quarter : 2, marks : 0, grade : 'F'},
        {quarter : 3, marks : 0, grade : 'F'},
        {quarter : 4, marks : 0, grade : 'F'},
      ],
      "chemistry" : [
        {quarter : 1, marks : 0, grade : 'F'},
        {quarter : 2, marks : 0, grade : 'F'},
        {quarter : 3, marks : 0, grade : 'F'},
        {quarter : 4, marks : 0, grade : 'F'},
      ],
      "mathematics" : [
        {quarter : 1, marks : 0, grade : 'F'},
        {quarter : 2, marks : 0, grade : 'F'},
        {quarter : 3, marks : 0, grade : 'F'},
        {quarter : 4, marks : 0, grade : 'F'},
      ],
      "english" : [
        {quarter : 1, marks : 0, grade : 'F'},
        {quarter : 2, marks : 0, grade : 'F'},
        {quarter : 3, marks : 0, grade : 'F'},
        {quarter : 4, marks : 0, grade : 'F'},
      ],
      "computer" : [
        {quarter : 1, marks : 0, grade : 'F'},
        {quarter : 2, marks : 0, grade : 'F'},
        {quarter : 3, marks : 0, grade : 'F'},
        {quarter : 4, marks : 0, grade : 'F'},
      ]
    }
  },
  reducers: {
    updateMarks(state, action) {

        let grade = 'F';
        let nums = Number(action.payload.marks);
        if(nums > 90){
            grade = 'A';
        }else if(nums > 80){
            grade = 'B';
        }else if(nums > 70){
            grade = 'C';
        }else if(nums > 60){
            grade = 'D';
        }else if(nums > 50){
            grade = 'E';
        }else{
            grade = 'F';
        }

      state.courses[action.payload.course].find(course=>{ return course.quarter == action.payload.quarter;}).marks = Number(action.payload.marks);
      state.courses[action.payload.course].find(course => course.quarter == action.payload.quarter).grade = grade;
    }, 
    selectCourse(state, action) {
      console.log(action.payload)
      state.courseSelected = action.payload;
    },
    resetCourseQuarter(state,action){
      state.courses[action.payload.course].find(course=>course.quarter == action.payload.quarter).marks = 0;
      state.courses[action.payload.course].find(course => course.quarter == action.payload.quarter).grade = 'F';
    }
  }
})
export let getAllCourses = (state)=>state
export const { updateMarks, selectCourse, resetCourseQuarter } = course.actions;
export default course.reducer