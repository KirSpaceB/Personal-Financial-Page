import React, {useState, FormEvent, useContext, useEffect} from "react";
import { tickerAPI } from "./tickerAPI";
import { TickerContext } from "./TickerContext";

interface InputBarProps {
  svgPaths: string[];
}

export const InputBar: React.FC<InputBarProps> = ({ svgPaths }) => {

  const [tickerName, setTickerName] = useState<string>("");
  const {setTickerData} = useContext(TickerContext);

  const handleSubmit = async (e : FormEvent) => {
    e.preventDefault();
    const contextTickerData = await tickerAPI(tickerName);
    console.log("🚀 ~ file: InputBar.tsx:17 ~ handleSubmit ~ contextTickerData:", contextTickerData)
    setTickerData(contextTickerData);
  };
  
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTickerName(event.target.value);
  };
  return (
    <div className="">
      <div className="relative w-1/2">
        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-chart-dots absolute left-3 top-1/2 transform -translate-y-1/2" width="24" height="24" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#2c3e50" fill="none" strokeLinecap="round" strokeLinejoin="round">
          <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
          {svgPaths.map((path, index) => (
            <path key={index} d={path} />
          ))};
        </svg>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Ticker Name"
            className='w-64 h-10 border-gray-300 rounded-md focus:border-indigo-500 focus:outline-none pl-10'
            value={tickerName}
            onChange={handleChange}
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="icon icon-tabler icon-tabler-search absolute left-56 top-5 transform -translate-y-1/2 cursor-pointer"
            width="22"
            height="24"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="#2c3e50"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            onClick={handleSubmit}
            >
            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
            <path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0" />
            <path d="M21 21l-6 -6" 
            />
          </svg>
        </form>
      </div>
    </div>
  )
}
