import { FC } from "react"

export type journalCardProps = {
  journalCardTitle:string,
}
export const JournalCard:FC<journalCardProps> = (props) => {
  const {journalCardTitle} = props
  return (
    <div>
      <div>
        <h3 className="w-56 h-56 mt-10 ml-10 bg-pc2">{journalCardTitle}</h3>
      </div>
    </div>
  )
}