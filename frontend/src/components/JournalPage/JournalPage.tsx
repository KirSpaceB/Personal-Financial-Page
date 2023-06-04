import { ChangeEvent, FormEvent, useEffect, useState } from "react"
import { JournalHistory } from "./JournalHistory";
import { JournalHistoryHandler } from "./JournalHistoryHandler";
// Look into Abstracting the input component
type inputValuesType = {
  "Date of investment":string,
  "Reasoning Of Investment": string,
  "Profit / Loss? Why?": string,
};

export const JournalPage = () => {
  const [inputValues, setInputValues] = useState<inputValuesType>({
    "Date of investment" : "",
    "Reasoning Of Investment" : "",
    "Profit / Loss? Why?" : "",
  }); 
  const [arrayOfObjects, setArrayOfObjects] = useState<Array<object>>([]);
  
  const inputHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValues({
      ...inputValues,
      [e.target.placeholder]: e.target.value,
    });
  };
  
  const submitHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setArrayOfObjects((prevArray) => [...prevArray, inputValues]);
    setInputValues({
      "Date of investment": '',
      "Reasoning Of Investment": '',
      "Profit / Loss? Why?": ''
    }); // Clear the input fields after submission
  };
  JournalHistoryHandler(arrayOfObjects)
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="flex w-full p-8 bg-white rounded-lg shadow-md sm:w-3/4 md:w-1/2 lg:w-1/3">
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
            placeholder="Profit / Loss? Why?"
          />
          <button className="w-full p-2 text-white bg-indigo-500 rounded-lg hover:bg-indigo-600">
            Button
          </button>
        </form>
      </div>
      <JournalHistory/>
    </div>
  );
};