import React from "react";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import RootLayout from "./RootLayout.jsx";
import Blog from "./pages/Blog.jsx";
import Article from "./pages/Article.jsx";
import Registration from "./pages/Registration.jsx";
import Login from "./pages/Login.jsx";
import WriteBlog from "./pages/WriteBlog.jsx";

let router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path='/login' element={<Login />}/>
      <Route path='/registration' element={<Registration />}/>
      <Route path='/' element={<RootLayout />}>
        <Route path='' element={<Blog />}/>
        <Route path='/article/:param' element={<Article />}/>
        <Route path='write-blog' element={<WriteBlog />}/>
      </Route>
    </Route>
  )
);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
