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
import { loader as productsLoader } from "./pages/Products";
import { action as registerAction } from "./pages/Register";
import { action as loginAction } from "./pages/Login";
import { store } from "./store"
import { loader as checkoutLoader } from "./pages/Checkout";
import { action as checkoutAction } from "./components/CheckoutForm";
import{loader as ordersLoader} from"./pages/Orders"

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
        element: <Checkout />,
        loader: checkoutLoader(store),
        action: checkoutAction(store)
      },
      {
        path: 'orders',
        element: <Orders />,
        loader:ordersLoader(store)
      },
      {
        path: 'products',
        element: <Products />,
        loader: productsLoader,
        errorElement: <ErrorElement />
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
    errorElement: <Error />,
    action: loginAction(store)
  },
  {
    path: '/register',
    element: <Register />,
    errorElement: <Error />,
    action: registerAction
  }
])

function App() {
  return (<RouterProvider router={router} />
  )
}

export default App
