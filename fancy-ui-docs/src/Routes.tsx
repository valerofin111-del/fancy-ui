import { createBrowserRouter, RouterProvider, type RouteObject } from "react-router-dom"
import Error from "./components/fallback/Error"
import Root from "./components/Root"
import Welcome from "./components/Outlet/Begin/Welcome/Welcome"
import { lazy } from "react"
var GetStarted = lazy(() => import('./components/Outlet/Begin/GetStarted/GetStarted'))
var DivView = lazy(() => import('./components/Outlet/DivView'))
var ModalView = lazy(() => import('./components/Outlet/ModalView'))

var Routes = () => {
  var routes : RouteObject[] = [
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
          path: 'begin',
          element: <GetStarted />,
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
  ]

    var router = createBrowserRouter(routes);

  return (
    <RouterProvider router={router} />
  )
}

export default Routes
