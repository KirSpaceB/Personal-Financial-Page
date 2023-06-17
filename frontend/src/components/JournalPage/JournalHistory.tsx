import { inputValuesType } from "./JournalPage";
type JournalHistoryProps = {
  journalEntries: Array<inputValuesType>;
};

export const JournalHistory = ({ journalEntries } : JournalHistoryProps) => {
  // Now you can use journalEntries in this component
  return (
    <div className="w-[500px] h-[500px] bg-red-300">
      {journalEntries.map((entry, index) => (
        <div key={index}>
          <p>Date of Investment: {entry["Date of Investment"]}</p>
          <p>Reasoning Of Investment: {entry["Reasoning Of Investment"]}</p>
          <p>Profit / Loss? Why?: {entry["Profit / Loss? Why?"]}</p>
        </div>
      ))}
    </div>
  );
};