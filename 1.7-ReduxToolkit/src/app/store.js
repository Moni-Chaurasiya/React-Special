// import { configureStore } from "@reduxjs/toolkit";
// //import reducer from "../feactures/todo/todoSlice";
// import todoReducer from "../feactures/todo/todoSlice";

// export const store = configureStore({
//   // reducer: reducer,
//   reducer: todoReducer,
// });

import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "../feactures/todo/todoSlice";

export const store = configureStore({
  reducer: {
    todo: todoReducer, // Key should be the slice name, like 'todo'
  },
});
