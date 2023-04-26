import { ICardInterface } from "./dashboardPageTypes";
// This abstraction is a modular programming approach where we separate logic through modules :p
// Here we can just change the value of the title property and it will change in our stock Card component
// Would this be fine or is it easier to have props insteads?
export const cardProps:ICardInterface = {
  stockTitle:'Stocks',
  cryptoTitle:'Crypto',
  journalTitle:'Journal'
}