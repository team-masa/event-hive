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
import SignInLayout from './layouts/signInLayout';
import SignLayout from './layouts/signUpLayout';
import CreateEventLayout from './layouts/createEventLayout';


function App() {
  const router = createBrowserRouter([


    {
      path: "/",
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
      path: "/",
      element: <SignInLayout />,
      children: [
        
          
        {
          index: true,
          path: "/sign-in",
          element:<SignIn/>
        },

      ]


    },

    {
      path: "/",
      element: <SignLayout />,
      children: [
        
          
        {
          index: true,
          path: "/sign-UP",
          element:<SignUp/>
        },

      ]


    },


    {
      path: "/",
      element: <CreateEventLayout />,
      children: [
        
          
        {
          index: true,
          path: "/create-event",
          element:<CreateEvent/>
        },

      ]


    },


  ]);

  return <RouterProvider router={router} />;

}

export default App