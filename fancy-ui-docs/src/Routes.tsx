import { createBrowserRouter, RouterProvider, type RouteObject } from "react-router"
import Error from "./components/fallback/Error"
import Root from "./components/Root"
import Welcome from "./components/Outlet/Welcome"
import { lazy } from "react"
var DivView = lazy(() => import('./components/Outlet/DivView'))
var ModalView = lazy(() => import('./components/Outlet/ModalView'))

var Routes = () => {
  var routes = [
    {
      path: '/',
      element: <Root />,
      errorElement: <Error />,
      children: [
        {
          index: true,
          element: <Welcome />
        },
        {
          path: 'Div',
          element: <DivView />
        },
        {
          path: 'Modal',
          element: <ModalView />
        }
      ]
    }
  ] as const satisfies RouteObject[]

  var router = createBrowserRouter(routes)

  return (
    <RouterProvider router={router} />
  )
}

export default Routes
