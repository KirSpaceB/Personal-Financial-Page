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
          <a className="flex items-center justify-center p-2 bg-pc3" href='/'>
            <img src={Home} alt="Home" />
          </a>
        </div>
        <div>
          <a className="flex items-center justify-center p-3 bg-pc3" href='/JournalPage'>
            <img src={CreditCard} alt="Credit Card" />
          </a>
        </div>
        <div>
          <a className="flex items-center justify-center p-3 bg-pc3" href='StocksPage'>
            <img src={StocksLogo} alt="Stocks" />
          </a>
        </div>
        <div>
          <a className="flex items-center justify-center p-2 bg-pc3" href='/CryptoPage'>
            <img src={CryptoLogo} alt="Crypto" />
          </a>
        </div>
        <div>
          <a className="flex items-center justify-center p-3 bg-pc3" href='/JournalPage'>
            <img src={JournalLogo} alt="Journal" />
          </a>
        </div>
      </div>

    </div>
  );
}
