import { configureStore } from '@reduxjs/toolkit'
import courseReducer from './reducers/course.reducer';
let store = configureStore({
    reducer: {
      courses: courseReducer,
    }
  })
export default store;