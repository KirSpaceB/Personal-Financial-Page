import DashboardPage from "../DashboardPage/DashboardPage";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { StocksPage } from "../StocksPage/StocksPage";
import { CryptoPage } from "../CryptoPage/CryptoPage";
import { JournalPage } from "../JournalPage/JournalPage";
import { SideBar } from "../shared/SideBar/SideBar";

const router = createBrowserRouter([
  {
    path:'/',
    element:<DashboardPage/>
  },
  {
    path:'/StocksPage',
    element:<StocksPage/>
  },
  {
    path:'/CryptoPage',
    element:<CryptoPage/>
  },
  {
    path:'/JournalPage',
    element:<JournalPage/>
  }
]);

export const App = () => {

  return (
    <>
      <div className="min-h-screen bg-pc1">
        <aside className="absolute w-20 h-screen mr-10 bg-pc2">
          <SideBar/>
        </aside>
        <RouterProvider router={router}/>
      </div>
    </>
  )
}