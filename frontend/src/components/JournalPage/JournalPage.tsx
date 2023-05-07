import { ChangeEvent, useState } from "react"

export const JournalPage = () => {
  const [getInputValue, setInputValue] = useState('');
  const [saveInputValue, setSavedInputValue] = useState<string[]>([])
  function inputHandler(e:ChangeEvent<HTMLInputElement>) {
    setInputValue(e.target.value);
  };
  function submitHandler(e:React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSavedInputValue(prevArray => [...prevArray, getInputValue])
  };
  console.log(saveInputValue);
  
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full p-8 bg-white rounded-lg shadow-md sm:w-3/4 md:w-1/2 lg:w-1/3">
        <form action="" onSubmit={(e) => submitHandler(e)} className="space-y-4">
        <input
              type="text"
              name=""
              id=""
              onChange={(e) => inputHandler(e)}
              className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500"
              placeholder="Date of investment"
          />
          <input
              type="text"
              name=""
              id=""
              onChange={(e) => inputHandler(e)}
              className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500"
              placeholder="Reasoning Of Investment"
          />
          <input
            type="text"
            name=""
            id=""
            onChange={(e) => inputHandler(e)}
            className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500"
            placeholder="Why did investment Profit / Loss"
          />
          <button className="w-full p-2 text-white bg-indigo-500 rounded-lg hover:bg-indigo-600">
            Button
          </button>
        </form>
        <div className="mt-8 space-y-2">
          {saveInputValue.map((items, index) => (
            <li key={index} className="p-2 bg-gray-200 rounded-lg">
              {items}
            </li>
          ))}
        </div>
      </div>
    </div>
  );
};
