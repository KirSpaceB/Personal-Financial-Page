import DashboardPage from "../DashboardPage/DashboardPage";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { StocksPage } from "../StocksPage/StocksPage";

const router = createBrowserRouter([
  {
    path:'/',
    element:<DashboardPage/>
  },
  {
    path:'/StocksPage',
    element:<StocksPage/>
  }
]);

function App() {

  return (
    <>
      <div className="min-h-screen bg-pc1">
        <RouterProvider router={router}/>
      </div>
    </>
  )
}

export default App