import Home from '../../shared/images/Home.png';
import CreditCard from '../../shared/images/Credit card.png';
import StocksLogo from '../../shared/images/Line_up.png';
import CryptoLogo from '../../shared/images/solidity-original.png';
import JournalLogo from '../../shared/images/Book_open_alt.png'
export const SideBar = () => {
  return (
    <div className="flex flex-col items-center w-16 space-y-4">
      <div className="w-full">
        <div className="flex items-center justify-center p-4 rounded-md bg-pc3">
          <img src={Home} alt="Home" />
        </div>
      </div>
      <div className="w-full">
        <div className="flex items-center justify-center p-4 rounded-md bg-pc3">
          <img src={CreditCard} alt="Credit Card" />
        </div>
      </div>
      <div className="w-full">
        <div className="flex items-center justify-center p-4 rounded-md bg-pc3">
          <img src={StocksLogo} alt="Stocks" />
        </div>
      </div>
      <div className="w-full">
        <div className="flex items-center justify-center p-4 rounded-md bg-pc3">
          <img src={CryptoLogo} alt="Crypto" />
        </div>
      </div>
      <div className="w-full">
        <div className="flex items-center justify-center p-4 rounded-md bg-pc3">
          <img src={JournalLogo} alt="Journal" />
        </div>
      </div>
    </div>
  );
}
