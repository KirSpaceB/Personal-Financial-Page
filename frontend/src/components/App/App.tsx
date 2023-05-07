import DashboardPage from "../DashboardPage/DashboardPage";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { StocksPage } from "../StocksPage/StocksPage";
import { CryptoPage } from "../CryptoPage/CryptoPage";
import { JournalPage } from "../JournalPage/JournalPage";

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