export const InputBar = () => {

  return (
    <div className="flex items-center justify-center">
      <div className="relative w-1/2">
        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-chart-dots absolute left-2 top-1/2 transform -translate-y-1/2" width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" stroke="#2c3e50" fill="none" stroke-linecap="round" stroke-linejoin="round">
          <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
          <path d="M3 3v18h18" />
          <path d="M9 9m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
          <path d="M19 7m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
          <path d="M14 15m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
          <path d="M10.16 10.62l2.34 2.88" />
          <path d="M15.088 13.328l2.837 -4.586" />
        </svg>
        <input type="text" placeholder="Ticker Name" className='w-full h-10 border-gray-300 rounded-md focus:border-indigo-500 focus:outline-none pl-10'/>
      </div>
    </div>
  )
}
