import DashboardPage from "../DashboardPage/DashboardPage";
import { BrowserRouter, createBrowserRouter, Route, RouterProvider, Routes } from "react-router-dom";
import { StocksPage } from "../StocksPage/StocksPage";
import { CryptoPage } from "../CryptoPage/CryptoPage";
import { JournalPage } from "../JournalPage/JournalPage";
import { SideBar } from "../shared/SideBar/SideBar";
import { ActivePageProvider } from "../shared/SideBar/ActivePageContext";

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
    <ActivePageProvider>
      <BrowserRouter>
        <div className="min-h-screen bg-pc1">
          <aside className="absolute w-20 h-screen mr-10 bg-pc2">
            <SideBar/>
          </aside>
          <Routes>
            <Route
            path="/"
            element={<DashboardPage/>}
            />
            <Route
            path="/StocksPage"
            element={<StocksPage/>}
            />
            <Route
            path="/CryptoPage"
            element={<CryptoPage/>}
            />
            <Route
            path="/JournalPage"
            element={<JournalPage/>}
            />
          </Routes>
        </div>
      </BrowserRouter>
    </ActivePageProvider>
  )
}