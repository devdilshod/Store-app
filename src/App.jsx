import {
  About,
  Cart,
  Checkout,
  Error,
  HomeLayout,
  Landing,
  Login,
  Orders,
  Products,
  Register,
  SingleProduct
} from "./pages"
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import { ErrorElement } from "./components"
import { loader as landingLoader } from "./pages/Landing";
import { loader as singleProductLoader } from "./pages/SingleProduct";

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomeLayout />,
    children: [
      {
        index: true,
        element: <Landing />,
        errorElement: <ErrorElement />,
        loader: landingLoader
      },
      {
        path: 'about',
        element: <About />
      },
      {
        path: 'cart',
        element: <Cart />
      },
      {
        path: 'checkout',
        element: <Checkout />
      },
      {
        path: 'orders',
        element: <Orders />
      },
      {
        path: 'products',
        element: <Products />
      },
      {
        path: 'products/:id',
        element: <SingleProduct />,
        loader: singleProductLoader,
        errorElement: <ErrorElement />
      }
    ],
    errorElement: <Error />
  },
  {
    path: '/login',
    element: <Login />,
    errorElement: <Error />
  },
  {
    path: '/register',
    element: <Register />,
    errorElement: <Error />
  }
])

function App() {
  return (<RouterProvider router={router} />
  )
}

export default App
