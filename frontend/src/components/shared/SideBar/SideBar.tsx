import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { ActivePageContext } from './ActivePageContext';
import Home from '../../shared/images/Home.png';
import CreditCard from '../../shared/images/Credit card.png';
import StocksLogo from '../../shared/images/Line_up.png';
import CryptoLogo from '../../shared/images/solidity-original.png';

export const SideBar = () => {
  const { activePage, setActivePage } = useContext(ActivePageContext);
  const navigate = useNavigate();

  const handleClick = (page:string) => {
    setActivePage(page);
    navigate(page);
  }
  return (
    <div className='flex justify-center'>
      <div className="flex flex-col w-12 mt-10 space-y-14">
        <div>
          <div className={`flex items-center justify-center p-2 cursor-pointer ${activePage === '/' ? 'bg-red-500' : 'bg-pc3'}`} onClick={() => handleClick('/')}>
            <img src={Home} alt="Home" />
          </div>
        </div>
        <div>
          <div className={`flex items-center justify-center p-3 cursor-pointer ${activePage === '/JournalPage' ? 'bg-red-500' : 'bg-pc3'}`} onClick={() => handleClick('/JournalPage')}>
            <img src={CreditCard} alt="Credit Card" />
          </div>
        </div>
        <div>
          <div className={`flex items-center justify-center p-3 cursor-pointer ${activePage === '/StocksPage' ? 'bg-red-500' : 'bg-pc3'}`} onClick={() => handleClick('/StocksPage')}>
            <img src={StocksLogo} alt="Stocks" />
          </div>
        </div>
        <div>
          <div className={`flex items-center justify-center p-2 cursor-pointer ${activePage === '/CryptoPage' ? 'bg-red-500' : 'bg-pc3'}`} onClick={() => handleClick('/CryptoPage')}>
            <img src={CryptoLogo} alt="Crypto" />
          </div>
        </div>
      </div>
    </div>
  );
}