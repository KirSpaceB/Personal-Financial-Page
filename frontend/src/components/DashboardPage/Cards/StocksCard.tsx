
import cardsDataJP from '../../../assets/cardsData-JP.json'

const StocksCard = () => {
  return (
    <div className="w-56 h-56 mt-10 bg-pc2">
      <h3>{cardsDataJP['stockTitle']}</h3>
    </div>
  )
}

export default StocksCard