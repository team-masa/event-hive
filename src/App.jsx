import React from 'react';
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import RootLayout from "./layouts/rootLayout";


function App() {
  const router = createBrowserRouter([


    {
      path: "/",
      element: <RootLayout />,
      children: []

        
    },

  ]);

  return <RouterProvider router={router} />;

}

export default App