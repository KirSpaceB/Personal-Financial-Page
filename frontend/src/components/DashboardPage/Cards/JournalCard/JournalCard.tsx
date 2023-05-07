import { FC } from "react"
export type journalCardProps = {
  journalCardTitle:string,
}
export const JournalCard:FC<journalCardProps> = (props) => {
  const {journalCardTitle} = props
  return (
    <div>
      <div>
        <h3>{journalCardTitle}</h3>
      </div>
    </div>
  )
}