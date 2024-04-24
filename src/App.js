import { createBrowserRouter,  Outlet } from "react-router-dom";
import Home from './routes/Home'

const AppLayout = () => {
  return (
    <>
    <Outlet/>
    </>
  )
}

export const appRouter = createBrowserRouter([
  {
    path: '/', 
    element: <AppLayout/>,
    children: [
      {
        path: "/",
        element: <Home/>
      }
    ]
  }
])


