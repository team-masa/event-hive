import React from 'react';
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import RootLayout from "./layouts/rootLayout";
import Landing from './pages/landing-page';
import SignIn from './pages/sign-in';
import SignUp from './pages/sign-up';
import Event from './pages/event';
import College from './pages/college';
import CreateEvent from './pages/create-event';
import NotFound from './pages/404';


function App() {
  const router = createBrowserRouter([


    {
      element: <RootLayout />,
      children: [
        {
          index: true,
          path: "/",
          element: <Landing />
        },

        

        {
          path:"/event",
          element:<Event/>
        },

        {
          path:"/college",
          element:<College/>
        },

        

        {
          path:"/404",
          element:<NotFound/>
        }
      ]


    },


    {
      path: "/sign-in",
      element: <SignIn />,
    },

    {
      path: "/sign-up",
      element: <SignUp />,
    },


    {
      path: "/create-event",
      element: <CreateEvent />,
    },


  ]);

  return <RouterProvider router={router} />;

}

export default App