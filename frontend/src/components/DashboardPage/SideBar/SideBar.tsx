import Home from '../../shared/images/Home.png';
import CreditCard from '../../shared/images/Credit card.png';
import StocksLogo from '../../shared/images/Line_up.png';
import CryptoLogo from '../../shared/images/solidity-original.png';
import JournalLogo from '../../shared/images/Book_open_alt.png'
export const SideBar = () => {
  return (
    <div className='flex justify-center'>
      <div className="flex flex-col w-12 mt-10 space-y-14">
        <div>
          <div className="flex items-center justify-center p-2 bg-pc3">
            <img src={Home} alt="Home" />
          </div>
        </div>
        <div>
          <div className="flex items-center justify-center p-3 bg-pc3">
            <img src={CreditCard} alt="Credit Card" />
          </div>
        </div>
        <div>
          <div className="flex items-center justify-center p-3 bg-pc3">
            <img src={StocksLogo} alt="Stocks" />
          </div>
        </div>
        <div>
          <div className="flex items-center justify-center p-2 bg-pc3">
            <img src={CryptoLogo} alt="Crypto" />
          </div>
        </div>
        <div>
          <div className="flex items-center justify-center p-3 bg-pc3">
            <img src={JournalLogo} alt="Journal" />
          </div>
        </div>
      </div>

    </div>
  );
}
