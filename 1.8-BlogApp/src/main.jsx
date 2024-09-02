import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { Provider } from "react-redux";
import store from "./store/store.js";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// Import components
import {
  Home,
  LoginPage,
  SignupPage,
  AddPost,
  EditPost,
  Post,
  AllPosts,
  AuthLayout,
} from "./component/index.js"; // Ensure these names match with your index.js exports

import "./index.css";

// Create router
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/login",
        element: (
          <AuthLayout authentication={false}>
            <LoginPage />
          </AuthLayout>
        ),
      },
      {
        path: "/signup",
        element: (
          <AuthLayout authentication={false}>
            <SignupPage />
          </AuthLayout>
        ),
      },
      {
        path: "/all-posts",
        element: (
          <AuthLayout authentication>
            <AllPosts />
          </AuthLayout>
        ),
      },
      {
        path: "/add-post",
        element: (
          <AuthLayout authentication>
            <AddPost />
          </AuthLayout>
        ),
      },
      {
        path: "/edit-post/:slug",
        element: (
          <AuthLayout authentication>
            <EditPost />
          </AuthLayout>
        ),
      },
      {
        path: "/post/:slug",
        element: <Post />,
      },
    ],
  },
]);

// Render application
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
/*
src / appwrite / auth.js;
conf.js;
component / container / Container.jsx;
Footer / Footer.jsx;
Header / Header.jsx;
Logout.jsx;
pages / Home.jsx;
EditPost.jsx;
Post.jsx;
Signup.jsx;
Login.jsx;
AddPost.jsx;
AllPosts.jsx;
Post - Form / PostForm.jsx;
AuthLayout.jsx;
Button.jsx;
index.js;
Input.jsx;
Login.jsx;
Logo.jsx;
PostCard.jsx;
RTE.jsx;
Select.jsx;
Signup.jsx;
conf / config.js;
store / authSlice.js;
store.js;
App.jsx;
index.css;
main.jsx;
*/
